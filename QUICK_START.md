# 🚀 Quick Start - Cargar Contenido del Hotel

## ✨ Tienes 2 opciones para cargar el contenido

### Opción 1: Script TypeScript (Recomendado) 

```bash
# Asegúrate de tener las variables de entorno configuradas
# en tu archivo .env.local:
# NEXT_PUBLIC_SUPABASE_URL=tu-url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-key

# Ejecuta el script de carga
npm run seed
```

**Ventajas**:
- ✅ Más rápido
- ✅ Muestra progreso en tiempo real
- ✅ Maneja errores automáticamente
- ✅ No necesitas acceso directo a Supabase Dashboard

---

### Opción 2: SQL Directo

#### Para Local Development (D1)

```bash
# Si usas Cloudflare D1 local
npm run seed:sql
```

#### Para Supabase Dashboard

1. Ve a [Supabase Dashboard](https://app.supabase.com)
2. Abre tu proyecto
3. Ve a **SQL Editor**
4. Copia el contenido de `scripts/seed-content.sql`
5. Pega y ejecuta

**Ventajas**:
- ✅ Control total sobre la ejecución
- ✅ Puedes ver el SQL antes de ejecutar
- ✅ Funciona con cualquier PostgreSQL

---

## 📊 ¿Qué se va a cargar?

### Total: 25+ secciones de contenido

#### 🏨 Información General (5)
- Contacto del hotel
- Personalidad de marca
- Pilares de marca (ES/EN)
- Esencia de marca

#### 🍽️ Restaurantes & Bares (6)
- La Famiglia (Italian)
- KIBO (Asian)
- Buffet Restaurant
- Mr Rogers Cocktail Bar
- Splash Pool Bar
- Beach Bar

#### 🎰 Casino (1)
- Info completa del casino

#### 🏊 Instalaciones (4)
- Piscinas
- Spa & Wellness
- Playa Privada
- Gimnasio

#### 🎪 Eventos & Convenciones (2)
- Salones de eventos
- Servicios corporativos

#### 💒 Bodas (3)
- Overview de bodas
- Paquetes (Esencial, Premium, Luxury)
- Servicios adicionales

#### 🛏️ Habitaciones (1)
- Categorías y amenidades

---

## ✅ Verificar que se cargó correctamente

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Abre el dashboard:
   ```
   http://localhost:3000/dashboard
   ```

3. Verifica que:
   - ✅ Aparezcan las 7 categorías en el sidebar
   - ✅ Cada categoría tenga sus secciones
   - ✅ Al hacer clic en "Ver" se muestre el JSON completo

---

## 🎨 Personalizar el Contenido

Una vez cargado, puedes:

1. **Editar cualquier sección**
   - Haz clic en el botón "Editar"
   - Modifica los campos
   - Guarda los cambios

2. **Agregar nuevas secciones**
   - Haz clic en "Agregar Sección"
   - Llena el formulario
   - El slug se genera automáticamente

3. **Eliminar secciones**
   - Haz clic en el botón rojo de eliminar
   - Confirma la acción

4. **Agregar imágenes**
   - (Próximamente: integración con Supabase Storage)

---

## 🔧 Troubleshooting

### Error: "supabaseUrl is required"
**Solución**: Asegúrate de tener las variables de entorno en `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
```

### Error: "category not found"
**Solución**: Primero ejecuta las migraciones de Supabase para crear las categorías base:
```sql
-- En Supabase SQL Editor, ejecuta:
-- (ver SUPABASE_SETUP.md para el schema completo)
```

### El contenido no aparece en el dashboard
**Solución**: 
1. Verifica la conexión a Supabase
2. Revisa la consola del navegador para errores
3. Asegúrate de que las categorías existan antes de cargar contenido

---

## 📚 Más Documentación

- [CONTENT_LOADED.md](./CONTENT_LOADED.md) - Detalle completo del contenido
- [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) - Configuración de Supabase
- [README.md](./README.md) - Documentación principal
- [scripts/README_SEED.md](./scripts/README_SEED.md) - Info técnica de los scripts

---

**¡Listo para empezar a gestionar el contenido del hotel! 🎉**
