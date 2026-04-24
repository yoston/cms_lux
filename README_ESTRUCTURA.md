# CMS Lux Viajes - Strapi v5

CMS basado en Strapi v5 para gestionar el contenido de Lux Viajes

## Estructura de Colecciones

### 1. **Inicio** (`/api/inicio`)
Página única (singleType) que contiene toda la configuración de la página de inicio.

**Parámetros en API:**
- `diapositivas`: array - Carrusel hero
- `clientesFrecuentes`: string - Número de clientes
- `experiencia`: string - Años de experiencia
- `destinos`: string - Número de destinos
- `valoracion`: string - Valoración promedio
- `serviciosTitulo`: string - Título de servicios
- `serviciosDescripcion`: text - Descripción de servicios
- `tarjetasServicio`: json - Tarjetas con información de servicios
- `citaTitulo`: string - Título de la sección cita
- `citaSubtitulo`: string - Subtítulo de la sección cita
- `llamadaTitulo`: string - Título de llamada a acción
- `llamadaSubtitulo`: string - Subtítulo de llamada a acción
- `destinosSonados`: relación - Array de destinos sonados

**Endpoint:**
```
GET  /api/inicio
PUT  /api/inicio
```

---

### 2. **Nosotros** (`/api/nosotros`)
Página única sobre la empresa.

**Parámetros en API:**
- `heroImagen`: media - Imagen del hero
- `heroTitulo`: string - Título del hero
- `heroSubtitulo`: string - Subtítulo del hero
- `quienesSomosTitulo`: string - Título de la sección
- `quienesSomosDescripcion`: text - Descripción
- `porQueElegirnosTitulo`: string - Título
- `destacados`: json - Array de destacados
- `valores`: json - Array de valores

**Endpoint:**
```
GET  /api/nosotros
PUT  /api/nosotros
```

**Estructura de Destacados:**
```json
[
  {
    "titulo": "Atencion personalizada",
    "subtitulo": "Descripción",
    "icono": "nombre_icono"
  }
]
```

---

### 3. **Paquetes** (`/api/paquete`)
Página única que gestiona todos los paquetes.

**Parámetros en API:**
- `heroTitulo`: string - Título del hero
- `heroSubtitulo`: string - Subtítulo del hero
- `llamadaTitulo`: string - Título de CTA
- `llamadaSubtitulo`: string - Subtítulo de CTA
- `boletinTitulo`: string - Título del boletín
- `boletinDescripcion`: text - Descripción del boletín
- `destinosSonados`: relación - Array de destinos
- `paquetesPremium`: relación - Array de paquetes premium
- `parquesTematicos`: relación - Array de parques temáticos

**Endpoint:**
```
GET  /api/paquete
PUT  /api/paquete
```

---

### 4. **Servicios** (`/api/servicio`)
Página única de servicios.

**Parámetros en API:**
- `heroTitulo`: string - Título del hero
- `heroSubtitulo`: string - Subtítulo del hero
- `serviciosTitulo`: string - Título de servicios
- `serviciosDescripcion`: text - Descripción
- `serviciosDetalle`: json - Detalles de servicios
- `citaTitulo`: string - Título de cita
- `citaSubtitulo`: string - Subtítulo de cita
- `llamadaTitulo`: string - Título de CTA
- `llamadaSubtitulo`: string - Subtítulo de CTA
- `boletinTitulo`: string - Título del boletín
- `boletinDescripcion`: text - Descripción del boletín

**Endpoint:**
```
GET  /api/servicio
PUT  /api/servicio
```

---

### 5. **Destino Sonado** (`/api/destino-sonado`)
Colección de destinos disponibles.

**Parámetros en API:**
- `titulo`: string - Nombre del destino
- `subtitulo`: string - Subtítulo (noches, etc)
- `descripcion`: text - Descripción breve
- `imagen`: media - Foto principal
- `disponibilidad`: string - Temporada o disponibilidad
- `duracion`: string - Duración del viaje
- `precio`: string - Precio
- `noches`: string - Número de noches
- `descripcionDetallada`: text - Descripción completa
- `incluidos`: json - Array de servicios incluidos

**Endpoints:**
```
GET    /api/destino-sonados          # Listar todos
GET    /api/destino-sonados/:id      # Obtener uno
POST   /api/destino-sonados          # Crear
PUT    /api/destino-sonados/:id      # Actualizar
DELETE /api/destino-sonados/:id      # Eliminar
```

**Ejemplo de JSON para `incluidos`:**
```json
[
  "🏨 Hospedaje 5 estrellas",
  "✈️ Vuelos internacionales",
  "🍽️ Desayuno incluido"
]
```

---

### 6. **Paquete Premium** (`/api/paquete-premium`)
Paquetes especiales con categorización.

**Parámetros en API:**
- `titulo`: string - Nombre del paquete
- `etiqueta`: enum - "Seleccion del concierge" | "Popular" | "Todo Incluido"
- `dias`: string - Número de días
- `imagen`: media - Foto del paquete
- `descripcion`: text - Descripción
- `duracion`: string - Duración
- `precio`: string - Precio
- `destacados`: json - Array de atracciones
- `incluidos`: json - Array de servicios incluidos

**Endpoints:**
```
GET    /api/paquete-premiums         # Listar todos
GET    /api/paquete-premiums/:id     # Obtener uno
POST   /api/paquete-premiums         # Crear
PUT    /api/paquete-premiums/:id     # Actualizar
DELETE /api/paquete-premiums/:id     # Eliminar
```

---

### 7. **Parque Tematico** (`/api/parque-tematico`)
Parques temáticos disponibles.

**Parámetros en API:**
- `titulo`: string - Nombre del parque
- `subtitulo`: string - Descripción breve
- `imagen`: media - Foto del parque

**Endpoints:**
```
GET    /api/parque-tematicoS         # Listar todos
GET    /api/parque-tematicoS/:id     # Obtener uno
POST   /api/parque-tematicoS         # Crear
PUT    /api/parque-tematicoS/:id     # Actualizar
DELETE /api/parque-tematicoS/:id     # Eliminar
```

---

## Cómo Ejecutar

### Desarrollo
```bash
cd cms_luxviajes
npm run develop
```
Accede a: `http://localhost:1337/admin`

### Producción
```bash
npm run build
npm run start
```

---

## Permisos y Rutas

Todas las rutas **GET** están públicas (sin autenticación).
Las rutas de **POST, PUT, DELETE** requieren autenticación.

Puedes configurar los permisos en el panel admin de Strapi en:
**Settings** → **Users & Permissions Plugin** → **Roles**

---

## Datos de Ejemplo

### Destino Sonado
```json
{
  "titulo": "Cartagena",
  "subtitulo": "4 dias, 3 noches",
  "descripcion": "Descubre el encanto de Cartagena",
  "disponibilidad": "Todo el año",
  "duracion": "4 dias",
  "precio": "$2,500",
  "noches": "3",
  "descripcionDetallada": "Visita las murallas históricas...",
  "incluidos": [
    "🏨 Hotel 5 estrellas",
    "✈️ Transporte aéreo",
    "🍽️ Comidas incluidas"
  ]
}
```

### Paquete Premium
```json
{
  "titulo": "Europa Magica",
  "etiqueta": "Popular",
  "dias": "12 dias",
  "descripcion": "Tour completo por Europa",
  "duracion": "12 dias",
  "precio": "$5,999",
  "destacados": [
    "París - Torre Eiffel",
    "Roma - Coliseo",
    "Venecia - Gondolas"
  ],
  "incluidos": [
    "✈️ Vuelos internacionales",
    "🏨 Alojamiento 5 estrellas",
    "🍽️ Todas las comidas"
  ]
}
```

---

## Configuración de CORS

Para que tu frontend pueda acceder a la API, configura CORS en `config/middlewares.ts`:

```typescript
export default [
  'strapi::cors',
  // ... otros middlewares
];
```

---

## Notas Importantes

- Los **títulos** en la UI de Strapi aparecen en español sin acentos ni ñ
- Los **parámetros de API** están todos en inglés (camelCase)
- Usa `populate=*` para traer todas las relaciones y media:
  ```
  GET /api/inicio?populate=*
  ```

---

**Creado:** Abril 2026
**Versión:** Strapi v5.43.0
