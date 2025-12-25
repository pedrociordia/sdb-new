# 🗄️ Guía de Configuración de Supabase

Esta guía te ayudará a configurar Supabase como backend para tu CMS.

---

## 📋 Paso 1: Crear Proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Click en "Start your project"
3. Sign in con GitHub
4. Click en "New Project"
5. Completa los datos:
   - **Name**: `santo-domingo-bay-cms`
   - **Database Password**: (genera uno seguro)
   - **Region**: Elige el más cercano a tu audiencia
   - **Pricing Plan**: Free (para comenzar)

6. Click "Create new project"
7. Espera 2-3 minutos mientras se crea

---

## 🔑 Paso 2: Obtener Credenciales

1. En tu proyecto, ve a **Settings** (⚙️) → **API**
2. Copia estas dos credenciales:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

3. Pégalas en tu archivo `.env.local`:

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

---

## 🗃️ Paso 3: Crear Tablas

Ve a **SQL Editor** en el sidebar de Supabase y ejecuta este script:

```sql
-- ============================================
-- Santo Domingo Bay CMS - Database Schema
-- ============================================

-- 1. Tabla de Categorías
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  icon TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Tabla de Secciones de Contenido
CREATE TABLE content_sections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  content JSONB NOT NULL DEFAULT '{}',
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Tabla de Assets de Media
CREATE TABLE media_assets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section_id UUID REFERENCES content_sections(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  type TEXT CHECK (type IN ('image', 'video', 'document')),
  alt_text TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Tabla de Auditoría
CREATE TABLE audit_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email TEXT NOT NULL,
  action TEXT CHECK (action IN ('create', 'update', 'delete')),
  entity_type TEXT NOT NULL,
  entity_id UUID NOT NULL,
  changes JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- Índices para optimización
-- ============================================

CREATE INDEX idx_content_sections_category ON content_sections(category_id);
CREATE INDEX idx_media_assets_section ON media_assets(section_id);
CREATE INDEX idx_audit_log_user ON audit_log(user_email);
CREATE INDEX idx_audit_log_entity ON audit_log(entity_type, entity_id);

-- ============================================
-- Trigger para updated_at automático
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_content_sections_updated_at BEFORE UPDATE ON content_sections
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Datos Iniciales (7 Categorías)
-- ============================================

INSERT INTO categories (name, slug, icon, order_index) VALUES
  ('Información General', 'general-information', 'Info', 0),
  ('Habitaciones', 'rooms', 'BedDouble', 1),
  ('Restaurantes & Bares', 'restaurants-bars', 'UtensilsCrossed', 2),
  ('Casino', 'casino', 'Dice5', 3),
  ('Instalaciones', 'facilities', 'Waves', 4),
  ('Eventos & Convenciones', 'events-conventions', 'CalendarDays', 5),
  ('Bodas', 'weddings', 'Heart', 6);

-- ============================================
-- Datos de Ejemplo (Opcional)
-- ============================================

-- Información General
INSERT INTO content_sections (category_id, title, slug, content, order_index)
SELECT 
  id,
  'Información del Hotel',
  'hotel-info',
  '{
    "hotel_name": "Santo Domingo Bay",
    "category": "4 estrellas",
    "location": "Boca Chica, República Dominicana",
    "address": "Calle Caracol 1, Boca Chica 15700",
    "phone": "+1 809 523 4611",
    "email": "info@sdbhotel.com",
    "website": "https://santodomingobay.com"
  }'::jsonb,
  0
FROM categories WHERE slug = 'general-information';

-- Restaurante La Famiglia
INSERT INTO content_sections (category_id, title, slug, content, order_index)
SELECT 
  id,
  'La Famiglia',
  'la-famiglia',
  '{
    "name": "La Famiglia",
    "type": "Restaurante Italiano",
    "location": "Main Building",
    "concept": "Inspirado en la tradición familiar italiana",
    "specialties": ["Pasta fresca", "Pizzas artesanales", "Vino"],
    "ambiance": "Cálido y acogedor"
  }'::jsonb,
  0
FROM categories WHERE slug = 'restaurants-bars';

-- Restaurante KIBO
INSERT INTO content_sections (category_id, title, slug, content, order_index)
SELECT 
  id,
  'KIBO',
  'kibo',
  '{
    "name": "KIBO",
    "type": "Restaurante Asiático",
    "location": "Rooftop",
    "concept": "Fusión asiática con vistas panorámicas",
    "cuisine": ["Japonés", "Tailandés", "Chino"],
    "features": ["Vista 360°", "Sunset dining", "Cocktails asiáticos"]
  }'::jsonb,
  1
FROM categories WHERE slug = 'restaurants-bars';
```

---

## 🔐 Paso 4: Configurar Row Level Security (RLS)

Por seguridad, habilita RLS en las tablas:

```sql
-- Habilitar RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;

-- Políticas para usuarios autenticados

-- Categories: Solo lectura para todos
CREATE POLICY "Allow read access to categories" 
  ON categories FOR SELECT 
  USING (true);

CREATE POLICY "Allow authenticated users to modify categories" 
  ON categories FOR ALL 
  USING (auth.role() = 'authenticated');

-- Content Sections: CRUD para usuarios autenticados
CREATE POLICY "Allow authenticated users full access to content_sections" 
  ON content_sections FOR ALL 
  USING (auth.role() = 'authenticated');

-- Media Assets: CRUD para usuarios autenticados
CREATE POLICY "Allow authenticated users full access to media_assets" 
  ON media_assets FOR ALL 
  USING (auth.role() = 'authenticated');

-- Audit Log: Solo escritura para usuarios autenticados
CREATE POLICY "Allow authenticated users to insert audit_log" 
  ON audit_log FOR INSERT 
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow read access to audit_log" 
  ON audit_log FOR SELECT 
  USING (auth.role() = 'authenticated');
```

---

## 👥 Paso 5: Configurar Autenticación

### 5.1 Habilitar Email Auth

1. Ve a **Authentication** → **Providers**
2. Habilita **Email** provider
3. Configura:
   - ✅ Enable email provider
   - ✅ Confirm email (opcional)
   - ✅ Secure email change

### 5.2 Crear Usuario Admin

```sql
-- En SQL Editor, ejecuta:
INSERT INTO auth.users (
  id,
  email,
  encrypted_password,
  email_confirmed_at,
  raw_user_meta_data
) VALUES (
  gen_random_uuid(),
  'admin@santodomingobay.com',
  crypt('tuPasswordSeguro123', gen_salt('bf')),
  NOW(),
  '{"name": "Admin", "role": "admin"}'::jsonb
);
```

O usa el dashboard:
- **Authentication** → **Users** → **Add user**

---

## 📦 Paso 6: Storage (Para Imágenes)

### 6.1 Crear Bucket

1. Ve a **Storage** en el sidebar
2. Click "Create a new bucket"
3. Nombre: `sdb-media`
4. Public bucket: ✅ (para acceso público a imágenes)
5. File size limit: `5MB`
6. Allowed MIME types: `image/*`

### 6.2 Configurar Políticas de Storage

```sql
-- Permitir subida para usuarios autenticados
CREATE POLICY "Allow authenticated users to upload"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'sdb-media' AND
    auth.role() = 'authenticated'
  );

-- Permitir lectura pública
CREATE POLICY "Allow public read access"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'sdb-media');

-- Permitir eliminación para usuarios autenticados
CREATE POLICY "Allow authenticated users to delete"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'sdb-media' AND
    auth.role() = 'authenticated'
  );
```

---

## 🔗 Paso 7: Conectar Next.js con Supabase

El código ya está preparado en `lib/supabase.ts`. Solo necesitas:

1. **Asegurarte de que `.env.local` tiene las credenciales**

2. **En tus componentes, reemplaza mock data:**

```typescript
// Antes (mock)
import { mockCategories } from '@/lib/mock-data';

// Después (Supabase)
import { db } from '@/lib/supabase';

const loadCategories = async () => {
  const { data, error } = await db.getCategories();
  if (error) {
    console.error('Error:', error);
    return;
  }
  setCategories(data || []);
};
```

---

## ✅ Paso 8: Verificar que Todo Funciona

### Test en Local

```bash
npm run dev
```

1. Ve a `http://localhost:3000/login`
2. Registra un usuario o usa el admin
3. Login y verifica que carguen las categorías de Supabase
4. Intenta crear/editar/eliminar contenido

### Test de Queries

En Supabase SQL Editor:

```sql
-- Ver categorías
SELECT * FROM categories ORDER BY order_index;

-- Ver secciones de contenido
SELECT 
  cs.title,
  c.name as category_name,
  cs.content
FROM content_sections cs
JOIN categories c ON cs.category_id = c.id;

-- Ver logs de auditoría
SELECT * FROM audit_log ORDER BY created_at DESC LIMIT 10;
```

---

## 🚀 Paso 9: Deploy a Producción

Cuando estés listo para producción:

1. **En Vercel Dashboard**, agrega las variables de entorno
2. **Redeploy** tu aplicación
3. **Verifica** que la app en producción se conecte correctamente

---

## 📊 Monitoreo y Mantenimiento

### Ver Uso de Base de Datos

**Settings** → **Database** → **Usage**

- Tamaño de BD
- Conexiones activas
- Queries por segundo

### Backups Automáticos

Supabase hace backups diarios automáticos (plan Pro).

Para plan Free, exporta manualmente:

```bash
# Instalar Supabase CLI
npm i -g supabase

# Dump database
supabase db dump > backup.sql
```

---

## 🐛 Troubleshooting

### Error: "relation does not exist"

- Asegúrate de que ejecutaste todo el SQL del Paso 3

### Error: "row-level security"

- Verifica que las políticas de RLS estén creadas (Paso 4)

### Error: "Invalid JWT"

- Verifica que las credenciales en `.env.local` sean correctas
- Regenera las keys si es necesario

---

## 📚 Recursos

- [Supabase Docs](https://supabase.com/docs)
- [Supabase SQL Editor](https://supabase.com/dashboard/project/_/sql)
- [Next.js + Supabase Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

---

**¡Tu backend está listo! Ahora puedes gestionar todo el contenido del hotel desde tu CMS.** 🎉
