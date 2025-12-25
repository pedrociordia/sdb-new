# 🌊 Santo Domingo Bay - Management Portal

<div align="center">

![Santo Domingo Bay](https://img.shields.io/badge/Santo%20Domingo%20Bay-Management%20Portal-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.15.0-ff69b4?style=for-the-badge&logo=framer)

**Un CMS moderno con diseño Neomorph Liquid Glass para gestionar el contenido del resort Santo Domingo Bay**

[Ver Demo](#demo) • [Características](#características) • [Instalación](#instalación) • [Despliegue](#despliegue-en-vercel)

</div>

---

## 🎨 Diseño Ultra Moderno 2025!

Este proyecto implementa las últimas tendencias de diseño web:

- 🌊 **Neomorphism** - Elementos con sombras suaves y efecto 3D
- 💎 **Glassmorphism** - Efectos de vidrio esmerilado con backdrop blur
- ✨ **Liquid Design** - Animaciones fluidas y transiciones suaves
- 🎭 **Filosofía Apple** - Diseño minimalista y elegante
- 🌈 **Gradientes Dinámicos** - Colores vibrantes del océano y atardecer
- 🎪 **Animaciones Espectaculares** - Powered by Framer Motion

---

## 🚀 Características Principales

### 🔐 Autenticación
- ✅ Login/Registro con diseño glassmorphism
- ✅ Validación de formularios en tiempo real
- ✅ Animaciones de transición suaves
- 🔜 Integración con Supabase Auth (preparado)

### 📊 Dashboard Interactivo
- ✅ Sidebar animado con 7 categorías del hotel
- ✅ Navegación fluida y responsive
- ✅ Tema oscuro con efectos de luz
- ✅ Header con búsqueda y notificaciones
- ✅ Menú móvil con backdrop blur

### 🎯 Gestión de Contenido (CMS)
- ✅ CRUD completo de secciones de contenido
- ✅ Vista en cards con efectos hover
- ✅ Modales para ver/editar contenido
- ✅ Sistema de notificaciones toast
- ✅ Filtros y búsqueda
- ✅ Exportar/Importar datos

### 🎨 Componentes UI Reutilizables
- ✅ **Button** - 5 variantes con efectos shimmer
- ✅ **Input** - Con iconos y validación animada
- ✅ **Card** - Glass, neomorph y solid variants
- ✅ **Modal** - Con backdrop blur y animaciones
- ✅ **Toast** - Notificaciones flotantes

---

## 📂 Estructura del Proyecto

```
santo-domingo-bay-cms/
├── app/
│   ├── dashboard/         # Dashboard principal
│   ├── login/            # Página de autenticación
│   ├── globals.css       # Estilos globales
│   ├── layout.tsx        # Layout raíz
│   └── page.tsx          # Página home (redirect)
├── components/
│   ├── dashboard/
│   │   ├── ContentCard.tsx    # Card de sección de contenido
│   │   └── EmptyState.tsx     # Estado vacío
│   ├── layout/
│   │   ├── Sidebar.tsx        # Navegación lateral
│   │   └── Header.tsx         # Barra superior
│   └── ui/
│       ├── Button.tsx         # Botón animado
│       ├── Card.tsx           # Contenedor glass/neomorph
│       ├── Input.tsx          # Input con efectos
│       ├── Modal.tsx          # Modal con backdrop
│       └── Toast.tsx          # Notificaciones
├── lib/
│   ├── mock-data.ts      # Datos de prueba
│   └── supabase.ts       # Cliente Supabase (preparado)
├── types/
│   └── index.ts          # TypeScript types
├── utils/
│   └── cn.ts             # Utilidad para clases CSS
└── public/               # Assets estáticos

```

---

## 🎯 Categorías del CMS

El panel gestiona 7 categorías principales del resort:

| Icono | Categoría | Descripción |
|-------|-----------|-------------|
| 📍 | **Información General** | Datos básicos del hotel, ubicación, contacto |
| 🛏️ | **Habitaciones** | Tipos de habitaciones, amenities, tarifas |
| 🍽️ | **Restaurantes & Bares** | La Famiglia, KIBO, Buffet, Mr Rogers Bar |
| 🎰 | **Casino** | Información del casino, juegos, horarios |
| 🏊 | **Instalaciones** | Piscinas, gimnasio, spa, áreas comunes |
| 🎪 | **Eventos & Convenciones** | Salones, capacidades, catering |
| 💒 | **Bodas** | Paquetes de bodas, locaciones, servicios |

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 15.1.6** - React framework con App Router
- **TypeScript 5.7.2** - Tipado estático
- **Tailwind CSS 3.4.17** - Utility-first CSS
- **Framer Motion 11.15.0** - Animaciones fluidas
- **Lucide React** - Iconos modernos

### Backend (Preparado)
- **Supabase** - BaaS (Backend as a Service)
  - PostgreSQL Database
  - Authentication
  - Storage para imágenes
  - Real-time sync

### DevTools
- **ESLint** - Linter
- **Autoprefixer** - CSS prefixing
- **PostCSS** - CSS processing

---

## 📦 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Git

### Pasos

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd webapp
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```

Edita `.env.local` con tus credenciales de Supabase:
```env
NEXT_PUBLIC_SUPABASE_URL=tu-proyecto-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

5. **Abrir en navegador**
```
http://localhost:3000
```

---

## 🚀 Despliegue en Vercel

### Método 1: Vercel CLI (Recomendado)

1. **Instalar Vercel CLI**
```bash
npm i -g vercel
```

2. **Login en Vercel**
```bash
vercel login
```

3. **Desplegar**
```bash
vercel
```

4. **Configurar variables de entorno en Vercel Dashboard**
   - Ve a tu proyecto en vercel.com
   - Settings → Environment Variables
   - Agrega `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`

5. **Redesplegar con variables**
```bash
vercel --prod
```

### Método 2: GitHub + Vercel Dashboard

1. **Push a GitHub**
```bash
git remote add origin <tu-repo-url>
git push -u origin main
```

2. **Importar en Vercel**
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Selecciona tu repositorio
   - Configura las variables de entorno
   - Deploy!

---

## 🔧 Scripts Disponibles

```bash
npm run dev       # Desarrollo con Turbopack
npm run build     # Build para producción
npm run start     # Servidor de producción
npm run lint      # Linting con ESLint
```

---

## 🎨 Personalización del Tema

### Colores Principales

Los colores están definidos en `tailwind.config.ts`:

```typescript
colors: {
  ocean: {
    500: '#1890ff',  // Azul principal
    600: '#096dd9',
  },
  sand: {
    500: '#f6d687',  // Dorado arena
  }
}
```

### Efectos Glass

Puedes ajustar los efectos en `globals.css`:

```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

---

## 🔗 Integración con Supabase

### 1. Crear Proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Crea un nuevo proyecto
3. Copia las credenciales

### 2. Crear Tablas

Ejecuta este SQL en Supabase SQL Editor:

```sql
-- Tabla de categorías
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  icon TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de secciones de contenido
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

-- Insertar categorías predefinidas
INSERT INTO categories (name, slug, icon, order_index) VALUES
  ('Información General', 'general-information', 'Info', 0),
  ('Habitaciones', 'rooms', 'BedDouble', 1),
  ('Restaurantes & Bares', 'restaurants-bars', 'UtensilsCrossed', 2),
  ('Casino', 'casino', 'Dice5', 3),
  ('Instalaciones', 'facilities', 'Waves', 4),
  ('Eventos & Convenciones', 'events-conventions', 'CalendarDays', 5),
  ('Bodas', 'weddings', 'Heart', 6);
```

### 3. Actualizar el Código

La estructura ya está preparada en `lib/supabase.ts`. Solo necesitas:

1. Agregar credenciales en `.env.local`
2. Descomentar las llamadas a Supabase en los componentes
3. Reemplazar `mockData` por llamadas reales

---

## 🎯 Roadmap

### ✅ Completado
- [x] Diseño UI/UX con Neomorph + Glassmorphism
- [x] Sistema de componentes reutilizables
- [x] Página de login/registro
- [x] Dashboard con sidebar animado
- [x] Vista de categorías y secciones
- [x] Sistema de notificaciones toast
- [x] Modales y efectos visuales
- [x] Responsive design
- [x] Estructura para Supabase

### 🔜 Próximas Funcionalidades
- [ ] Conectar con Supabase (BD real)
- [ ] CRUD completo funcional
- [ ] Upload de imágenes
- [ ] Editor de contenido rich text
- [ ] Sistema de roles y permisos
- [ ] Historial de cambios (audit log)
- [ ] Búsqueda avanzada
- [ ] Filtros por fecha/usuario
- [ ] Exportación de datos (JSON/CSV)
- [ ] Dark/Light mode toggle funcional
- [ ] PWA support

---

## 📸 Screenshots

### Login Page
![Login](docs/screenshots/login.png)
*Página de login con efectos glassmorphism y animaciones fluidas*

### Dashboard
![Dashboard](docs/screenshots/dashboard.png)
*Dashboard principal con sidebar animado y gestión de contenido*

### Content Cards
![Cards](docs/screenshots/cards.png)
*Cards de contenido con efectos hover y acciones CRUD*

---

## 🤝 Contribuir

Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más información.

---

## 👥 Autor

**Santo Domingo Bay Development Team**

- Website: [santodomingobay.com](https://santodomingobay.com)
- Email: info@sdbhotel.com
- Teléfono: +1 809 523 4611

---

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - El mejor framework de React
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animaciones increíbles
- [Supabase](https://supabase.com/) - Backend as a Service
- [Lucide Icons](https://lucide.dev/) - Iconos hermosos
- [Vercel](https://vercel.com/) - La mejor plataforma de deploy

---

<div align="center">

**Hecho con ❤️ por el equipo de Santo Domingo Bay**

⭐️ Si te gusta este proyecto, dale una estrella!

</div>
