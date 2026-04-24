# Multi-stage build para Strapi CMS
FROM node:20-alpine AS builder

# Establecer variables de entorno
ENV NODE_ENV=development
ENV NPM_CONFIG_PRODUCTION=false

# Instalar dependencias del sistema necesarias para better-sqlite3 y otras librerías nativas
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev \
    pixman-dev

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
COPY tsconfig.json ./

# Instalar dependencias con npm install (más flexible que npm ci)
RUN npm install --legacy-peer-deps

# Copiar código fuente
COPY . .

# Build de la aplicación
RUN npm run build

# Cambiar a producción
ENV NODE_ENV=production
ENV NPM_CONFIG_PRODUCTION=true

# Remover dev dependencies para la imagen final
RUN npm prune --omit=dev

# Etapa de producción
FROM node:20-alpine

ENV NODE_ENV=production

# Instalar solo las librerías de runtime necesarias
RUN apk add --no-cache \
    cairo \
    jpeg \
    pango \
    giflib \
    pixman \
    tini \
    curl

# Crear usuario no-root para mayor seguridad
RUN addgroup -g 1001 -S nodejs && \
    adduser -S strapi -u 1001

WORKDIR /app

# Copiar node_modules del builder
COPY --from=builder --chown=strapi:nodejs /app/node_modules ./node_modules

# Copiar la aplicación compilada del builder
COPY --from=builder --chown=strapi:nodejs /app/dist ./dist
COPY --from=builder --chown=strapi:nodejs /app/package*.json ./
COPY --from=builder --chown=strapi:nodejs /app/public ./public
COPY --from=builder --chown=strapi:nodejs /app/config ./config
COPY --from=builder --chown=strapi:nodejs /app/src ./src

# Cambiar a usuario no-root
USER strapi

# Exponer puerto
EXPOSE 1337

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:1337/admin || exit 1

# Usar tini para manejar signals correctamente
ENTRYPOINT ["/sbin/tini", "--"]

# Comando por defecto
CMD ["npm", "start"]
