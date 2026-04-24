# 🔧 Correcciones Realizadas - Strapi v5

## Problema Identificado

Error al compilar:
```
Error: Content Type Definition is invalid for 'api::nosotros.nosotros'.
schema.info.pluralName is not in kebab case (an-example-of-kebab-case)
```

## Solución

Todos los `pluralName` en los schemas deben estar en **kebab-case** (minúsculas, separadas por guiones).

### Archivos Corregidos

#### 1. **Nosotros** 
- **Antes:** `pluralName: 'nosotroS'`
- **Después:** `pluralName: 'nosotros'`

#### 2. **Paquete**
- **Antes:** `pluralName: 'paqueteS'`
- **Después:** `pluralName: 'paquetes'`

#### 3. **Servicio**
- **Antes:** `pluralName: 'servicioS'`
- **Después:** `pluralName: 'servicios'`

#### 4. **Parque Temático**
- **Antes:** `pluralName: 'parque-tematicoS'`
- **Después:** `pluralName: 'parque-tematicos'`

## Regla de Formato Strapi

✅ **Correcto:**
- `singularName: 'destino-sonado'`
- `pluralName: 'destino-sonados'`

❌ **Incorrecto:**
- `pluralName: 'destino-sonadoS'` (mayúscula final)
- `pluralName: 'destino_sonados'` (guion bajo)
- `pluralName: 'DestinoSonados'` (mayúsculas)

## Archivos Modificados

1. `src/api/nosotros/content-types/nosotros/schema.ts`
2. `src/api/paquete/content-types/paquete/schema.ts`
3. `src/api/servicio/content-types/servicio/schema.ts`
4. `src/api/parque-tematico/content-types/parque-tematico/schema.ts`

## Estado

✅ Correcciones aplicadas
⏳ Compilación en progreso...

Una vez completada la compilación, el proyecto estará listo para ejecutar.

```bash
npm run develop
```

---

**Fecha:** Abril 2026
