-- Santo Domingo Bay CMS - Content Seed
-- Este archivo carga todo el contenido inicial del hotel

-- ========================================
-- 1. INFORMACIÓN GENERAL
-- ========================================

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'general-information'),
  'Información de Contacto',
  'contact-information',
  '{
    "hotel_name": "Santo Domingo Bay - Convention Resort & Casino",
    "category": "4-Star Resort",
    "stars": 4,
    "location": "Boca Chica, República Dominicana",
    "full_address": "Calle Caracol, 1, Boca Chica 15700, República Dominicana",
    "phone": "+1 809 523 4611",
    "email": "info@sdbhotel.com",
    "website": "https://santodomingobay.com",
    "type": "contact"
  }'::jsonb,
  1
);

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'general-information'),
  'Personalidad de Marca',
  'brand-personality',
  '{
    "title": "El Anfitrión Carismático",
    "language": "spanish",
    "description": "Cada miembro del personal de Santo Domingo Bay es un carismático contador de historias, un anfitrión o anfitriona elegante que lleva por dentro 75 años encanto natural. Somos extrovertidos pero cálidos, glamurosos pero cercanos, como el mismo espíritu dominicano: vibrante, expresivo y lleno de ritmo.",
    "principles": [
      "Recibe a cada persona como si fuera un ícono: Cada huésped debe sentirse como Walt Disney, Mr. Rogers o los grandes artistas dominicanos que alguna vez caminaron aquí: reconocido, admirado y recordado.",
      "Inyecta el servicio con ritmo: Deja que las interacciones fluyan con facilidad y alegría, como Merengue y Bachata; energético, cercano, sin apuros.",
      "Color sin miedo: Ponle color a los uniformes y a las expresiones y los gestos de hospitalidad. Sé audaz, brillante, y métele el espíritu del Caribe cada encuentro.",
      "Mezcla el pasado y presente: Comparte historias legendarias del hotel, mientras haces que cada momento del huésped se sienta nuevo e inolvidable.",
      "Irradia serenidad caribeña: El lujo aquí no es distante ni austero; es cálido, brillante, vivo, como un atardecer en el malecón."
    ],
    "type": "brand"
  }'::jsonb,
  2
);

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'general-information'),
  'Pilares de Marca (Español)',
  'brand-pillars-spanish',
  '{
    "title": "La Cercanía",
    "language": "spanish",
    "pillars": [
      {
        "name": "Celebración",
        "subtitle": "Los grandes momentos de la vida, al estilo dominicano",
        "description": "Desde bodas de ensueño hasta fiestas deslumbrantes, celebra con glamour, sabor y ritmo. La costa turquesa de República Dominicana ofrece el escenario perfecto para una alegría inolvidable y momentos dignos de Instagram."
      },
      {
        "name": "Renovación",
        "subtitle": "Renueva tu energía, recárgate en el lujo caribeño",
        "description": "Junto a las aguas tranquilas de Santo Domingo Bay, encuentras descanso y reconexión. Disuelve tu estrés con rituales relajantes en el spa, sueño reparador en nuestras comfortables habitaciones y luego bajo el sol. Disfruta de gastronomía exquisita y cócteles caribeños artesanales, con el espíritu cálido de Dominicana; un resort todo incluido donde cuerpo y mente encuentran su chispa."
      },
      {
        "name": "Inspiración",
        "subtitle": "Pasado y presente",
        "description": "Inspirada en el legado, desde la visita de Walt Disney y décadas de arte y glamour, el Santo Domingo Bay sigue despertando creatividad y conexión a través de sus espacios icónicos y su vibrante escena de bodas y salones de convenciones."
      }
    ],
    "type": "brand"
  }'::jsonb,
  3
);

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'general-information'),
  'Brand Pillars (English)',
  'brand-pillars-english',
  '{
    "title": "Closeness",
    "language": "english",
    "pillars": [
      {
        "name": "Celebration",
        "subtitle": "Life''s biggest moments, Dominican style",
        "description": "From dream weddings to dazzling parties, celebrate with glamour, flavor, and rhythm. The turquoise Dominican coast sets the perfect stage for unforgettable joy and Instagram-worthy moments."
      },
      {
        "name": "Renewal",
        "subtitle": "Renew your energy, recharge in Caribbean luxury",
        "description": "By the tranquil waters of Santo Domingo Bay, find rest and reconnection. Dissolve your stress with relaxing spa rituals, restorative sleep in our comfortable rooms, and time under the sun. Enjoy exquisite gastronomy and artisanal Caribbean cocktails, with the warm Dominican spirit; an all-inclusive resort where body and mind find their spark."
      },
      {
        "name": "Inspiration",
        "subtitle": "Past and present",
        "description": "Inspired by legacy, from Walt Disney''s visit to decades of art and glamour, Santo Domingo Bay continues awakening creativity and connection through its iconic spaces and vibrant wedding and convention scene."
      }
    ],
    "type": "brand"
  }'::jsonb,
  4
);

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'general-information'),
  'Esencia de Marca',
  'brand-essence',
  '{
    "title": "La Cercanía",
    "language": "spanish",
    "essence": [
      "Cerca del Caribe",
      "Cerca del sol",
      "Cerca del centro",
      "Cerca de la historia",
      "Cerca de la Bachata",
      "Cerca del Merengue",
      "Cerca del ritmo",
      "Cerca de bailar",
      "Cerca de la brisa",
      "Cerca del turquesa",
      "Cerca del celaje",
      "Cerca de la arena dorada",
      "Cerca de la alegría",
      "Cerca del sabor",
      "Cerca de una sonrisa",
      "Cerca de tu mejor versión",
      "Cerca de desconectarte",
      "Cerca de sentirte en casa",
      "Cerca de lo que amas",
      "Cerca de ti"
    ],
    "type": "brand"
  }'::jsonb,
  5
);

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'general-information'),
  'Main Features',
  'main-features',
  '{
    "title": "Main Features",
    "icon": "🌟",
    "type": "features",
    "features": [
      "Private Beach",
      "Located within 10 minutes from Las Americas Airport and 35 minutes from Santo Domingo''s old city",
      "We offer the biggest meeting rooms close to Santo Domingo",
      "More than 85% of the rooms are facing the ocean",
      "Great location for weddings",
      "El mar Club Restaurant comes back alive",
      "Part of the Dominican Republic history",
      "Parking",
      "Spa"
    ]
  }'::jsonb,
  6
);

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'general-information'),
  'Services',
  'hotel-services',
  '{
    "title": "Services",
    "icon": "🛎️",
    "type": "services",
    "services": [
      {
        "name": "Room Service",
        "hours": "07:00 - 11:00pm",
        "cost": "included"
      },
      {
        "name": "Concierge",
        "hours": "07:00 - 11:00pm",
        "cost": "included"
      },
      {
        "name": "Laundry",
        "description": "Same-day service available",
        "cost": "paid"
      },
      {
        "name": "Airport Shuttle",
        "description": "variable",
        "cost": "paid"
      },
      {
        "name": "Parking",
        "description": "undefined yet",
        "cost": "paid"
      },
      {
        "name": "Free Wifi",
        "cost": "free"
      },
      {
        "name": "Taxi",
        "cost": "paid"
      },
      {
        "name": "Casino",
        "cost": "paid"
      },
      {
        "name": "Shopping Centers",
        "cost": "paid"
      },
      {
        "name": "Medical Center",
        "cost": "paid"
      }
    ]
  }'::jsonb,
  7
);

-- ========================================
-- 2. RESTAURANTES & BARES
-- ========================================

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'restaurants-bars'),
  'La Famiglia',
  'la-famiglia',
  '{
    "name": "La Famiglia",
    "type": "restaurant",
    "cuisine": "Italian",
    "location": "Bloque Principal, Main Building",
    "included_all_inclusive": true,
    "reservation_required": true,
    "dress_code": "Smart Casual",
    "vibes": "Elegant & Familiar",
    "open_to_public": false,
    "hours": {
      "dinner": "06:30 pm - 10:30 pm (Mon - Sun)"
    },
    "specialties": [
      "Pastas hechas con precisión italiana",
      "Parmigiana",
      "Carpaccio",
      "Postres tradicionales"
    ],
    "description": "En un hotel con tanta historia como el Santo Domingo Bay, cada espacio tiene un alma, y La Famiglia no es la excepción. Aquí, el encanto del viejo glamour dominicano se mezcla con la energía vibrante del Caribe y el sabor eterno de Italia. No es un restaurante temático; es un homenaje a la cultura de compartir, a los sabores que conectan generaciones, a la tradición de sentarse en familia y convertir cualquier comida en una celebración.",
    "atmosphere": "El ambiente recuerda a esas noches en la costa amalfitana, donde la comida llega humeante, la mesa se llena de colores y los comensales encuentran felicidad en los pequeños detalles.",
    "service_style": "Cálido, cercano, con ritmo dominicano pero elegancia italiana"
  }'::jsonb,
  1
);

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'restaurants-bars'),
  'KIBO',
  'kibo',
  '{
    "name": "KIBO",
    "type": "restaurant",
    "cuisine": "Asian",
    "location": "Rooftop",
    "included_all_inclusive": true,
    "reservation_required": true,
    "dress_code": "Smart Casual",
    "vibes": "Elegant & Modern",
    "open_to_public": false,
    "hours": {
      "dinner": "06:30 pm - 10:30 pm (Mon - Sun)"
    },
    "specialties": [
      "Sushi",
      "Sashimi",
      "Asian fusion dishes",
      "Japanese specialties"
    ],
    "atmosphere": "Rooftop dining experience with panoramic views"
  }'::jsonb,
  2
);

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'restaurants-bars'),
  'Buffet Restaurant',
  'buffet-restaurant',
  '{
    "name": "Buffet Restaurant",
    "type": "restaurant",
    "cuisine": "International + Local",
    "location": "Bloque Principal, Main Building",
    "included_all_inclusive": true,
    "reservation_required": false,
    "dress_code": "Casual",
    "vibes": "Familiar",
    "open_to_public": false,
    "hours": {
      "breakfast": "06:00 am - 10:30 am",
      "lunch": "12:00 pm - 04:00 pm",
      "dinner": "06:30 pm - 10:30 pm"
    },
    "description": "Restaurante buffet internacional con amplia variedad de opciones locales e internacionales"
  }'::jsonb,
  3
);

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'restaurants-bars'),
  'Mr Rogers Cocktail Bar',
  'mr-rogers-cocktail-bar',
  '{
    "name": "Mr Rogers Cocktail Bar",
    "type": "bar",
    "cuisine": "Drinks & Cocktails",
    "location": "Bloque Principal, Main Building",
    "included_all_inclusive": true,
    "reservation_required": false,
    "dress_code": "Casual",
    "vibes": "Familiar",
    "open_to_public": false,
    "hours": {
      "evening": "05:30 pm - 11:00 pm (Mon - Sun)"
    },
    "description": "Bar de cócteles con ambiente familiar y amplia selección de bebidas"
  }'::jsonb,
  4
);

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'restaurants-bars'),
  'Splash Pool Bar',
  'splash-pool-bar',
  '{
    "name": "Splash Pool Bar",
    "type": "bar",
    "cuisine": "Drinks & Light Snacks",
    "location": "Pool Area",
    "included_all_inclusive": true,
    "reservation_required": false,
    "dress_code": "Swimwear Casual",
    "vibes": "Tropical & Relaxed",
    "open_to_public": false,
    "hours": {
      "daily": "10:00 am - 06:00 pm"
    },
    "description": "Bar junto a la piscina para disfrutar de bebidas refrescantes y snacks ligeros"
  }'::jsonb,
  5
);

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'restaurants-bars'),
  'Beach Bar',
  'beach-bar',
  '{
    "name": "Beach Bar",
    "type": "bar",
    "cuisine": "Tropical Drinks & Snacks",
    "location": "Beach Front",
    "included_all_inclusive": true,
    "reservation_required": false,
    "dress_code": "Beach Casual",
    "vibes": "Caribbean & Chill",
    "open_to_public": false,
    "hours": {
      "daily": "10:00 am - 05:00 pm"
    },
    "description": "Bar frente a la playa con cócteles tropicales y ambiente caribeño"
  }'::jsonb,
  6
);

-- ========================================
-- 3. CASINO
-- ========================================

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'casino'),
  'Casino Santo Domingo Bay',
  'casino-information',
  '{
    "name": "Casino Santo Domingo Bay",
    "location": "Main Building",
    "hours": {
      "daily": "24/7"
    },
    "games": [
      "Slot Machines",
      "Blackjack",
      "Roulette",
      "Poker",
      "Baccarat"
    ],
    "features": [
      "Modern gaming floor",
      "Professional dealers",
      "Complimentary drinks",
      "Private gaming areas available"
    ],
    "dress_code": "Smart Casual",
    "minimum_age": 18,
    "description": "Casino de clase mundial con amplia variedad de juegos de mesa y máquinas tragamonedas"
  }'::jsonb,
  1
);

-- ========================================
-- 4. INSTALACIONES
-- ========================================

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'facilities'),
  'Piscinas',
  'pools',
  '{
    "name": "Piscinas",
    "type": "facility",
    "features": [
      "Piscina principal con vista al mar",
      "Piscina climatizada",
      "Área de niños",
      "Jacuzzi",
      "Camastros y sombrillas"
    ],
    "hours": {
      "daily": "07:00 am - 07:00 pm"
    },
    "amenities": [
      "Toallas disponibles",
      "Bar de piscina",
      "Música ambiente",
      "Servicio de snacks"
    ]
  }'::jsonb,
  1
);

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'facilities'),
  'Spa & Wellness',
  'spa-wellness',
  '{
    "name": "Spa & Wellness Center",
    "type": "facility",
    "services": [
      "Masajes terapéuticos",
      "Tratamientos faciales",
      "Aromaterapia",
      "Reflexología",
      "Jacuzzi",
      "Sauna",
      "Baño de vapor"
    ],
    "hours": {
      "daily": "09:00 am - 07:00 pm"
    },
    "booking": "Reservation required",
    "additional_cost": true,
    "description": "Centro de spa con tratamientos de relajación y renovación"
  }'::jsonb,
  2
);

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'facilities'),
  'Playa Privada',
  'private-beach',
  '{
    "name": "Playa Privada",
    "type": "facility",
    "features": [
      "Acceso directo a la playa",
      "Arena blanca",
      "Aguas turquesas",
      "Camastros y sombrillas",
      "Toallas de playa"
    ],
    "amenities": [
      "Beach bar",
      "Deportes acuáticos",
      "Kayaks",
      "Snorkeling equipment",
      "Servicio de playa"
    ],
    "hours": {
      "daily": "Sunrise to Sunset"
    }
  }'::jsonb,
  3
);

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'facilities'),
  'Gimnasio',
  'fitness-center',
  '{
    "name": "Fitness Center",
    "type": "facility",
    "equipment": [
      "Máquinas cardiovasculares",
      "Pesas libres",
      "Máquinas de musculación",
      "Área de estiramiento"
    ],
    "hours": {
      "daily": "06:00 am - 09:00 pm"
    },
    "features": [
      "Equipamiento moderno",
      "Aire acondicionado",
      "Toallas disponibles",
      "Agua gratis"
    ]
  }'::jsonb,
  4
);

-- ========================================
-- 5. EVENTOS & CONVENCIONES
-- ========================================

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'events-conventions'),
  'Salones de Eventos',
  'event-rooms',
  '{
    "name": "Salones de Eventos",
    "type": "facility",
    "rooms": [
      {
        "name": "Gran Salón Principal",
        "capacity": {
          "banquet": 500,
          "theater": 700,
          "cocktail": 800
        },
        "area": "800 m²",
        "features": [
          "Altura de techo: 4.5m",
          "Divisible en 3 secciones",
          "Aire acondicionado",
          "Iluminación profesional",
          "Sistema de sonido"
        ]
      },
      {
        "name": "Salón Caribe",
        "capacity": {
          "banquet": 200,
          "theater": 300,
          "cocktail": 350
        },
        "area": "350 m²",
        "features": [
          "Vista al jardín",
          "Entrada independiente",
          "Terraza privada"
        ]
      },
      {
        "name": "Salón Boca Chica",
        "capacity": {
          "banquet": 100,
          "theater": 150,
          "cocktail": 180
        },
        "area": "180 m²"
      }
    ],
    "services": [
      "Equipo audiovisual",
      "WiFi de alta velocidad",
      "Personal técnico",
      "Catering personalizado",
      "Coordinación de eventos",
      "Montaje y desmontaje"
    ]
  }'::jsonb,
  1
);

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'events-conventions'),
  'Servicios para Eventos Corporativos',
  'corporate-events',
  '{
    "name": "Eventos Corporativos",
    "type": "service",
    "event_types": [
      "Conferencias",
      "Seminarios",
      "Convenciones",
      "Reuniones ejecutivas",
      "Team building",
      "Lanzamientos de producto",
      "Capacitaciones"
    ],
    "services": [
      "Coordinador de eventos dedicado",
      "Diseño de espacios personalizado",
      "Paquetes de coffee breaks",
      "Menús corporativos",
      "Branding del evento",
      "Fotografía y video",
      "Interpretación simultánea"
    ],
    "technology": [
      "Proyectores HD",
      "Pantallas LED",
      "Sistema de videoconferencia",
      "Micrófonos inalámbricos",
      "Internet de alta velocidad",
      "Streaming en vivo"
    ]
  }'::jsonb,
  2
);

-- ========================================
-- 6. BODAS
-- ========================================

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'weddings'),
  'Bodas en Santo Domingo Bay',
  'weddings-overview',
  '{
    "name": "Bodas de Ensueño",
    "type": "service",
    "description": "Celebra tu boda en uno de los resorts más emblemáticos de República Dominicana. Con 75 años de historia y experiencia en eventos, creamos bodas inolvidables con el glamour del Caribe.",
    "wedding_styles": [
      "Boda en la playa",
      "Boda en jardín",
      "Boda de gala en salón",
      "Boda íntima",
      "Destination wedding"
    ],
    "capacity": {
      "intimate": "20-50 guests",
      "medium": "50-150 guests",
      "grand": "150-500 guests"
    },
    "venues": [
      {
        "name": "Playa Privada",
        "capacity": 200,
        "style": "Beach ceremony",
        "features": [
          "Vista al mar turquesa",
          "Arena blanca",
          "Atardecer espectacular",
          "Gazebo romántico"
        ]
      },
      {
        "name": "Jardines Tropicales",
        "capacity": 150,
        "style": "Garden ceremony",
        "features": [
          "Vegetación exuberante",
          "Flores tropicales",
          "Ambiente natural",
          "Sombra natural"
        ]
      },
      {
        "name": "Gran Salón",
        "capacity": 500,
        "style": "Elegant ballroom",
        "features": [
          "Aire acondicionado",
          "Iluminación personalizable",
          "Techo alto",
          "Decoración elegante"
        ]
      }
    ]
  }'::jsonb,
  1
);

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'weddings'),
  'Paquetes de Boda',
  'wedding-packages',
  '{
    "name": "Paquetes de Boda",
    "type": "packages",
    "packages": [
      {
        "name": "Paquete Esencial",
        "guests": "Up to 50",
        "includes": [
          "Ceremonia en playa o jardín",
          "Decoración básica",
          "Coordinador de bodas",
          "Música para ceremonia",
          "Brindis de champagne",
          "Pastel de boda",
          "Menú de 3 tiempos"
        ]
      },
      {
        "name": "Paquete Premium",
        "guests": "Up to 150",
        "includes": [
          "Todo lo del Paquete Esencial",
          "Decoración premium",
          "DJ para recepción",
          "Menú de 4 tiempos",
          "Barra libre 5 horas",
          "Fotografía profesional (4 horas)",
          "Suite nupcial decorada"
        ]
      },
      {
        "name": "Paquete Luxury",
        "guests": "Up to 500",
        "includes": [
          "Todo lo del Paquete Premium",
          "Decoración de lujo personalizada",
          "Banda en vivo",
          "Menú gourmet 5 tiempos",
          "Barra premium ilimitada",
          "Fotografía y video profesional día completo",
          "Fuegos artificiales",
          "Spa para novios"
        ]
      }
    ],
    "services": [
      "Wedding planner dedicado",
      "Diseño personalizado",
      "Coordinación completa",
      "Asistencia el día del evento",
      "Menús personalizados",
      "Decoración floral",
      "Iluminación ambiental",
      "Entretenimiento"
    ]
  }'::jsonb,
  2
);

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'weddings'),
  'Servicios Adicionales para Bodas',
  'wedding-additional-services',
  '{
    "name": "Servicios Adicionales",
    "type": "services",
    "services": [
      {
        "category": "Fotografía & Video",
        "options": [
          "Sesión engagement",
          "Álbum de fotos premium",
          "Video cinematográfico",
          "Drone footage",
          "Photo booth"
        ]
      },
      {
        "category": "Música & Entretenimiento",
        "options": [
          "Banda en vivo",
          "DJ profesional",
          "Mariachi",
          "Grupo de merengue/bachata",
          "Saxofonista",
          "Violinista"
        ]
      },
      {
        "category": "Belleza & Spa",
        "options": [
          "Maquillaje profesional",
          "Peinado",
          "Manicure & pedicure",
          "Spa day para novias",
          "Servicio para invitados"
        ]
      },
      {
        "category": "Decoración",
        "options": [
          "Flores premium",
          "Iluminación LED",
          "Carpas elegantes",
          "Mobiliario lounge",
          "Centros de mesa personalizados"
        ]
      },
      {
        "category": "Extras",
        "options": [
          "Fuegos artificiales",
          "Show de luces",
          "Candy bar",
          "Late night snacks",
          "Transporte para invitados"
        ]
      }
    ]
  }'::jsonb,
  3
);

-- ========================================
-- 7. HABITACIONES (Estructura base)
-- ========================================

INSERT INTO content_sections (category_id, title, slug, content, order_index) VALUES
(
  (SELECT id FROM categories WHERE slug = 'rooms'),
  'Categorías de Habitaciones',
  'room-categories',
  '{
    "name": "Habitaciones",
    "type": "overview",
    "total_rooms": 220,
    "categories": [
      "Standard Room",
      "Superior Room",
      "Deluxe Room",
      "Junior Suite",
      "Suite",
      "Presidential Suite"
    ],
    "general_amenities": [
      "Aire acondicionado",
      "TV por cable",
      "WiFi gratuito",
      "Caja fuerte",
      "Minibar",
      "Cafetera",
      "Secador de pelo",
      "Amenidades de baño",
      "Servicio de habitaciones",
      "Servicio de limpieza diario"
    ]
  }'::jsonb,
  1
);
