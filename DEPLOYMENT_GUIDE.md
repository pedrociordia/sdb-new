# 🚀 Guía de Despliegue en Vercel

Esta guía te ayudará a desplegar tu aplicación Santo Domingo Bay CMS en Vercel paso a paso.

---

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener:

1. ✅ Una cuenta en [Vercel](https://vercel.com)
2. ✅ Tu código en un repositorio de GitHub
3. ✅ Una cuenta en [Supabase](https://supabase.com) (opcional al inicio)

---

## 🎯 Método 1: Deploy desde GitHub (Recomendado)

### Paso 1: Preparar tu Repositorio GitHub

1. **Crear repositorio en GitHub**
   ```bash
   # Si aún no lo has hecho
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push a GitHub**
   ```bash
   git remote add origin https://github.com/tu-usuario/santo-domingo-bay-cms.git
   git branch -M main
   git push -u origin main
   ```

### Paso 2: Conectar con Vercel

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Click en "Import Git Repository"
3. Selecciona tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Next.js

### Paso 3: Configurar el Proyecto

En la página de configuración de Vercel:

- **Framework Preset**: Next.js (auto-detectado)
- **Build Command**: `npm run build` (auto-detectado)
- **Output Directory**: `.next` (auto-detectado)
- **Install Command**: `npm install` (auto-detectado)

### Paso 4: Configurar Variables de Entorno

**Por ahora (modo demo):**
- No necesitas configurar nada
- La app funcionará con datos mock

**Más adelante (con Supabase):**
1. En la sección "Environment Variables", agrega:
   ```
   NEXT_PUBLIC_SUPABASE_URL = tu-proyecto.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY = tu-anon-key
   ```

### Paso 5: Deploy!

1. Click en "Deploy"
2. Espera 2-3 minutos mientras Vercel construye tu app
3. ¡Listo! Tu app estará en: `https://tu-proyecto.vercel.app`

---

## 🖥️ Método 2: Deploy con Vercel CLI

### Paso 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Paso 2: Login

```bash
vercel login
```

### Paso 3: Deploy desde la Terminal

```bash
# En el directorio de tu proyecto
cd /ruta/a/webapp

# Deploy a preview (testing)
vercel

# Deploy a producción
vercel --prod
```

### Paso 4: Configurar Variables de Entorno

```bash
# Agregar variables de entorno
vercel env add NEXT_PUBLIC_SUPABASE_URL
# Pega tu URL cuando te lo pida

vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
# Pega tu key cuando te lo pida
```

### Paso 5: Redesplegar con Variables

```bash
vercel --prod
```

---

## 🔧 Configuración Avanzada

### Custom Domain

1. En Vercel Dashboard → Tu Proyecto → Settings → Domains
2. Agrega tu dominio personalizado: `cms.santodomingobay.com`
3. Sigue las instrucciones para configurar DNS

### Environment Variables por Entorno

```bash
# Para Development
vercel env add NEXT_PUBLIC_SUPABASE_URL development

# Para Preview
vercel env add NEXT_PUBLIC_SUPABASE_URL preview

# Para Production
vercel env add NEXT_PUBLIC_SUPABASE_URL production
```

### Configuración de Build

Crea `vercel.json` en la raíz del proyecto:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

---

## 📊 Después del Deploy

### Verificar que Todo Funciona

1. **Página principal**: `https://tu-proyecto.vercel.app`
   - Debe redirigir automáticamente a `/login`

2. **Login**: `https://tu-proyecto.vercel.app/login`
   - Debe mostrar el formulario de login con animaciones

3. **Dashboard**: `https://tu-proyecto.vercel.app/dashboard`
   - Usa credenciales demo: `admin@santodomingobay.com` / `demo123`
   - Debe mostrar el dashboard con las 7 categorías

### Monitoreo

1. **Analytics**: Vercel Dashboard → Tu Proyecto → Analytics
2. **Logs**: Vercel Dashboard → Tu Proyecto → Deployments → Ver logs
3. **Performance**: Lighthouse CI integrado

---

## 🔄 Continuous Deployment

Una vez configurado, cada push a GitHub desplegará automáticamente:

- **Push a `main`** → Deploy a producción automático
- **Pull Request** → Deploy preview automático
- **Otras ramas** → No se despliega (configurable)

### Configurar Branch Protection

En tu repositorio GitHub → Settings → Branches:

1. Add rule para `main`
2. Requiere PR reviews
3. Requiere status checks (Vercel builds)

---

## 🐛 Solución de Problemas

### Build Falla

**Error: `Module not found`**
```bash
# Asegúrate de que package.json tenga todas las dependencias
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push
```

**Error: TypeScript errors**
```bash
# Ejecuta build localmente primero
npm run build

# Arregla los errores
# Commit y push
```

### Deploy Exitoso pero Página en Blanco

1. Verifica en Vercel Logs si hay errores
2. Asegúrate de que las rutas estén correctas
3. Verifica que los componentes sean Client Components (`'use client'`)

### Variables de Entorno No Funcionan

1. Verifica que empiecen con `NEXT_PUBLIC_`
2. Redeploya después de agregar variables
3. Las variables deben estar en Vercel Dashboard, no solo en `.env.local`

---

## 📱 Deploy Preview URLs

Cada pull request genera una URL preview:
- `https://santo-domingo-bay-cms-pr-123.vercel.app`

Úsalas para:
- Revisar cambios antes de merge
- Testing por QA team
- Demos a clientes

---

## 🎉 ¡Felicidades!

Tu aplicación está ahora en producción. Comparte la URL con tu equipo:

```
🌐 Producción: https://tu-proyecto.vercel.app
📧 Login demo: admin@santodomingobay.com
🔑 Password: demo123
```

---

## 📞 Soporte

Si tienes problemas:

1. Revisa [Vercel Docs](https://vercel.com/docs)
2. Revisa [Next.js Docs](https://nextjs.org/docs)
3. Contacta al equipo de desarrollo

---

## 🔐 Seguridad en Producción

Antes de lanzar a usuarios reales:

1. ✅ Cambia las credenciales demo
2. ✅ Configura autenticación real con Supabase
3. ✅ Habilita HTTPS (automático en Vercel)
4. ✅ Configura CORS correctamente
5. ✅ Implementa rate limiting
6. ✅ Habilita logs de auditoría

---

**¡Ahora tu CMS está listo para gestionar el contenido de Santo Domingo Bay!** 🎊
