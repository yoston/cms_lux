# Ejemplos de Consumo de API - Lux Viajes

## Base URL
```
http://localhost:1337/api
```

---

## 1. PÁGINA INICIO

### Obtener todos los datos de inicio
```bash
curl "http://localhost:1337/api/inicio?populate=*"
```

**Response:**
```json
{
  "data": {
    "id": 1,
    "attributes": {
      "diapositivas": [
        {
          "imagen": "banner1.jpg",
          "titulo": "Viaja a Europa",
          "subtitulo": "Experiencias inolvidables"
        }
      ],
      "clientesFrecuentes": "5000+",
      "experiencia": "20 años",
      "destinos": "150+",
      "valoracion": "4.9/5",
      "serviciosTitulo": "Nuestros Servicios",
      "serviciosDescripcion": "Ofrecemos los mejores servicios...",
      "tarjetasServicio": [
        {
          "titulo": "Vuelos",
          "subtitulo": "Mejores precios",
          "imagen": "icon-flight.svg"
        }
      ],
      "citaTitulo": "¿Listo para tu próxima aventura?",
      "citaSubtitulo": "Contáctanos hoy",
      "llamadaTitulo": "No esperes mas",
      "llamadaSubtitulo": "Reserva ahora",
      "destinosSonados": {
        "data": [
          {
            "id": 1,
            "attributes": {
              "titulo": "Cartagena",
              "subtitulo": "4 dias, 3 noches",
              "descripcion": "Descubre Cartagena...",
              "disponibilidad": "Todo el año",
              "duracion": "4 dias",
              "precio": "$2,500",
              "noches": "3",
              "descripcionDetallada": "Visita las murallas...",
              "incluidos": [
                "🏨 Hotel 5 estrellas",
                "✈️ Transporte"
              ]
            }
          }
        ]
      }
    }
  }
}
```

### JavaScript/React
```typescript
// Obtener datos de inicio
const fetchInicio = async () => {
  const response = await fetch(
    'http://localhost:1337/api/inicio?populate=*'
  );
  const data = await response.json();
  return data.data.attributes;
};

// Usar en componente
useEffect(() => {
  fetchInicio().then(inicio => {
    setDiapositivas(inicio.diapositivas);
    setEstadisticas({
      clientes: inicio.clientesFrecuentes,
      experiencia: inicio.experiencia,
      destinos: inicio.destinos,
      valoracion: inicio.valoracion
    });
  });
}, []);
```

---

## 2. PÁGINA NOSOTROS

### Obtener datos
```bash
curl "http://localhost:1337/api/nosotros?populate=*"
```

**Response:**
```json
{
  "data": {
    "id": 1,
    "attributes": {
      "heroImagen": {
        "data": {
          "id": 1,
          "attributes": {
            "url": "/uploads/hero_nosotros.jpg",
            "width": 1920,
            "height": 1080
          }
        }
      },
      "heroTitulo": "Sobre Nosotros",
      "heroSubtitulo": "Una empresa con historia",
      "quienesSomosTitulo": "Quienes Somos",
      "quienesSomosDescripcion": "Somos una agencia de viajes...",
      "porQueElegirnosTitulo": "Por Que Elegir nos",
      "destacados": [
        {
          "titulo": "Atencion personalizada",
          "subtitulo": "Servicio 24/7",
          "icono": "heart"
        },
        {
          "titulo": "Asesoria en visas",
          "subtitulo": "Expertos en trámites",
          "icono": "document"
        }
      ],
      "valores": [
        {
          "titulo": "Integridad",
          "descripcion": "Actuamos con transparencia..."
        }
      ]
    }
  }
}
```

### JavaScript/React
```typescript
const fetchNosotros = async () => {
  const response = await fetch(
    'http://localhost:1337/api/nosotros?populate=*'
  );
  const data = await response.json();
  return data.data.attributes;
};
```

---

## 3. PÁGINA PAQUETES

### Obtener todas las secciones de paquetes
```bash
curl "http://localhost:1337/api/paquete?populate=*"
```

### Obtener solo destinos sonados
```bash
curl "http://localhost:1337/api/destino-sonados?pagination[pageSize]=10"
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "titulo": "Cartagena",
        "subtitulo": "4 dias, 3 noches",
        "descripcion": "Descubre el encanto colonial...",
        "imagen": { "data": { "attributes": { "url": "/uploads/..." } } },
        "disponibilidad": "Todo el año",
        "duracion": "4 dias",
        "precio": "$2,500",
        "noches": "3",
        "descripcionDetallada": "...",
        "incluidos": ["🏨 Hotel 5 estrellas", "✈️ Transporte"]
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 10,
      "pageCount": 1,
      "total": 5
    }
  }
}
```

### Obtener paquetes premium
```bash
curl "http://localhost:1337/api/paquete-premiums?populate=*"
```

### Obtener parques temáticos
```bash
curl "http://localhost:1337/api/parque-tematicoS?populate=*"
```

### JavaScript/React
```typescript
// Obtener destinos sonados con paginación
const fetchDestinosSonados = async (page = 1) => {
  const response = await fetch(
    `http://localhost:1337/api/destino-sonados?pagination[page]=${page}&pagination[pageSize]=6&populate=*`
  );
  const data = await response.json();
  return data;
};

// Obtener paquetes premium
const fetchPaquetesPremium = async () => {
  const response = await fetch(
    'http://localhost:1337/api/paquete-premiums?populate=*'
  );
  const data = await response.json();
  return data.data;
};

// Obtener parques temáticos
const fetchParquesTematicos = async () => {
  const response = await fetch(
    'http://localhost:1337/api/parque-tematicoS?populate=*'
  );
  const data = await response.json();
  return data.data;
};
```

---

## 4. PÁGINA SERVICIOS

### Obtener datos
```bash
curl "http://localhost:1337/api/servicio?populate=*"
```

**Response:**
```json
{
  "data": {
    "id": 1,
    "attributes": {
      "heroTitulo": "Nuestros Servicios",
      "heroSubtitulo": "Ofrecemos soluciones integrales",
      "serviciosTitulo": "Servicios Principales",
      "serviciosDescripcion": "Contamos con...",
      "serviciosDetalle": [
        {
          "nombre": "Transporte",
          "descripcion": "Vehículos privados...",
          "icono": "car"
        }
      ],
      "citaTitulo": "¿Necesitas más información?",
      "citaSubtitulo": "Contacta con nosotros",
      "llamadaTitulo": "Reserva tu viaje",
      "llamadaSubtitulo": "Hoy mismo"
    }
  }
}
```

---

## 5. CREAR/ACTUALIZAR CONTENIDO

### Crear un destino sonado
```bash
curl -X POST "http://localhost:1337/api/destino-sonados" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "data": {
      "titulo": "Dubai Exclusivo",
      "subtitulo": "8 dias, 7 noches",
      "descripcion": "Vive la experiencia de lujo en Dubai",
      "disponibilidad": "Todo el año",
      "duracion": "8 dias",
      "precio": "$4,500",
      "noches": "7",
      "descripcionDetallada": "Lujo y modernidad...",
      "incluidos": [
        "🏨 Hotel Burj Al Arab",
        "✈️ Primera clase",
        "🍽️ Restaurantes 5 estrellas"
      ]
    }
  }'
```

### Actualizar destino sonado
```bash
curl -X PUT "http://localhost:1337/api/destino-sonados/1" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "data": {
      "precio": "$3,999"
    }
  }'
```

### JavaScript/React
```typescript
// Crear destino
const createDestino = async (destinoData) => {
  const token = localStorage.getItem('strapiToken');
  const response = await fetch(
    'http://localhost:1337/api/destino-sonados',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        data: destinoData
      })
    }
  );
  return await response.json();
};

// Actualizar destino
const updateDestino = async (id, destinoData) => {
  const token = localStorage.getItem('strapiToken');
  const response = await fetch(
    `http://localhost:1337/api/destino-sonados/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        data: destinoData
      })
    }
  );
  return await response.json();
};
```

---

## 6. FILTROS Y BÚSQUEDA

### Buscar destinos por título
```bash
curl "http://localhost:1337/api/destino-sonados?filters[titulo][$contains]=Cartagena"
```

### Obtener con límite de resultados
```bash
curl "http://localhost:1337/api/destino-sonados?pagination[pageSize]=3"
```

### Ordenar por precio (descendente)
```bash
curl "http://localhost:1337/api/destino-sonados?sort=precio:desc"
```

### Combinaciones
```bash
curl "http://localhost:1337/api/destino-sonados?filters[disponibilidad][$eq]=Todo%20el%20año&sort=precio:asc&pagination[pageSize]=5"
```

---

## 7. SUBIR IMÁGENES

### Subir imagen
```bash
curl -X POST "http://localhost:1337/api/upload" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "files=@/path/to/image.jpg"
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "image.jpg",
    "url": "/uploads/image_hash.jpg",
    "width": 1920,
    "height": 1080,
    "size": 245000
  }
]
```

---

## Variables de Entorno

En el archivo `.env`:
```
HOST=0.0.0.0
PORT=1337
APP_KEYS=your_keys_here
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=your_jwt_secret
```

---

## Notas

- Reemplaza `YOUR_TOKEN` con un JWT válido del panel admin
- Las URLs de imágenes son relativas al servidor Strapi
- Para desarrollo local: `http://localhost:1337/uploads/...`
- En producción, usa la URL de tu dominio
- Todos los endpoints son REST API estándar Strapi

---

**Última actualización:** Abril 2026
