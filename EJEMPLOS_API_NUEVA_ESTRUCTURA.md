# Ejemplos de API - Estructura Refactorizada

## 📌 Operaciones CRUD en Nuevos Content Types

### 1. **Diapositivas**

#### Obtener todas las diapositivas
```bash
curl -X GET "http://localhost:1337/api/diapositivas"
```

```javascript
// JavaScript/TypeScript
const diapositivas = await fetch('http://localhost:1337/api/diapositivas')
  .then(res => res.json());

console.log(diapositivas);
```

**Respuesta:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "titulo": "Cartagena Mágica",
        "subtitulo": "Explora la joya del caribe",
        "orden": 1,
        "imagen": {
          "data": {
            "id": 5,
            "attributes": {
              "url": "/uploads/cartagena.jpg"
            }
          }
        }
      }
    }
  ]
}
```

#### Crear una diapositiva
```bash
curl -X POST "http://localhost:1337/api/diapositivas" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "titulo": "Panamá Aventura",
      "subtitulo": "Naturaleza y cultura",
      "orden": 2,
      "imagen": 6
    }
  }'
```

```javascript
const newSlide = await fetch('http://localhost:1337/api/diapositivas', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    data: {
      titulo: "Panamá Aventura",
      subtitulo: "Naturaleza y cultura",
      orden: 2,
      imagen: 6
    }
  })
}).then(res => res.json());
```

#### Actualizar una diapositiva
```bash
curl -X PUT "http://localhost:1337/api/diapositivas/1" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "subtitulo": "Actualizado: La joya del caribe"
    }
  }'
```

#### Eliminar una diapositiva
```bash
curl -X DELETE "http://localhost:1337/api/diapositivas/1"
```

---

### 2. **Tarjetas de Servicio**

#### Obtener todos los servicios
```bash
curl -X GET "http://localhost:1337/api/tarjeta-servicios"
```

```javascript
const servicios = await fetch('http://localhost:1337/api/tarjeta-servicios')
  .then(res => res.json());
```

#### Crear un servicio
```bash
curl -X POST "http://localhost:1337/api/tarjeta-servicios" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "titulo": "Transporte Premium",
      "subtitulo": "Vehículos de lujo",
      "orden": 1,
      "imagen": 10
    }
  }'
```

---

### 3. **Items Incluidos**

#### Obtener items incluidos
```bash
curl -X GET "http://localhost:1337/api/item-incluidos"
```

**Respuesta:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "descripcion": "Alojamiento 5 estrellas",
        "icono": "🏨",
        "orden": 1
      }
    },
    {
      "id": 2,
      "attributes": {
        "descripcion": "Tours guiados",
        "icono": "🗺️",
        "orden": 2
      }
    }
  ]
}
```

#### Crear un item incluido
```bash
curl -X POST "http://localhost:1337/api/item-incluidos" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "descripcion": "Comidas incluidas",
      "icono": "🍽️",
      "orden": 3
    }
  }'
```

---

### 4. **Destinos Destacados**

#### Obtener destinos destacados
```bash
curl -X GET "http://localhost:1337/api/destino-destacados"
```

**Respuesta:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "titulo": "Cartagena",
        "descripcion": "La ciudad amurallada más bella del caribe",
        "enlace": "/destinos/cartagena",
        "orden": 1,
        "imagen": {
          "data": {
            "id": 8,
            "attributes": {
              "url": "/uploads/cartagena-hero.jpg"
            }
          }
        }
      }
    }
  ]
}
```

#### Crear un destino destacado
```bash
curl -X POST "http://localhost:1337/api/destino-destacados" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "titulo": "Panamá",
      "descripcion": "Entre dos océanos",
      "enlace": "/destinos/panama",
      "orden": 2,
      "imagen": 9
    }
  }'
```

---

### 5. **Valores Empresariales**

#### Obtener valores
```bash
curl -X GET "http://localhost:1337/api/valor-empresarials"
```

**Respuesta:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "titulo": "Excelencia",
        "descripcion": "Nos comprometemos con la calidad en cada servicio",
        "icono": "⭐",
        "orden": 1
      }
    },
    {
      "id": 2,
      "attributes": {
        "titulo": "Sostenibilidad",
        "descripcion": "Viajes responsables con el medio ambiente",
        "icono": "🌍",
        "orden": 2
      }
    }
  ]
}
```

#### Crear un valor
```bash
curl -X POST "http://localhost:1337/api/valor-empresarials" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "titulo": "Confianza",
      "descripcion": "Transparencia en cada transacción",
      "icono": "🤝",
      "orden": 3
    }
  }'
```

---

## 🔗 Relaciones - Obtener Datos Relacionados

### Obtener Inicio con todas sus relaciones

```bash
curl "http://localhost:1337/api/inicio?populate=*"
```

**Respuesta:**
```json
{
  "data": {
    "id": 1,
    "attributes": {
      "diapositivas": {
        "data": [
          {
            "id": 1,
            "attributes": {
              "titulo": "Cartagena Mágica",
              "subtitulo": "Explora la joya del caribe",
              "imagen": { "data": { "attributes": { "url": "/uploads/..." } } }
            }
          }
        ]
      },
      "tarjetasServicio": {
        "data": [
          {
            "id": 1,
            "attributes": {
              "titulo": "Transporte Premium",
              "subtitulo": "Vehículos de lujo"
            }
          }
        ]
      },
      "destinosSonados": {
        "data": [...]
      }
    }
  }
}
```

### Obtener Destino Sonado con Items Incluidos

```bash
curl "http://localhost:1337/api/destino-sonados/1?populate[incluidos]=*"
```

**Respuesta:**
```json
{
  "data": {
    "id": 1,
    "attributes": {
      "titulo": "Cartagena Romántica",
      "incluidos": {
        "data": [
          {
            "id": 1,
            "attributes": {
              "descripcion": "Alojamiento 5 estrellas",
              "icono": "🏨"
            }
          },
          {
            "id": 2,
            "attributes": {
              "descripcion": "Tours guiados",
              "icono": "🗺️"
            }
          }
        ]
      }
    }
  }
}
```

---

## 📝 Conectar Relaciones desde Inicio

```bash
# Asociar diapositivas al Inicio
curl -X PUT "http://localhost:1337/api/inicio" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "diapositivas": [1, 2, 3],
      "tarjetasServicio": [1, 2, 3, 4]
    }
  }'
```

```javascript
const updateInicio = await fetch('http://localhost:1337/api/inicio', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    data: {
      diapositivas: [1, 2, 3],
      tarjetasServicio: [1, 2, 3, 4]
    }
  })
}).then(res => res.json());
```

---

## 🎨 Ejemplo Completo: Crear un Destino con Items

```javascript
// 1. Crear items incluidos
const item1 = await fetch('http://localhost:1337/api/item-incluidos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    data: {
      descripcion: "Vuelo directo",
      icono: "✈️",
      orden: 1
    }
  })
}).then(res => res.json());

const item2 = await fetch('http://localhost:1337/api/item-incluidos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    data: {
      descripcion: "Hotel de 5 estrellas",
      icono: "🏨",
      orden: 2
    }
  })
}).then(res => res.json());

// 2. Crear el destino y relacionar los items
const destino = await fetch('http://localhost:1337/api/destino-sonados', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    data: {
      titulo: "Cartagena Premium",
      subtitulo: "5 noches",
      descripcion: "Experiencia única en el caribe",
      precio: "$2500",
      noches: "5",
      incluidos: [item1.data.id, item2.data.id]
    }
  })
}).then(res => res.json());

console.log(destino);
```

---

## 🔐 Notas de Seguridad

- Por defecto, los endpoints GET son públicos
- POST, PUT, DELETE requieren autenticación
- Configura permisos en Settings → Users & Permissions Plugin
- Para desarrollo inicial, puedes permitir acceso público si lo necesitas

---

## 📊 Estructura de Datos Nueva vs Anterior

### ANTES (JSON)
```json
{
  "diapositivas": [
    { "titulo": "Slide 1", "subtitulo": "...", "imagen": "url" },
    { "titulo": "Slide 2", "subtitulo": "...", "imagen": "url" }
  ]
}
```

### DESPUÉS (Relaciones)
```json
{
  "diapositivas": {
    "data": [
      {
        "id": 1,
        "attributes": {
          "titulo": "Slide 1",
          "subtitulo": "...",
          "imagen": { "data": { "attributes": { "url": "..." } } }
        }
      }
    ]
  }
}
```

**Ventajas:**
- Validación automática de campos
- Media handling integrado
- Mejor escalabilidad
- Más fácil de actualizar
