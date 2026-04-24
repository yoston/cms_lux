# Ejemplos API - Contacto, Visas y Ayuda

## 🌐 Página: CONTACTO

### Obtener Información de Contacto

```bash
curl -X GET "http://localhost:1337/api/contacto?populate=*"
```

```javascript
// JavaScript
const contacto = await fetch('http://localhost:1337/api/contacto?populate=*')
  .then(res => res.json());

console.log(contacto.data.attributes);
```

**Respuesta:**
```json
{
  "data": {
    "id": 1,
    "attributes": {
      "heroTitulo": "Contacta con Nosotros",
      "heroSubtitulo": "Estamos aquí para ayudarte",
      "correo": "info@luxviajes.com",
      "telefono": "+57 1 234 5678",
      "telefonoWhatsapp": "+57 300 123 4567",
      "direccion": "Carrera 7 #45-89, Bogotá",
      "horarioLaboral": "Lun-Vie: 9AM-6PM",
      "redSocialFacebook": "https://facebook.com/luxviajes",
      "redSocialInstagram": "https://instagram.com/luxviajes",
      "redSocialTwitter": "https://twitter.com/luxviajes",
      "redSocialLinkedin": "https://linkedin.com/company/luxviajes",
      "latitud": 4.7110,
      "longitud": -74.0075,
      "mostrarMapa": true,
      "formularioTitulo": "Envíanos un Mensaje",
      "formularioDescripcion": "Completa el siguiente formulario y nos pondremos en contacto pronto",
      "heroImagen": {
        "data": {
          "id": 1,
          "attributes": {
            "url": "/uploads/contacto_hero.jpg"
          }
        }
      }
    }
  }
}
```

### Actualizar Información de Contacto

```bash
curl -X PUT "http://localhost:1337/api/contacto" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "data": {
      "correo": "nuevoemail@luxviajes.com",
      "telefono": "+57 1 999 8888",
      "latitud": 4.7200,
      "longitud": -74.0100
    }
  }'
```

### Consumir en React

```jsx
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [contacto, setContacto] = useState(null);

  useEffect(() => {
    const fetchContacto = async () => {
      const res = await fetch('http://localhost:1337/api/contacto?populate=*');
      const data = await res.json();
      setContacto(data.data.attributes);
    };
    
    fetchContacto();
  }, []);

  if (!contacto) return <div>Cargando...</div>;

  return (
    <div className="contacto">
      <h1>{contacto.heroTitulo}</h1>
      <p>{contacto.heroSubtitulo}</p>
      
      <div className="info-contacto">
        <p>📧 {contacto.correo}</p>
        <p>📞 {contacto.telefono}</p>
        <p>💬 WhatsApp: {contacto.telefonoWhatsapp}</p>
        <p>📍 {contacto.direccion}</p>
        <p>🕐 {contacto.horarioLaboral}</p>
      </div>

      <div className="redes-sociales">
        <a href={contacto.redSocialFacebook}>Facebook</a>
        <a href={contacto.redSocialInstagram}>Instagram</a>
        <a href={contacto.redSocialTwitter}>Twitter</a>
      </div>

      {contacto.mostrarMapa && (
        <iframe
          width="100%"
          height="400"
          src={`https://maps.google.com/maps?q=${contacto.latitud},${contacto.longitud}&z=15&output=embed`}
        />
      )}
    </div>
  );
}
```

---

## 🛂 Página: VISAS

### Obtener Información de Visas

```bash
curl -X GET "http://localhost:1337/api/visas?populate=*"
```

```javascript
// JavaScript/TypeScript
const visas = await fetch('http://localhost:1337/api/visas?populate=*')
  .then(res => res.json());

console.log(visas.data.attributes);
```

**Respuesta:**
```json
{
  "data": {
    "id": 1,
    "attributes": {
      "heroTitulo": "Información sobre Visas",
      "heroSubtitulo": "Todo lo que necesitas saber para viajar",
      "seccionGeneralTitulo": "¿Qué es una Visa?",
      "seccionGeneralContenido": "Una visa es un documento oficial...",
      "informacionImportanteTitulo": "Información Importante",
      "informacionImportante": [
        {
          "titulo": "Pasaporte Válido",
          "descripcion": "Debe tener validez mínima de 6 meses"
        },
        {
          "titulo": "Fondos Suficientes",
          "descripcion": "Demostrar solvencia económica"
        }
      ],
      "documentosTitulo": "Documentos Requeridos",
      "documentosContenido": [
        {
          "nombre": "Pasaporte",
          "observaciones": "Original + 2 copias certificadas"
        },
        {
          "nombre": "Fotografía",
          "observaciones": "4x4 cm, fondo blanco"
        }
      ],
      "procesoPasoTitulo": "Proceso Paso a Paso",
      "procesoPasoContenido": [
        {
          "paso": 1,
          "titulo": "Preparar Documentación",
          "duracion": "1-2 semanas"
        },
        {
          "paso": 2,
          "titulo": "Hacer Cita en Embajada",
          "duracion": "1-3 días"
        }
      ],
      "paisesTitulo": "Países Destacados",
      "paisesDescripcion": "Información específica para los destinos más visitados",
      "faqTitulo": "Preguntas Frecuentes",
      "faq": [
        {
          "pregunta": "¿Cuánto tiempo demora?",
          "respuesta": "Entre 5 y 10 días laborales"
        },
        {
          "pregunta": "¿Cuál es el costo?",
          "respuesta": "Varía según el país, generalmente $100-300 USD"
        }
      ]
    }
  }
}
```

### Actualizar Información de Visas

```bash
curl -X PUT "http://localhost:1337/api/visas" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "data": {
      "heroTitulo": "Guía Completa de Visas 2026",
      "faq": [
        {
          "pregunta": "¿Necesito visa para USA?",
          "respuesta": "Depende de tu nacionalidad..."
        }
      ]
    }
  }'
```

### Consumir en React

```jsx
import { useState, useEffect } from 'react';

export default function VisasPage() {
  const [visas, setVisas] = useState(null);

  useEffect(() => {
    const fetchVisas = async () => {
      const res = await fetch('http://localhost:1337/api/visas?populate=*');
      const data = await res.json();
      setVisas(data.data.attributes);
    };
    
    fetchVisas();
  }, []);

  if (!visas) return <div>Cargando...</div>;

  return (
    <div className="visas">
      <h1>{visas.heroTitulo}</h1>
      <p>{visas.heroSubtitulo}</p>

      <section className="general">
        <h2>{visas.seccionGeneralTitulo}</h2>
        <p>{visas.seccionGeneralContenido}</p>
      </section>

      <section className="importante">
        <h2>{visas.informacionImportanteTitulo}</h2>
        <ul>
          {visas.informacionImportante?.map((item, idx) => (
            <li key={idx}>
              <strong>{item.titulo}:</strong> {item.descripcion}
            </li>
          ))}
        </ul>
      </section>

      <section className="documentos">
        <h2>{visas.documentosTitulo}</h2>
        <ul>
          {visas.documentosContenido?.map((doc, idx) => (
            <li key={idx}>
              <strong>{doc.nombre}</strong> - {doc.observaciones}
            </li>
          ))}
        </ul>
      </section>

      <section className="proceso">
        <h2>{visas.procesoPasoTitulo}</h2>
        {visas.procesoPasoContenido?.map((paso) => (
          <div key={paso.paso} className="paso">
            <h3>Paso {paso.paso}: {paso.titulo}</h3>
            <p>Duración estimada: {paso.duracion}</p>
          </div>
        ))}
      </section>

      <section className="faq">
        <h2>{visas.faqTitulo}</h2>
        <div className="accordion">
          {visas.faq?.map((item, idx) => (
            <details key={idx}>
              <summary>{item.pregunta}</summary>
              <p>{item.respuesta}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
```

---

## 🆘 Página: AYUDA (Centro de Ayuda)

### Obtener Información de Ayuda

```bash
curl -X GET "http://localhost:1337/api/ayuda?populate=*"
```

```javascript
// JavaScript/TypeScript
const ayuda = await fetch('http://localhost:1337/api/ayuda?populate=*')
  .then(res => res.json());

console.log(ayuda.data.attributes);
```

**Respuesta:**
```json
{
  "data": {
    "id": 1,
    "attributes": {
      "heroTitulo": "Centro de Ayuda Lux Viajes",
      "heroSubtitulo": "¿En qué te podemos ayudar?",
      "searchTitulo": "Buscar Ayuda",
      "searchPlaceholder": "Escribe tu pregunta...",
      "categoriasTitulo": "Categorías Principales",
      "categorias": [
        {
          "id": 1,
          "nombre": "Reservas",
          "icono": "📅"
        },
        {
          "id": 2,
          "nombre": "Pagos",
          "icono": "💳"
        },
        {
          "id": 3,
          "nombre": "Cancelaciones",
          "icono": "❌"
        }
      ],
      "faqTitulo": "Preguntas Frecuentes",
      "faq": [
        {
          "pregunta": "¿Cómo hago una reserva?",
          "respuesta": "1. Selecciona tu destino\n2. Elige fechas\n3. Completa tus datos"
        },
        {
          "pregunta": "¿Puedo cancelar mi reserva?",
          "respuesta": "Sí, hasta 48 horas antes del viaje con reembolso del 80%"
        }
      ],
      "guiasTitulo": "Guías y Tutoriales",
      "guiasDescripcion": "Aprende cómo usar nuestra plataforma",
      "soporteTitulo": "Contacta Soporte",
      "soporteDescripcion": "Nuestro equipo está disponible para ayudarte",
      "soporteCorreo": "soporte@luxviajes.com",
      "soporteTelefono": "+57 1 234 5678",
      "soportoHorario": "Disponible 24/7",
      "linksUtilesTitulo": "Enlaces Útiles",
      "linksUtiles": [
        {
          "titulo": "Blog",
          "url": "/blog"
        },
        {
          "titulo": "Términos y Condiciones",
          "url": "/terms"
        },
        {
          "titulo": "Política de Privacidad",
          "url": "/privacy"
        }
      ],
      "videoTutorialURL": "https://youtube.com/watch?v=...",
      "videoTutorialTitulo": "Cómo hacer tu primera reserva"
    }
  }
}
```

### Actualizar Información de Ayuda

```bash
curl -X PUT "http://localhost:1337/api/ayuda" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "data": {
      "soportoHorario": "Lun-Sab: 8AM-10PM",
      "categorias": [
        { "id": 1, "nombre": "Reservas", "icono": "📅" },
        { "id": 2, "nombre": "Pagos", "icono": "💳" }
      ]
    }
  }'
```

### Consumir en React

```jsx
import { useState, useEffect } from 'react';

export default function HelpPage() {
  const [ayuda, setAyuda] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAyuda = async () => {
      const res = await fetch('http://localhost:1337/api/ayuda?populate=*');
      const data = await res.json();
      setAyuda(data.data.attributes);
    };
    
    fetchAyuda();
  }, []);

  if (!ayuda) return <div>Cargando...</div>;

  // Filtrar FAQ por término de búsqueda
  const faqFiltradas = ayuda.faq?.filter(item =>
    item.pregunta.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="help-center">
      <h1>{ayuda.heroTitulo}</h1>
      <p>{ayuda.heroSubtitulo}</p>

      <section className="search">
        <h2>{ayuda.searchTitulo}</h2>
        <input
          type="text"
          placeholder={ayuda.searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </section>

      <section className="categorias">
        <h2>{ayuda.categoriasTitulo}</h2>
        <div className="categorias-grid">
          {ayuda.categorias?.map((cat) => (
            <div key={cat.id} className="categoria-card">
              <span className="icono">{cat.icono}</span>
              <p>{cat.nombre}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="faq">
        <h2>{ayuda.faqTitulo}</h2>
        <div className="accordion">
          {faqFiltradas?.map((item, idx) => (
            <details key={idx}>
              <summary>{item.pregunta}</summary>
              <p>{item.respuesta}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="soporte">
        <h2>{ayuda.soporteTitulo}</h2>
        <p>{ayuda.soporteDescripcion}</p>
        <div className="contact-info">
          <p>📧 {ayuda.soporteCorreo}</p>
          <p>📞 {ayuda.soporteTelefono}</p>
          <p>🕐 {ayuda.soportoHorario}</p>
        </div>
      </section>

      <section className="links-utiles">
        <h2>{ayuda.linksUtilesTitulo}</h2>
        <ul>
          {ayuda.linksUtiles?.map((link, idx) => (
            <li key={idx}>
              <a href={link.url}>{link.titulo}</a>
            </li>
          ))}
        </ul>
      </section>

      {ayuda.videoTutorialURL && (
        <section className="video">
          <h2>{ayuda.videoTutorialTitulo}</h2>
          <iframe
            width="100%"
            height="400"
            src={ayuda.videoTutorialURL.replace('watch?v=', 'embed/')}
          />
        </section>
      )}
    </div>
  );
}
```

---

## 📦 Consumo Combinado (Todas las Páginas)

```javascript
// Obtener todas las páginas de forma simultánea
async function fetchAllPages() {
  const [contactoRes, visasRes, ayudaRes] = await Promise.all([
    fetch('http://localhost:1337/api/contacto?populate=*'),
    fetch('http://localhost:1337/api/visas?populate=*'),
    fetch('http://localhost:1337/api/ayuda?populate=*'),
  ]);

  const contacto = await contactoRes.json();
  const visas = await visasRes.json();
  const ayuda = await ayudaRes.json();

  return {
    contacto: contacto.data.attributes,
    visas: visas.data.attributes,
    ayuda: ayuda.data.attributes,
  };
}

// Uso
const paginas = await fetchAllPages();
console.log(paginas.contacto);
console.log(paginas.visas);
console.log(paginas.ayuda);
```

---

## 🔐 Autenticación para PUT

Para actualizar datos, necesitas un token de autenticación:

```javascript
// 1. Obtener token
const loginRes = await fetch('http://localhost:1337/api/auth/local', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    identifier: 'tu_email@example.com',
    password: 'tu_contraseña'
  })
});

const { jwt } = await loginRes.json();

// 2. Usar token en PUT
const updateRes = await fetch('http://localhost:1337/api/contacto', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${jwt}`
  },
  body: JSON.stringify({
    data: { correo: 'nuevo@email.com' }
  })
});
```

---

## ✅ Checklist de Implementación

- [ ] Crear contenido en Admin Panel
- [ ] Probar endpoints GET
- [ ] Probar endpoints PUT (con autenticación)
- [ ] Integrar en frontend React/Next.js
- [ ] Validar respuestas JSON
- [ ] Configurar CORS si es necesario
- [ ] Agregar manejo de errores en frontend
