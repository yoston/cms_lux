# Nuevas Páginas Agregadas - Contacto, Visas y Ayuda

## 📋 Resumen de Adiciones

Se han agregado **3 nuevas SingleTypes (páginas)** al CMS de Lux Viajes. Cada una está completamente funcional con endpoints REST y campos optimizados para su propósito.

---

## 🆕 Página 1: CONTACTO

### Propósito
Gestionar toda la información de contacto, formularios y datos de ubicación de la empresa.

### Ubicación en API
- **Endpoint:** `GET /api/contacto`
- **Tipo:** SingleType (1 instancia)
- **Método:** GET/PUT (sin POST/DELETE)

### Campos Disponibles

#### Sección Hero
- `heroImagen` (media) - Imagen de fondo/banner
- `heroTitulo` (string, max 255) - Título principal
- `heroSubtitulo` (string, max 255) - Subtítulo descriptivo

#### Información de Contacto
- `correo` (email) - Correo principal
- `telefono` (string, max 20) - Número telefónico
- `telefonoWhatsapp` (string, max 20) - Número WhatsApp
- `direccion` (text) - Dirección física
- `horarioLaboral` (text) - Horario de atención

#### Redes Sociales
- `redSocialFacebook` (string, max 500) - URL Facebook
- `redSocialInstagram` (string, max 500) - URL Instagram
- `redSocialTwitter` (string, max 500) - URL Twitter
- `redSocialLinkedin` (string, max 500) - URL LinkedIn

#### Ubicación (Mapa)
- `latitud` (decimal) - Coordenada de latitud
- `longitud` (decimal) - Coordenada de longitud
- `mostrarMapa` (boolean, default: true) - Mostrar/ocultar mapa

#### Formulario
- `formularioTitulo` (string, max 255) - Título del formulario
- `formularioDescripcion` (text) - Descripción del formulario

### Ejemplo de Uso

```bash
# Obtener información de contacto
curl -X GET "http://localhost:1337/api/contacto"

# Actualizar información de contacto
curl -X PUT "http://localhost:1337/api/contacto" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "correo": "info@luxviajes.com",
      "telefono": "+57 1 234 5678",
      "telefonoWhatsapp": "+57 300 123 4567",
      "direccion": "Carrera 7 #45-89, Bogotá, Colombia",
      "horarioLaboral": "Lunes a Viernes: 9:00 AM - 6:00 PM",
      "latitud": 4.7110,
      "longitud": -74.0075,
      "redSocialFacebook": "https://facebook.com/luxviajes",
      "redSocialInstagram": "https://instagram.com/luxviajes"
    }
  }'
```

---

## 🆕 Página 2: VISAS

### Propósito
Proporcionar información completa sobre requisitos de visa, documentación y procesos para cada país.

### Ubicación en API
- **Endpoint:** `GET /api/visas`
- **Tipo:** SingleType (1 instancia)
- **Método:** GET/PUT (sin POST/DELETE)

### Campos Disponibles

#### Sección Hero
- `heroImagen` (media) - Banner de portada
- `heroTitulo` (string, max 255) - Título principal
- `heroSubtitulo` (string, max 255) - Subtítulo

#### Sección General
- `seccionGeneralTitulo` (string, max 255) - Título
- `seccionGeneralContenido` (text) - Contenido informativo general

#### Información Importante
- `informacionImportanteTitulo` (string, max 255) - Título
- `informacionImportante` (json) - Lista de puntos importantes

#### Documentos Requeridos
- `documentosTitulo` (string, max 255) - Título
- `documentosContenido` (json) - Lista de documentos necesarios

#### Proceso Paso a Paso
- `procesoPasoTitulo` (string, max 255) - Título
- `procesoPasoContenido` (json) - Pasos del proceso

#### Países Destacados
- `paisesTitulo` (string, max 255) - Título
- `paisesDescripcion` (text) - Descripción

#### FAQ (Preguntas Frecuentes)
- `faqTitulo` (string, max 255) - Título
- `faq` (json) - Lista de Q&A

#### Llamada a Acción
- `llamadaTitulo` (string, max 255) - Título
- `llamadaSubtitulo` (string, max 255) - Subtítulo

### Estructura JSON Recomendada

```json
{
  "informacionImportante": [
    { "titulo": "Pasaporte Válido", "descripcion": "Debe tener validez mínima de 6 meses" },
    { "titulo": "Fondos Suficientes", "descripcion": "Demostrar solvencia económica" }
  ],
  "documentosContenido": [
    { "nombre": "Pasaporte", "observaciones": "Original + 2 copias" },
    { "nombre": "Formulario de solicitud", "observaciones": "Diligenciado completamente" }
  ],
  "procesoPasoContenido": [
    { "paso": 1, "titulo": "Preparar documentos", "duracion": "1 semana" },
    { "paso": 2, "titulo": "Radicar solicitud", "duracion": "2 días" }
  ],
  "faq": [
    { "pregunta": "¿Cuánto demora el proceso?", "respuesta": "Entre 5 y 10 días laborales" }
  ]
}
```

### Ejemplo de Uso

```bash
# Obtener información de visas
curl -X GET "http://localhost:1337/api/visas"

# Actualizar información de visas
curl -X PUT "http://localhost:1337/api/visas" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "heroTitulo": "Información sobre Visas",
      "heroSubtitulo": "Todo lo que necesitas saber",
      "seccionGeneralTitulo": "Introducción",
      "seccionGeneralContenido": "Aquí comienza la aventura...",
      "faqTitulo": "Preguntas Frecuentes",
      "faq": [
        { "pregunta": "¿Cuánto cuesta?", "respuesta": "$100 USD" }
      ]
    }
  }'
```

---

## 🆕 Página 3: AYUDA (Centro de Ayuda)

### Propósito
Proporcionar un centro de ayuda integral con FAQs, categorías, guías y contacto de soporte.

### Ubicación en API
- **Endpoint:** `GET /api/ayuda`
- **Tipo:** SingleType (1 instancia)
- **Método:** GET/PUT (sin POST/DELETE)

### Campos Disponibles

#### Sección Hero
- `heroImagen` (media) - Banner de bienvenida
- `heroTitulo` (string, max 255) - Título principal
- `heroSubtitulo` (string, max 255) - Subtítulo

#### Búsqueda
- `searchTitulo` (string, max 255) - Título de sección
- `searchPlaceholder` (string, max 255) - Placeholder del buscador

#### Categorías de Ayuda
- `categoriasTitulo` (string, max 255) - Título
- `categorias` (json) - Lista de categorías

#### FAQ Principales
- `faqTitulo` (string, max 255) - Título
- `faq` (json) - Preguntas frecuentes

#### Guías y Tutoriales
- `guiasTitulo` (string, max 255) - Título
- `guiasDescripcion` (text) - Descripción

#### Contacto de Soporte
- `soporteTitulo` (string, max 255) - Título
- `soporteDescripcion` (text) - Descripción
- `soporteCorreo` (email) - Correo de soporte
- `soporteTelefono` (string, max 20) - Teléfono
- `soportoHorario` (text) - Horario disponible

#### Links Útiles
- `linksUtilesTitulo` (string, max 255) - Título
- `linksUtiles` (json) - Lista de enlaces

#### Video Tutorial
- `videoTutorialURL` (string, max 500) - URL del video
- `videoTutorialTitulo` (string, max 255) - Título del video

### Estructura JSON Recomendada

```json
{
  "categorias": [
    { "id": 1, "nombre": "Reservas", "icono": "📅" },
    { "id": 2, "nombre": "Pagos", "icono": "💳" },
    { "id": 3, "nombre": "Cancelaciones", "icono": "❌" }
  ],
  "faq": [
    { "pregunta": "¿Cómo hacer una reserva?", "respuesta": "Accede a..." },
    { "pregunta": "¿Puedo modificar mi reserva?", "respuesta": "Sí, hasta..." }
  ],
  "linksUtiles": [
    { "titulo": "Blog", "url": "/blog" },
    { "titulo": "Términos y Condiciones", "url": "/terms" },
    { "titulo": "Política de Privacidad", "url": "/privacy" }
  ]
}
```

### Ejemplo de Uso

```bash
# Obtener información de ayuda
curl -X GET "http://localhost:1337/api/ayuda"

# Actualizar información de ayuda
curl -X PUT "http://localhost:1337/api/ayuda" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "heroTitulo": "Centro de Ayuda Lux Viajes",
      "heroSubtitulo": "¿En qué te podemos ayudar?",
      "searchTitulo": "Buscar Ayuda",
      "searchPlaceholder": "Escribe tu pregunta...",
      "soporteCorreo": "soporte@luxviajes.com",
      "soporteTelefono": "+57 1 234 5678",
      "soportoHorario": "24/7",
      "categorias": [
        { "id": 1, "nombre": "Reservas", "icono": "📅" }
      ],
      "faq": [
        { "pregunta": "¿Cómo cancelo?", "respuesta": "Puedes cancelar desde..." }
      ]
    }
  }'
```

---

## 📊 Resumen General de las 3 Páginas

| Página | Endpoint | Campos | Propósito |
|--------|----------|--------|-----------|
| **Contacto** | `/api/contacto` | 13 campos | Info de contacto, ubicación, redes sociales |
| **Visas** | `/api/visas` | 13 campos | Requisitos, documentos, procesos de visa |
| **Ayuda** | `/api/ayuda` | 14 campos | FAQ, categorías, guías, soporte |

---

## 🔑 Características Principales

### ✅ Validación
- Todos los campos de email tienen validación integrada
- Campos de media con restricción a imágenes
- Límites de caracteres implementados

### ✅ Escalabilidad
- JSON fields permiten estructuras complejas
- Fácil de agregar más información sin cambiar el schema

### ✅ Admin UX
- Interfaces dedicadas para cada página
- Mejor que JSON textual en el formulario
- Validación en tiempo real

### ✅ Seguridad
- GET endpoints públicos por defecto
- PUT requiere autenticación
- Sin POST/DELETE (datos configurables)

---

## 🚀 Próximos Pasos

1. **Crear contenido** en el Admin Panel (http://localhost:1337/admin)
2. **Obtener datos** desde el frontend usando los endpoints REST
3. **Consumir en Next.js** con fetch o librerías como axios

---

## 📝 Notas Importantes

- Estas son **SingleTypes**: existe solo 1 instancia de cada página
- Los cambios se hacen con **PUT**, no hay creación ni eliminación
- Los campos JSON requieren estructura bien formada
- Las imágenes se cargan a través del media manager de Strapi

---

## 🎨 Estructura de Carpetas

```
src/api/
├── contacto/                    (🆕 SingleType - NUEVO)
│   ├── content-types/contacto/
│   │   └── schema.ts
│   ├── routes/contacto.ts
│   ├── controllers/contacto.ts
│   └── services/
│
├── visas/                       (🆕 SingleType - NUEVO)
│   ├── content-types/visas/
│   │   └── schema.ts
│   ├── routes/visas.ts
│   ├── controllers/visas.ts
│   └── services/
│
└── ayuda/                       (🆕 SingleType - NUEVO)
    ├── content-types/ayuda/
    │   └── schema.ts
    ├── routes/ayuda.ts
    ├── controllers/ayuda.ts
    └── services/
```

**Total de Content Types: 10**
- 4 SingleTypes: Inicio, Nosotros, Paquete, Servicio, Contacto, Visas, Ayuda
- 6 CollectionTypes: Destino Sonado, Paquete Premium, Parque Temático, Diapositiva, Tarjeta Servicio, Item Incluido, Destino Destacado, Valor Empresarial
