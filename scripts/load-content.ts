/**
 * Script para cargar contenido inicial en Supabase
 * Ejecutar con: npx tsx scripts/load-content.ts
 */

import { createClient } from '@supabase/supabase-js';

// Configuración de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Error: Faltan variables de entorno de Supabase');
  console.log('Asegúrate de tener NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY en tu .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Datos de contenido
const contentData = {
  'general-information': [
    {
      title: 'Información de Contacto',
      slug: 'contact-information',
      content: {
        hotel_name: 'Santo Domingo Bay - Convention Resort & Casino',
        category: '4-Star Resort',
        stars: 4,
        location: 'Boca Chica, República Dominicana',
        full_address: 'Calle Caracol, 1, Boca Chica 15700, República Dominicana',
        phone: '+1 809 523 4611',
        email: 'info@sdbhotel.com',
        website: 'https://santodomingobay.com',
        type: 'contact'
      },
      order_index: 1
    },
    {
      title: 'Personalidad de Marca',
      slug: 'brand-personality',
      content: {
        title: 'El Anfitrión Carismático',
        language: 'spanish',
        description: 'Cada miembro del personal de Santo Domingo Bay es un carismático contador de historias, un anfitrión o anfitriona elegante que lleva por dentro 75 años encanto natural. Somos extrovertidos pero cálidos, glamurosos pero cercanos, como el mismo espíritu dominicano: vibrante, expresivo y lleno de ritmo.',
        principles: [
          'Recibe a cada persona como si fuera un ícono: Cada huésped debe sentirse como Walt Disney, Mr. Rogers o los grandes artistas dominicanos que alguna vez caminaron aquí: reconocido, admirado y recordado.',
          'Inyecta el servicio con ritmo: Deja que las interacciones fluyan con facilidad y alegría, como Merengue y Bachata; energético, cercano, sin apuros.',
          'Color sin miedo: Ponle color a los uniformes y a las expresiones y los gestos de hospitalidad. Sé audaz, brillante, y métele el espíritu del Caribe cada encuentro.',
          'Mezcla el pasado y presente: Comparte historias legendarias del hotel, mientras haces que cada momento del huésped se sienta nuevo e inolvidable.',
          'Irradia serenidad caribeña: El lujo aquí no es distante ni austero; es cálido, brillante, vivo, como un atardecer en el malecón.'
        ],
        type: 'brand'
      },
      order_index: 2
    },
    {
      title: 'Esencia de Marca',
      slug: 'brand-essence',
      content: {
        title: 'La Cercanía',
        language: 'spanish',
        essence: [
          'Cerca del Caribe', 'Cerca del sol', 'Cerca del centro', 'Cerca de la historia',
          'Cerca de la Bachata', 'Cerca del Merengue', 'Cerca del ritmo', 'Cerca de bailar',
          'Cerca de la brisa', 'Cerca del turquesa', 'Cerca del celaje', 'Cerca de la arena dorada',
          'Cerca de la alegría', 'Cerca del sabor', 'Cerca de una sonrisa', 'Cerca de tu mejor versión',
          'Cerca de desconectarte', 'Cerca de sentirte en casa', 'Cerca de lo que amas', 'Cerca de ti'
        ],
        type: 'brand'
      },
      order_index: 5
    }
  ],
  'restaurants-bars': [
    {
      title: 'La Famiglia',
      slug: 'la-famiglia',
      content: {
        name: 'La Famiglia',
        type: 'restaurant',
        cuisine: 'Italian',
        location: 'Bloque Principal, Main Building',
        included_all_inclusive: true,
        reservation_required: true,
        dress_code: 'Smart Casual',
        vibes: 'Elegant & Familiar',
        open_to_public: false,
        hours: { dinner: '06:30 pm - 10:30 pm (Mon - Sun)' },
        specialties: ['Pastas hechas con precisión italiana', 'Parmigiana', 'Carpaccio', 'Postres tradicionales'],
        description: 'En un hotel con tanta historia como el Santo Domingo Bay, cada espacio tiene un alma, y La Famiglia no es la excepción. Aquí, el encanto del viejo glamour dominicano se mezcla con la energía vibrante del Caribe y el sabor eterno de Italia.',
        service_style: 'Cálido, cercano, con ritmo dominicano pero elegancia italiana'
      },
      order_index: 1
    },
    {
      title: 'KIBO',
      slug: 'kibo',
      content: {
        name: 'KIBO',
        type: 'restaurant',
        cuisine: 'Asian',
        location: 'Rooftop',
        included_all_inclusive: true,
        reservation_required: true,
        dress_code: 'Smart Casual',
        vibes: 'Elegant & Modern',
        open_to_public: false,
        hours: { dinner: '06:30 pm - 10:30 pm (Mon - Sun)' },
        specialties: ['Sushi', 'Sashimi', 'Asian fusion dishes', 'Japanese specialties'],
        atmosphere: 'Rooftop dining experience with panoramic views'
      },
      order_index: 2
    },
    {
      title: 'Buffet Restaurant',
      slug: 'buffet-restaurant',
      content: {
        name: 'Buffet Restaurant',
        type: 'restaurant',
        cuisine: 'International + Local',
        location: 'Bloque Principal, Main Building',
        included_all_inclusive: true,
        reservation_required: false,
        dress_code: 'Casual',
        vibes: 'Familiar',
        open_to_public: false,
        hours: {
          breakfast: '06:00 am - 10:30 am',
          lunch: '12:00 pm - 04:00 pm',
          dinner: '06:30 pm - 10:30 pm'
        },
        description: 'Restaurante buffet internacional con amplia variedad de opciones locales e internacionales'
      },
      order_index: 3
    },
    {
      title: 'Mr Rogers Cocktail Bar',
      slug: 'mr-rogers-cocktail-bar',
      content: {
        name: 'Mr Rogers Cocktail Bar',
        type: 'bar',
        cuisine: 'Drinks & Cocktails',
        location: 'Bloque Principal, Main Building',
        included_all_inclusive: true,
        reservation_required: false,
        dress_code: 'Casual',
        vibes: 'Familiar',
        open_to_public: false,
        hours: { evening: '05:30 pm - 11:00 pm (Mon - Sun)' },
        description: 'Bar de cócteles con ambiente familiar y amplia selección de bebidas'
      },
      order_index: 4
    }
  ],
  'casino': [
    {
      title: 'Casino Santo Domingo Bay',
      slug: 'casino-information',
      content: {
        name: 'Casino Santo Domingo Bay',
        location: 'Main Building',
        hours: { daily: '24/7' },
        games: ['Slot Machines', 'Blackjack', 'Roulette', 'Poker', 'Baccarat'],
        features: ['Modern gaming floor', 'Professional dealers', 'Complimentary drinks', 'Private gaming areas available'],
        dress_code: 'Smart Casual',
        minimum_age: 18,
        description: 'Casino de clase mundial con amplia variedad de juegos de mesa y máquinas tragamonedas'
      },
      order_index: 1
    }
  ],
  'facilities': [
    {
      title: 'Piscinas',
      slug: 'pools',
      content: {
        name: 'Piscinas',
        type: 'facility',
        features: ['Piscina principal con vista al mar', 'Piscina climatizada', 'Área de niños', 'Jacuzzi', 'Camastros y sombrillas'],
        hours: { daily: '07:00 am - 07:00 pm' },
        amenities: ['Toallas disponibles', 'Bar de piscina', 'Música ambiente', 'Servicio de snacks']
      },
      order_index: 1
    },
    {
      title: 'Spa & Wellness',
      slug: 'spa-wellness',
      content: {
        name: 'Spa & Wellness Center',
        type: 'facility',
        services: ['Masajes terapéuticos', 'Tratamientos faciales', 'Aromaterapia', 'Reflexología', 'Jacuzzi', 'Sauna', 'Baño de vapor'],
        hours: { daily: '09:00 am - 07:00 pm' },
        booking: 'Reservation required',
        additional_cost: true,
        description: 'Centro de spa con tratamientos de relajación y renovación'
      },
      order_index: 2
    },
    {
      title: 'Playa Privada',
      slug: 'private-beach',
      content: {
        name: 'Playa Privada',
        type: 'facility',
        features: ['Acceso directo a la playa', 'Arena blanca', 'Aguas turquesas', 'Camastros y sombrillas', 'Toallas de playa'],
        amenities: ['Beach bar', 'Deportes acuáticos', 'Kayaks', 'Snorkeling equipment', 'Servicio de playa'],
        hours: { daily: 'Sunrise to Sunset' }
      },
      order_index: 3
    }
  ],
  'weddings': [
    {
      title: 'Bodas en Santo Domingo Bay',
      slug: 'weddings-overview',
      content: {
        name: 'Bodas de Ensueño',
        type: 'service',
        description: 'Celebra tu boda en uno de los resorts más emblemáticos de República Dominicana. Con 75 años de historia y experiencia en eventos, creamos bodas inolvidables con el glamour del Caribe.',
        wedding_styles: ['Boda en la playa', 'Boda en jardín', 'Boda de gala en salón', 'Boda íntima', 'Destination wedding'],
        capacity: {
          intimate: '20-50 guests',
          medium: '50-150 guests',
          grand: '150-500 guests'
        }
      },
      order_index: 1
    }
  ]
};

async function loadContent() {
  console.log('🚀 Iniciando carga de contenido...\n');

  // Obtener categorías
  const { data: categories, error: categoriesError } = await supabase
    .from('categories')
    .select('id, slug, name');

  if (categoriesError) {
    console.error('❌ Error al obtener categorías:', categoriesError);
    return;
  }

  console.log(`✅ Encontradas ${categories?.length || 0} categorías\n`);

  let totalLoaded = 0;
  let totalErrors = 0;

  // Cargar contenido por categoría
  for (const category of categories || []) {
    const categoryContent = contentData[category.slug as keyof typeof contentData];
    
    if (!categoryContent) {
      console.log(`⏭️  Sin contenido para: ${category.name}`);
      continue;
    }

    console.log(`📂 Cargando contenido para: ${category.name}`);

    for (const section of categoryContent) {
      const { error } = await supabase
        .from('content_sections')
        .insert({
          category_id: category.id,
          title: section.title,
          slug: section.slug,
          content: section.content,
          order_index: section.order_index
        });

      if (error) {
        console.log(`   ❌ Error en "${section.title}": ${error.message}`);
        totalErrors++;
      } else {
        console.log(`   ✅ ${section.title}`);
        totalLoaded++;
      }
    }

    console.log('');
  }

  console.log('\n' + '='.repeat(50));
  console.log(`✅ Contenido cargado: ${totalLoaded} secciones`);
  console.log(`❌ Errores: ${totalErrors}`);
  console.log('='.repeat(50));
}

// Ejecutar
loadContent().catch(console.error);
