# 🌱 Seed de Contenido - Santo Domingo Bay CMS

Este directorio contiene el script SQL para cargar todo el contenido inicial del hotel en la base de datos de Supabase.

## 📋 Contenido Incluido

### 1. **Información General** (5 secciones)
- ✅ Información de Contacto (teléfono, email, dirección)
- ✅ Personalidad de Marca (El Anfitrión Carismático)
- ✅ Pilares de Marca en Español (Celebración, Renovación, Inspiración)
- ✅ Brand Pillars en Inglés
- ✅ Esencia de Marca (20 conceptos de "cercanía")

### 2. **Restaurantes & Bares** (6 secciones)
- ✅ La Famiglia (Italian fine dining)
- ✅ KIBO (Asian rooftop restaurant)
- ✅ Buffet Restaurant (International + Local)
- ✅ Mr Rogers Cocktail Bar
- ✅ Splash Pool Bar
- ✅ Beach Bar

### 3. **Casino** (1 sección)
- ✅ Casino Santo Domingo Bay (info completa)

### 4. **Instalaciones** (4 secciones)
- ✅ Piscinas
- ✅ Spa & Wellness
- ✅ Playa Privada
- ✅ Gimnasio

### 5. **Eventos & Convenciones** (2 secciones)
- ✅ Salones de Eventos (3 salones con capacidades)
- ✅ Servicios para Eventos Corporativos

### 6. **Bodas** (3 secciones)
- ✅ Bodas en Santo Domingo Bay (overview)
- ✅ Paquetes de Boda (Esencial, Premium, Luxury)
- ✅ Servicios Adicionales para Bodas

### 7. **Habitaciones** (1 sección)
- ✅ Categorías de Habitaciones (overview)

## 🚀 Cómo Cargar el Contenido

### Opción 1: Usando Supabase Dashboard

1. Ve a tu proyecto en [Supabase Dashboard](https://app.supabase.com)
2. Ve a **SQL Editor**
3. Crea una nueva query
4. Copia todo el contenido de `seed-content.sql`
5. Pega y ejecuta

### Opción 2: Usando Wrangler (Local Development)

```bash
# 1. Asegúrate de que las migraciones están aplicadas
npm run db:migrate:local

# 2. Ejecuta el seed
wrangler d1 execute webapp-production --local --file=./scripts/seed-content.sql
```

### Opción 3: Usando Wrangler (Production)

```bash
# ⚠️ CUIDADO: Esto cargará los datos en PRODUCCIÓN
wrangler d1 execute webapp-production --file=./scripts/seed-content.sql
```

## 📊 Estadísticas del Contenido

- **Total de secciones**: 25+
- **Categorías cubiertas**: 7/7 (100%)
- **Campos JSON estructurados**: Todos
- **Idiomas**: Español e Inglés
- **Datos reales**: ✅ Basado en el documento oficial del hotel

## 🎯 Próximos Pasos

Una vez cargado el contenido:

1. ✅ Verifica que aparezcan las secciones en el dashboard
2. ✅ Prueba editar una sección
3. ✅ Agrega imágenes a las secciones (usando el campo de medios)
4. ✅ Personaliza los horarios y precios según necesites
5. ✅ Añade más habitaciones con sus características específicas

## 🔧 Mantenimiento

Para actualizar el contenido:

1. Edita el archivo `seed-content.sql`
2. Limpia la base de datos local:
   ```bash
   npm run db:reset
   ```
3. Vuelve a cargar el seed

## 📝 Notas Importantes

- Todos los datos están en formato JSON para máxima flexibilidad
- Puedes agregar nuevos campos sin modificar la estructura de la BD
- El contenido está optimizado para SEO y presentación web
- Incluye tanto información operativa como storytelling de marca

## 🆘 Soporte

Si tienes problemas:
1. Verifica que las categorías existan en la BD
2. Revisa que los slugs coincidan
3. Comprueba la sintaxis JSON

---

**Creado para**: Santo Domingo Bay - Convention Resort & Casino  
**Última actualización**: Diciembre 2024
