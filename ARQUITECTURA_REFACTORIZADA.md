# Diagrama de Arquitectura - Estructura Refactorizada

## 🏗️ Diagrama de Relaciones

```
┌─────────────────────────────────────────────────────────────────────┐
│                      ARCHITECTURE OVERVIEW                          │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                       SINGLE TYPES (1 instancia)                    │
└─────────────────────────────────────────────────────────────────────┘

    ┌──────────────┐        ┌──────────────┐
    │   INICIO     │◄──────►│  PAQUETE     │
    └──────────────┘        └──────────────┘
         │ 1:N                    │ 1:N
         ├─────────────────────────┼─────────────────────────┐
         │                         │                         │
    ┌────────────┐         ┌────────────┐            ┌──────────────┐
    │ Diapositiva│         │TarjetaServ.│            │Destino Sonado│
    └────────────┘         └────────────┘            └──────────────┘
    • titulo                • titulo                  • titulo
    • subtitulo             • subtitulo               • subtitulo
    • imagen (⭐)            • imagen (⭐)              • descripcion
    • orden                 • orden                   • imagen (⭐)
                                                      • precio
                                                      • noches
                                                      ├─ 1:N ItemIncluido
                                                      └─ precio, duracion


    ┌──────────────┐        ┌──────────────┐
    │  NOSOTROS    │        │  SERVICIO    │
    └──────────────┘        └──────────────┘
         │                        (sin cambios)
         ├─ 1:N DestinoDestacado
         └─ 1:N ValorEmpresarial


┌─────────────────────────────────────────────────────────────────────┐
│                    COLLECTION TYPES (N instancias)                  │
└─────────────────────────────────────────────────────────────────────┘

    ┌──────────────────┐         ┌──────────────────┐
    │ Destino Sonado   │         │  Paquete Premium │
    └──────────────────┘         └──────────────────┘
    • titulo                      • titulo
    • subtitulo                   • etiqueta (enum)
    • descripcion                 • dias
    • imagen (⭐)                  • imagen (⭐)
    • precio                      • precio
    • noches                      • duracion
    ├─ 1:N ItemIncluido           ├─ N:N ItemIncluido
    └─ destacados                 └─ N:N DestinoDestacado


    ┌──────────────────┐         ┌──────────────────┐
    │  Parque Temático │         │     Servicio     │
    └──────────────────┘         └──────────────────┘
    • titulo                      • heroTitulo
    • subtitulo                   • heroSubtitulo
    • imagen (⭐)                  • serviciosTitulo
    (sin cambios)                 (sin cambios)


┌─────────────────────────────────────────────────────────────────────┐
│                     SHARED RESOURCES (Reutilizables)                │
└─────────────────────────────────────────────────────────────────────┘

    ┌──────────────────┐         ┌──────────────────┐
    │  Item Incluido   │         │ Destino Destacado│
    └──────────────────┘         └──────────────────┘
    • descripcion                 • titulo
    • icono                       • descripcion
    • orden                       • imagen (⭐)
                                  • enlace
    Usado en:                     • orden
    ├─ Destino Sonado
    ├─ Paquete Premium            Usado en:
    │                             ├─ Nosotros
    │                             └─ Paquete Premium


    ┌──────────────────────────────────────────────────┐
    │          Valor Empresarial                       │
    └──────────────────────────────────────────────────┘
    • titulo
    • descripcion
    • icono
    • orden

    Usado en:
    └─ Nosotros
```

---

## 📊 Tabla de Relaciones

| Source | Target | Type | Cardinalidad | Reutilizable |
|--------|--------|------|--------------|--------------|
| Inicio | Diapositiva | oneToMany | 1 → ∞ | ✅ |
| Inicio | TarjetaServicio | oneToMany | 1 → ∞ | ✅ |
| Inicio | DestinoSonado | oneToMany | 1 → ∞ | ✅ |
| Nosotros | DestinoDestacado | oneToMany | 1 → ∞ | ✅ |
| Nosotros | ValorEmpresarial | oneToMany | 1 → ∞ | ✅ |
| DestinoSonado | ItemIncluido | oneToMany | 1 → ∞ | ✅ |
| PaquetePremium | ItemIncluido | oneToMany | 1 → ∞ | ✅ |
| PaquetePremium | DestinoDestacado | oneToMany | 1 → ∞ | ✅ |
| Paquete | DestinoSonado | oneToMany | 1 → ∞ | ✅ |
| Paquete | PaquetePremium | oneToMany | 1 → ∞ | ✅ |
| Paquete | ParqueTematico | oneToMany | 1 → ∞ | ✅ |

---

## 🗂️ Estructura de Carpetas Actual

```
src/api/
├── inicio/                          (SingleType)
│   ├── content-types/inicio/
│   │   └── schema.ts               (✅ Actualizado - relaciones)
│   ├── routes/
│   ├── controllers/
│   └── services/
│
├── nosotros/                        (SingleType)
│   ├── content-types/nosotros/
│   │   └── schema.ts               (✅ Actualizado - relaciones)
│   ├── routes/
│   ├── controllers/
│   └── services/
│
├── paquete/                         (SingleType)
│   ├── content-types/paquete/
│   │   └── schema.ts               (sin cambios)
│   ├── routes/
│   ├── controllers/
│   └── services/
│
├── servicio/                        (SingleType)
│   ├── content-types/servicio/
│   │   └── schema.ts               (sin cambios)
│   ├── routes/
│   ├── controllers/
│   └── services/
│
├── destino-sonado/                  (CollectionType)
│   ├── content-types/destino-sonado/
│   │   └── schema.ts               (✅ Actualizado - relaciones)
│   ├── routes/
│   ├── controllers/
│   └── services/
│
├── paquete-premium/                 (CollectionType)
│   ├── content-types/paquete-premium/
│   │   └── schema.ts               (✅ Actualizado - relaciones)
│   ├── routes/
│   ├── controllers/
│   └── services/
│
├── parque-tematico/                 (CollectionType)
│   ├── content-types/parque-tematico/
│   │   └── schema.ts               (sin cambios)
│   ├── routes/
│   ├── controllers/
│   └── services/
│
├── 🆕 diapositiva/                  (CollectionType - NUEVO)
│   ├── content-types/diapositiva/
│   │   └── schema.ts
│   ├── routes/diapositiva.ts
│   ├── controllers/diapositiva.ts
│   └── services/
│
├── 🆕 tarjeta-servicio/             (CollectionType - NUEVO)
│   ├── content-types/tarjeta-servicio/
│   │   └── schema.ts
│   ├── routes/tarjeta-servicio.ts
│   ├── controllers/tarjeta-servicio.ts
│   └── services/
│
├── 🆕 item-incluido/                (CollectionType - NUEVO)
│   ├── content-types/item-incluido/
│   │   └── schema.ts
│   ├── routes/item-incluido.ts
│   ├── controllers/item-incluido.ts
│   └── services/
│
├── 🆕 destino-destacado/            (CollectionType - NUEVO)
│   ├── content-types/destino-destacado/
│   │   └── schema.ts
│   ├── routes/destino-destacado.ts
│   ├── controllers/destino-destacado.ts
│   └── services/
│
└── 🆕 valor-empresarial/            (CollectionType - NUEVO)
    ├── content-types/valor-empresarial/
    │   └── schema.ts
    ├── routes/valor-empresarial.ts
    ├── controllers/valor-empresarial.ts
    └── services/
```

---

## 🔄 Flujo de Datos

### Antes (JSON)
```
Request → Inicio (SingleType) → Diapositivas (JSON array) → Response
```

### Después (Relaciones)
```
Request → Inicio (SingleType) → Relation → Diapositivas (Collection) → Response
         (con populate=*)                  (validados y estructurados)
```

---

## 📈 Comparativa de Escalabilidad

| Aspecto | Antes (JSON) | Después (Relaciones) |
|---------|------------|----------------------|
| Validación | Manual | Automática ✅ |
| Media Upload | Texto en JSON | Strapi Media ✅ |
| Reutilización | Duplicación | Centralizada ✅ |
| Relaciones | Nested JSON | Native Relations ✅ |
| Ordenamiento | Manual | Campo `orden` ✅ |
| Escalabilidad | Limitada | Ilimitada ✅ |
| Admin UX | Textareas | Interfaces Dedicadas ✅ |

---

## ✨ Beneficios por Caso de Uso

### Marketing Team
- ✅ Interfaz amigable para crear diapositivas
- ✅ Vista previa en tiempo real
- ✅ Reutilizar items en múltiples destinos

### Developers
- ✅ API tipada y validada
- ✅ Queries eficientes
- ✅ Relaciones bien definidas

### Managers
- ✅ Control centralizado de contenido
- ✅ Cambios en un lugar = cambios en todos lados
- ✅ Mejor reportería

### Users
- ✅ Mejor performance
- ✅ Datos consistentes
- ✅ UX mejorada en frontend
