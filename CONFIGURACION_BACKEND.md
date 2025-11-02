# Configuración del Backend URL

## Variable de Entorno: VITE_BACKEND_URL

Esta variable conecta el frontend React con el backend Flask.

### URL del Backend:
```
https://web-production-9a110.up.railway.app
```

## Cómo Agregar en Railway:

1. **Ve a tu proyecto en Railway**
   - Abre tu proyecto en Railway
   
2. **Selecciona tu servicio (web)**
   - Haz clic en el servicio que ejecuta tu aplicación
   
3. **Ve a la pestaña "Variables"**
   - En el menú lateral, busca "Variables" o "Environment Variables"
   
4. **Agrega la variable:**
   - Haz clic en "New Variable" o "Add Variable"
   - **Name:** `VITE_BACKEND_URL`
   - **Value:** `https://web-production-9a110.up.railway.app`
   - Haz clic en "Add" o "Save"
   
5. **Railway reiniciará automáticamente**
   - El servicio se reiniciará con la nueva variable
   - El build incluirá esta variable en el código compilado

## Importante:

- ✅ La variable debe llamarse exactamente: `VITE_BACKEND_URL`
- ✅ El valor debe incluir `https://` al inicio
- ✅ Después de agregarla, Railway hará un nuevo build automáticamente
- ✅ Las variables que empiezan con `VITE_` están disponibles durante el build de Vite

## Para Desarrollo Local:

Crea un archivo `.env` en la raíz del proyecto con:
```
VITE_BACKEND_URL=http://localhost:3001
```

**Nota:** El archivo `.env` NO se sube a git (está en .gitignore)

