# Mejora Estructural - Content Types Refactorizados

## 📋 Resumen de Cambios

Se ha refactorizado la arquitectura de content types para mejorar la escalabilidad, mantenibilidad y usabilidad del CMS. Los campos JSON han sido convertidos a **content types dedicados**, permitiendo mejor gestión de contenido y relaciones más robustas.

---

## 🆕 Nuevos Content Types Creados

### 1. **Diapositiva** (`api::diapositiva.diapositiva`)

**Propósito:** Gestionar diapositivas para carruseles y banners.

**Campos:**
- `titulo` (string, requerido, max 255 caracteres) - Título de la diapositiva
- `subtitulo` (string, max 255 caracteres) - Subtítulo descriptivo
- `imagen` (media, requerido) - Imagen de la diapositiva
- `orden` (integer, default: 0) - Orden de visualización

**Endpoints REST:**
```
GET    /api/diapositivas
GET    /api/diapositivas/:id
POST   /api/diapositivas
PUT    /api/diapositivas/:id
DELETE /api/diapositivas/:id
```

**Uso:** Reemplaza el campo `diapositivas` (JSON) en el SingleType `Inicio`.

---

### 2. **Tarjeta Servicio** (`api::tarjeta-servicio.tarjeta-servicio`)

**Propósito:** Gestionar tarjetas de servicios para la sección de detalles.

**Campos:**
- `titulo` (string, requerido, max 255 caracteres) - Nombre del servicio
- `subtitulo` (string, max 255 caracteres) - Descripción corta
- `imagen` (media, requerido) - Icono o imagen del servicio
- `orden` (integer, default: 0) - Orden de visualización

**Endpoints REST:**
```
GET    /api/tarjeta-servicios
GET    /api/tarjeta-servicios/:id
POST   /api/tarjeta-servicios
PUT    /api/tarjeta-servicios/:id
DELETE /api/tarjeta-servicios/:id
```

**Uso:** Reemplaza el campo `tarjetasServicio` (JSON) en el SingleType `Inicio`.

---

### 3. **Item Incluido** (`api::item-incluido.item-incluido`)

**Propósito:** Gestionar items incluidos en paquetes y destinos.

**Campos:**
- `descripcion` (string, requerido, max 500 caracteres) - Descripción del item
- `icono` (string, max 50 caracteres) - Emoji o código de icono (ej: ✅, 🏨, 🍽️)
- `orden` (integer, default: 0) - Orden de visualización

**Endpoints REST:**
```
GET    /api/item-incluidos
GET    /api/item-incluidos/:id
POST   /api/item-incluidos
PUT    /api/item-incluidos/:id
DELETE /api/item-incluidos/:id
```

**Uso:** Reemplaza los campos `incluidos` (JSON) en `Destino Sonado` y `Paquete Premium`.

---

### 4. **Destino Destacado** (`api::destino-destacado.destino-destacado`)

**Propósito:** Gestionar destinos destacados para secciones especiales.

**Campos:**
- `titulo` (string, requerido, max 255 caracteres) - Nombre del destino
- `descripcion` (text) - Descripción detallada
- `imagen` (media) - Imagen del destino
- `enlace` (string, max 500 caracteres) - URL de referencia
- `orden` (integer, default: 0) - Orden de visualización

**Endpoints REST:**
```
GET    /api/destino-destacados
GET    /api/destino-destacados/:id
POST   /api/destino-destacados
PUT    /api/destino-destacados/:id
DELETE /api/destino-destacados/:id
```

**Uso:** Reemplaza los campos `destacados` (JSON) en `Nosotros` y `Paquete Premium`.

---

### 5. **Valor Empresarial** (`api::valor-empresarial.valor-empresarial`)

**Propósito:** Gestionar valores y principios de la empresa.

**Campos:**
- `titulo` (string, requerido, max 255 caracteres) - Nombre del valor
- `descripcion` (text) - Descripción del valor
- `icono` (string, max 50 caracteres) - Emoji o código representativo
- `orden` (integer, default: 0) - Orden de visualización

**Endpoints REST:**
```
GET    /api/valor-empresarials
GET    /api/valor-empresarials/:id
POST   /api/valor-empresarials
PUT    /api/valor-empresarials/:id
DELETE /api/valor-empresarials/:id
```

**Uso:** Reemplaza el campo `valores` (JSON) en el SingleType `Nosotros`.

---

## 🔗 Cambios en Relaciones

### **Inicio (SingleType)**

```typescript
// ANTES (JSON)
diapositivas: { type: 'json', required: true }
tarjetasServicio: { type: 'json' }

// DESPUÉS (Relación)
diapositivas: {
    type: 'relation',
    relation: 'oneToMany',
    target: 'api::diapositiva.diapositiva'
}
tarjetasServicio: {
    type: 'relation',
    relation: 'oneToMany',
    target: 'api::tarjeta-servicio.tarjeta-servicio'
}
```

### **Nosotros (SingleType)**

```typescript
// ANTES (JSON)
destacados: { type: 'json' }
valores: { type: 'json' }

// DESPUÉS (Relación)
destacados: {
    type: 'relation',
    relation: 'oneToMany',
    target: 'api::destino-destacado.destino-destacado'
}
valores: {
    type: 'relation',
    relation: 'oneToMany',
    target: 'api::valor-empresarial.valor-empresarial'
}
```

### **Destino Sonado (CollectionType)**

```typescript
// ANTES (JSON)
incluidos: { type: 'json' }

// DESPUÉS (Relación)
incluidos: {
    type: 'relation',
    relation: 'oneToMany',
    target: 'api::item-incluido.item-incluido'
}
```

### **Paquete Premium (CollectionType)**

```typescript
// ANTES (JSON)
destacados: { type: 'json' }
incluidos: { type: 'json' }

// DESPUÉS (Relación)
destacados: {
    type: 'relation',
    relation: 'oneToMany',
    target: 'api::item-incluido.item-incluido'
}
incluidos: {
    type: 'relation',
    relation: 'oneToMany',
    target: 'api::item-incluido.item-incluido'
}
```

---

## ✅ Beneficios de la Refactorización

### 1. **Mejor UX en Admin Panel**
- Interfaz dedicada para cada tipo de contenido
- Validación individual de campos
- Mejor gestión visual de relaciones

### 2. **Mayor Escalabilidad**
- Fácil agregar nuevos campos a cada tipo sin impactar el JSON
- Posibilidad de crear nuevas relaciones sin complicaciones
- Estructura predecible y mantenible

### 3. **Reutilización de Contenido**
- Los items pueden usarse en múltiples lugares (ej: `Item Incluido` en destinos y paquetes)
- Evita duplicación de datos
- Cambios centralizados

### 4. **API más Robusta**
- Endpoints dedicados para cada resource
- Mejor validación de tipos
- Consultas más eficientes

### 5. **Mantenibilidad**
- Código más organizado y estructurado
- Fácil de entender la jerarquía de datos
- Menos campos en JSON complejos

---

## 🚀 Cómo Usar la Nueva Estructura

### Ejemplo: Agregar Diapositivas

```bash
# 1. Crear una diapositiva
POST /api/diapositivas
{
  "data": {
    "titulo": "Cartagena Mágica",
    "subtitulo": "Explora la joya del caribe",
    "imagen": { "id": 5 },
    "orden": 1
  }
}

# 2. Relacionarla en Inicio
PUT /api/inicio
{
  "data": {
    "diapositivas": [1, 2, 3]
  }
}
```

### Ejemplo: Agregar Items Incluidos

```bash
# 1. Crear items
POST /api/item-incluidos
{
  "data": {
    "descripcion": "Transporte incluido",
    "icono": "🚕",
    "orden": 1
  }
}

# 2. Relacionarlos en Destino
PUT /api/destino-sonados/1
{
  "data": {
    "incluidos": [1, 2, 3, 4]
  }
}
```

---

## 📊 Resumen de Cambios por Archivo

| Archivo | Cambio |
|---------|--------|
| `src/api/inicio/schema.ts` | `diapositivas` y `tarjetasServicio`: JSON → Relación |
| `src/api/nosotros/schema.ts` | `destacados` y `valores`: JSON → Relación |
| `src/api/destino-sonado/schema.ts` | `incluidos`: JSON → Relación |
| `src/api/paquete-premium/schema.ts` | `destacados` e `incluidos`: JSON → Relación |
| Nuevos | 5 nuevos content types creados |

---

## 🔄 Migración de Datos (si es necesario)

Si tienes datos existentes en formato JSON, deberán migrarse a los nuevos content types. Esto se haría típicamente mediante:

1. Scripts de migración
2. Importación manual en el admin panel
3. APIs de terceros especializadas en migraciones

---

## 📝 Notas Técnicas

- Todos los nuevos content types son `collectionType` (múltiples instancias)
- Las relaciones son `oneToMany` desde los SingleTypes hacia los collections
- Se incluye campo `orden` para facilitar el ordenamiento en frontend
- Los endpoints siguen la convención estándar de Strapi
