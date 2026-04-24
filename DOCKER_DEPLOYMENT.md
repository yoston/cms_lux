# 🐳 Guía de Deployment con Docker - Hostinger VPS

## Prerequisitos

### Instalación en Hostinger VPS (Ubuntu/Debian)

#### 1. Instalar Docker
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Agregar tu usuario al grupo docker (opcional)
sudo usermod -aG docker $USER
newgrp docker
```

#### 2. Instalar Docker Compose
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

---

## 🚀 Deployment

### Paso 1: Clonar o subir el proyecto

```bash
# Opción A: Clonar desde Git
git clone <tu-repo-url> cms-luxviajes
cd cms-luxviajes

# Opción B: Subir vía SFTP/SCP
scp -r ./cms_luxviajes/* usuario@tu-vps:/home/usuario/cms-luxviajes/
ssh usuario@tu-vps
cd cms-luxviajes
```

### Paso 2: Configurar variables de entorno

```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar con tus valores (genera las claves con openssl)
nano .env
```

**Generar claves seguras:**
```bash
# Para APP_KEYS (generar 2-3 claves separadas por comas)
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"

# Ejecutar varias veces para obtener múltiples claves
```

**Ejemplo de .env para producción:**
```env
NODE_ENV=production
HOST=0.0.0.0
PORT=1337

APP_KEYS="clave1,clave2,clave3"
API_TOKEN_SALT=valor_aleatorio_seguro
ADMIN_JWT_SECRET=valor_aleatorio_seguro
TRANSFER_TOKEN_SALT=valor_aleatorio_seguro
JWT_SECRET=valor_aleatorio_seguro
ENCRYPTION_KEY=valor_aleatorio_seguro

DATABASE_FILENAME=data.db
STRAPI_PORT=1337
NGINX_PORT=80
NGINX_SSL_PORT=443
```

### Paso 3: Dar permisos y desplegar

```bash
# Permisos para el script de deploy
chmod +x deploy.sh

# Opción A: Usar el script de deploy
./deploy.sh

# Opción B: Manual
docker-compose build
docker-compose up -d
```

### Paso 4: Verificar el deployment

```bash
# Ver estado de los contenedores
docker-compose ps

# Ver logs en tiempo real
docker-compose logs -f strapi

# Verificar la salud
curl http://localhost:1337/admin
```

---

## 📋 Comandos útiles

### Gestión de contenedores

```bash
# Iniciar
docker-compose up -d

# Detener
docker-compose down

# Reiniciar
docker-compose restart

# Ver logs
docker-compose logs -f strapi
docker-compose logs -f nginx

# Ejecutar comandos en el contenedor
docker-compose exec strapi npm run build
docker-compose exec strapi strapi console
```

### Backups

```bash
# Crear backup manual
docker-compose exec strapi tar -czf data.tar.gz /app/data /app/public/uploads
docker-compose cp strapi:/app/data.tar.gz ./backups/

# Restaurar desde backup
docker-compose cp backups/data.tar.gz strapi:/app/
docker-compose exec strapi tar -xzf /app/data.tar.gz -C /app/
```

---

## 🔒 Configuración SSL/TLS con Let's Encrypt (Recomendado)

### Instalar Certbot

```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# Generar certificados
sudo certbot certonly --standalone -d tu-dominio.com -d www.tu-dominio.com

# Los certificados se guardan en:
# /etc/letsencrypt/live/tu-dominio.com/
```

### Copiar certificados a la carpeta del proyecto

```bash
sudo mkdir -p ssl
sudo cp /etc/letsencrypt/live/tu-dominio.com/fullchain.pem ssl/cert.pem
sudo cp /etc/letsencrypt/live/tu-dominio.com/privkey.pem ssl/key.pem
sudo chmod 644 ssl/*
```

### Actualizar nginx.conf

Descomenta la sección HTTPS en `nginx.conf` y reemplaza `your-domain.com`:

```nginx
server {
    listen 443 ssl http2;
    server_name tu-dominio.com www.tu-dominio.com;

    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    # ...
}
```

### Renovar certificados automáticamente

```bash
# Crear script de renovación
sudo nano /usr/local/bin/renew-certs.sh

#!/bin/bash
certbot renew --quiet
cp /etc/letsencrypt/live/tu-dominio.com/fullchain.pem /home/usuario/cms-luxviajes/ssl/cert.pem
cp /etc/letsencrypt/live/tu-dominio.com/privkey.pem /home/usuario/cms-luxviajes/ssl/key.pem
cd /home/usuario/cms-luxviajes && docker-compose reload nginx

# Permisos
sudo chmod +x /usr/local/bin/renew-certs.sh

# Cron job (renovación automática)
sudo crontab -e

# Agregar línea:
0 2 * * * /usr/local/bin/renew-certs.sh >> /var/log/certbot-renewal.log 2>&1
```

---

## 📊 Monitoreo

### Ver métricas de Docker

```bash
docker stats
```

### Logs persistentes

```bash
# Los logs se guardan automáticamente en:
# - ./data/ (base de datos y uploads)

# Ver logs específicos
docker-compose logs --tail=100 strapi
docker-compose logs --tail=100 nginx
```

---

## 🔧 Solución de problemas

### Error: "Port already in use"
```bash
# Cambiar puerto en .env
STRAPI_PORT=3000

# O liberar el puerto
sudo lsof -i :1337
sudo kill -9 <PID>
```

### Error: "database locked"
```bash
# Reiniciar el contenedor
docker-compose restart strapi
```

### Error: "Permission denied"
```bash
# Ajustar permisos
sudo chown -R $USER:$USER data public
chmod -R 755 data public
```

### Ver error completo
```bash
docker-compose logs strapi
```

---

## 🔄 Actualizar la aplicación

```bash
# Opción 1: Usar el script de deploy
./deploy.sh

# Opción 2: Manual
git pull origin main
docker-compose build
docker-compose down
docker-compose up -d
```

---

## 📚 Referencias

- [Docker Documentation](https://docs.docker.com/)
- [Strapi Deployment Guide](https://docs.strapi.io/dev-docs/deployment)
- [Hostinger VPS Support](https://support.hostinger.com/)

---

## ⚠️ Checklist de Seguridad

- [ ] Cambiar todas las claves en `.env`
- [ ] Configurar SSL/TLS con Let's Encrypt
- [ ] Configurar backups automáticos
- [ ] Configurar firewall en Hostinger
- [ ] Habilitar autenticación fuerte en Strapi
- [ ] Configurar rate limiting
- [ ] Monitorear logs regularmente
- [ ] Actualizar Docker regularmente

---

**Creado para Lux Viajes CMS - Strapi 5.43.0**
