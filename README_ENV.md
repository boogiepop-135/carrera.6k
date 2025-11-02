# Configuración de Variables de Entorno

## Variable de Entorno: VITE_BACKEND_URL

Esta variable conecta el frontend React con el backend Flask.

### URL del Backend en Railway:
```
https://web-production-9a110.up.railway.app
```

## Configuración en Railway

Para agregar la variable de entorno en Railway:

1. Ve a tu proyecto en Railway
2. Haz clic en tu servicio (web)
3. Ve a la pestaña "Variables"
4. Haz clic en "New Variable"
5. Agrega:
   - **Name:** `VITE_BACKEND_URL`
   - **Value:** `https://web-production-9a110.up.railway.app`
6. Haz clic en "Add"
7. Railway reiniciará automáticamente el servicio

## Para Desarrollo Local

1. Crea un archivo `.env` en la raíz del proyecto
2. Agrega:
   ```
   VITE_BACKEND_URL=http://localhost:3001
   ```
3. Reinicia el servidor de desarrollo

**Nota:** El archivo `.env` está en `.gitignore` y no se subirá al repositorio por seguridad.

