# 🚀 Guía de Inicio Rápido - CMS Lux Viajes

## Paso 1: Iniciar el Servidor

```bash
cd "c:\Users\yosto\Documents\Trabajos\Lux Viajes\web\cms_luxviajes"
npm run develop
```

Accede a: **http://localhost:1337/admin**

---

## Paso 2: Crear Usuario Administrador

En tu primer acceso, te pedirá crear un usuario admin:
- **Email:** tu_email@example.com
- **Password:** contraseña_segura
- **Nombre:** Tu nombre

---

## Paso 3: Crear Contenido

### Crear Destino Sonado

1. Ve a **Content Manager** en el menú izquierdo
2. Busca **Destino Sonado** → Click
3. Haz click en **Create new entry**
4. Completa los campos:
   - **titulo:** Cartagena
   - **subtitulo:** 4 dias, 3 noches
   - **descripcion:** Descubre el encanto colonial...
   - **imagen:** Sube una imagen
   - **disponibilidad:** Todo el año
   - **duracion:** 4 dias
   - **precio:** $2,500
   - **noches:** 3
   - **descripcionDetallada:** Texto completo...
   - **incluidos:** (JSON array)
5. Click en **Save** y luego **Publish**

### Crear Paquete Premium

1. **Content Manager** → **Paquete Premium**
2. **Create new entry**
3. Completa los campos similares
4. Para **etiqueta**, selecciona una de las opciones
5. **Save** y **Publish**

---

## Paso 4: Configurar Páginas Únicas

### Configurar Página de Inicio

1. **Content Manager** → **Inicio**
2. Si no existe, crea uno nuevo
3. Completa los campos:
   - **diapositivas:** JSON array
   - **clientesFrecuentes:** 5000+
   - **experiencia:** 20 años
   - etc.
4. Agrega destinos sonados en la relación
5. **Save** y **Publish**

### Configurar Otras Páginas

Repite el proceso para:
- **Nosotros**
- **Paquetes**
- **Servicios**

---

## Paso 5: Consumir desde Frontend

### Obtener datos de inicio

```javascript
fetch('http://localhost:1337/api/inicio?populate=*')
  .then(res => res.json())
  .then(data => console.log(data.data.attributes))
```

### Obtener destinos

```javascript
fetch('http://localhost:1337/api/destino-sonados?populate=*')
  .then(res => res.json())
  .then(data => console.log(data.data))
```

---

## Estructura de JSON para Campos Complejos

### diapositivas (en Inicio)
```json
[
  {
    "imagen": "url_imagen",
    "titulo": "Viaja a Europa",
    "subtitulo": "Experiencias inolvidables"
  }
]
```

### incluidos
```json
[
  "🏨 Hospedaje 5 estrellas",
  "✈️ Vuelos internacionales",
  "🍽️ Desayuno incluido"
]
```

### destacados
```json
[
  {
    "titulo": "Atención personalizada",
    "subtitulo": "Servicio 24/7",
    "icono": "heart"
  }
]
```

### valores
```json
[
  {
    "titulo": "Integridad",
    "descripcion": "Actuamos con transparencia y honestidad"
  }
]
```

---

## Comandos Útiles

```bash
# Iniciar en modo desarrollo (recomendado)
npm run develop

# Iniciar en producción
npm run start

# Compilar admin panel
npm run build

# Ver más comandos
npm run strapi
```

---

## Permisos y Seguridad

### Configurar Permisos Públicos

1. Ve a **Settings** (⚙️) → **Users & Permissions**
2. Selecciona el rol **Public**
3. Busca **Destino Sonado**
4. Marca **find** y **findOne** como públicos
5. Repite para otras colecciones que quieras públicas
6. **Save**

### Obtener Token JWT

Si necesitas autenticarte desde tu frontend:

```javascript
const login = async () => {
  const response = await fetch(
    'http://localhost:1337/api/auth/local',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        identifier: 'tu_email@example.com',
        password: 'tu_contraseña'
      })
    }
  );
  const data = await response.json();
  localStorage.setItem('token', data.jwt);
  return data.jwt;
};
```

---

## Troubleshooting

### Puerto ya está en uso

```bash
# Cambiar puerto
npm run develop -- --port 3000
```

### Base de datos corrupta

```bash
# Eliminar BD y reiniciar
rm .tmp/data.db
npm run develop
```

### No veo mis cambios en la API

1. Verifica que el contenido esté **Publicado** (Published)
2. Comprueba los **Permisos** en Settings
3. Usa `?populate=*` para traer relaciones

---

## Próximos Pasos

- [ ] Crear todos los destinos
- [ ] Crear paquetes premium
- [ ] Configurar página de inicio
- [ ] Configurar otras páginas
- [ ] Conectar frontend
- [ ] Configurar CORS si es necesario
- [ ] Deploy a producción

---

**¡Listo! Tu CMS está configurado y listo para usar.** 🎉

**Documenta:** Fecha de creación: Abril 2026
