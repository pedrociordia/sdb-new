import { FieldTemplate } from '@/types';

export const categoryTemplates: Record<string, FieldTemplate[]> = {
  // Información General
  'general-information': [
    {
      name: 'Información Básica del Hotel',
      description: 'Datos principales del establecimiento',
      fields: [
        { key: 'hotel_name', label: 'Nombre del Hotel', type: 'text', required: true, placeholder: 'Santo Domingo Bay' },
        { key: 'category', label: 'Categoría', type: 'select', required: true, options: ['3 estrellas', '4 estrellas', '5 estrellas', 'Resort', 'Boutique'] },
        { key: 'description', label: 'Descripción', type: 'textarea', required: true, placeholder: 'Descripción del hotel...' },
        { key: 'address', label: 'Dirección', type: 'text', required: true, placeholder: 'Calle Caracol 1, Boca Chica' },
        { key: 'phone', label: 'Teléfono', type: 'phone', required: true, placeholder: '+1 809 523 4611' },
        { key: 'email', label: 'Email', type: 'email', required: true, placeholder: 'info@hotel.com' },
        { key: 'website', label: 'Sitio Web', type: 'url', required: false, placeholder: 'https://hotel.com' },
      ],
    },
    {
      name: 'Horarios',
      description: 'Horarios de check-in y check-out',
      fields: [
        { key: 'checkin_time', label: 'Check-in', type: 'time', required: true },
        { key: 'checkout_time', label: 'Check-out', type: 'time', required: true },
        { key: 'reception_24h', label: 'Recepción 24h', type: 'checkbox', required: false },
        { key: 'late_checkout', label: 'Late Check-out Disponible', type: 'checkbox', required: false },
        { key: 'early_checkin', label: 'Early Check-in Disponible', type: 'checkbox', required: false },
      ],
    },
  ],

  // Habitaciones
  'rooms': [
    {
      name: 'Tipo de Habitación',
      description: 'Información de una habitación',
      fields: [
        { key: 'room_type', label: 'Tipo de Habitación', type: 'text', required: true, placeholder: 'Suite Junior' },
        { key: 'description', label: 'Descripción', type: 'textarea', required: true },
        { key: 'capacity', label: 'Capacidad (personas)', type: 'number', required: true },
        { key: 'size_sqm', label: 'Tamaño (m²)', type: 'number', required: false },
        { key: 'bed_type', label: 'Tipo de Cama', type: 'select', required: true, options: ['King', 'Queen', 'Twin', 'Doble', 'Individual'] },
        { key: 'price_per_night', label: 'Precio por Noche', type: 'number', required: true },
        { key: 'amenities', label: 'Amenidades', type: 'multiselect', required: false, options: ['WiFi', 'TV', 'Aire Acondicionado', 'Minibar', 'Balcón', 'Vista al Mar', 'Caja Fuerte', 'Secador de Pelo'] },
        { key: 'available', label: 'Disponible', type: 'checkbox', required: false },
      ],
    },
  ],

  // Restaurantes & Bares
  'restaurants-bars': [
    {
      name: 'Restaurante',
      description: 'Información de restaurante',
      fields: [
        { key: 'name', label: 'Nombre', type: 'text', required: true, placeholder: 'La Famiglia' },
        { key: 'type', label: 'Tipo de Cocina', type: 'text', required: true, placeholder: 'Italiana' },
        { key: 'description', label: 'Descripción', type: 'textarea', required: true },
        { key: 'location', label: 'Ubicación', type: 'text', required: true, placeholder: 'Main Building' },
        { key: 'capacity', label: 'Capacidad', type: 'number', required: false },
        { key: 'opening_time', label: 'Horario Apertura', type: 'time', required: true },
        { key: 'closing_time', label: 'Horario Cierre', type: 'time', required: true },
        { key: 'dress_code', label: 'Código de Vestimenta', type: 'select', required: false, options: ['Casual', 'Elegante Casual', 'Formal'] },
        { key: 'reservation_required', label: 'Requiere Reservación', type: 'checkbox', required: false },
        { key: 'specialties', label: 'Especialidades', type: 'textarea', required: false, placeholder: 'Una por línea' },
      ],
    },
    {
      name: 'Bar',
      description: 'Información de bar',
      fields: [
        { key: 'name', label: 'Nombre', type: 'text', required: true, placeholder: 'Mr Rogers Cocktail Bar' },
        { key: 'type', label: 'Tipo', type: 'select', required: true, options: ['Bar', 'Lounge', 'Pool Bar', 'Beach Bar', 'Rooftop Bar'] },
        { key: 'description', label: 'Descripción', type: 'textarea', required: true },
        { key: 'location', label: 'Ubicación', type: 'text', required: true },
        { key: 'opening_time', label: 'Horario Apertura', type: 'time', required: true },
        { key: 'closing_time', label: 'Horario Cierre', type: 'time', required: true },
        { key: 'signature_drinks', label: 'Bebidas Signature', type: 'textarea', required: false },
        { key: 'happy_hour', label: 'Happy Hour', type: 'checkbox', required: false },
      ],
    },
  ],

  // Casino
  'casino': [
    {
      name: 'Información del Casino',
      description: 'Detalles del casino',
      fields: [
        { key: 'name', label: 'Nombre', type: 'text', required: true, placeholder: 'Casino Santo Domingo Bay' },
        { key: 'description', label: 'Descripción', type: 'textarea', required: true },
        { key: 'opening_time', label: 'Horario Apertura', type: 'time', required: true },
        { key: 'closing_time', label: 'Horario Cierre', type: 'time', required: true },
        { key: 'open_24h', label: 'Abierto 24 horas', type: 'checkbox', required: false },
        { key: 'slot_machines', label: 'Cantidad de Slots', type: 'number', required: false },
        { key: 'table_games', label: 'Juegos de Mesa', type: 'multiselect', required: false, options: ['Blackjack', 'Poker', 'Ruleta', 'Baccarat', 'Craps'] },
        { key: 'minimum_age', label: 'Edad Mínima', type: 'number', required: true },
        { key: 'dress_code', label: 'Código de Vestimenta', type: 'select', required: false, options: ['Casual', 'Elegante Casual', 'Formal'] },
      ],
    },
  ],

  // Instalaciones
  'facilities': [
    {
      name: 'Piscina',
      description: 'Información de piscina',
      fields: [
        { key: 'name', label: 'Nombre', type: 'text', required: true, placeholder: 'Piscina Principal' },
        { key: 'type', label: 'Tipo', type: 'select', required: true, options: ['Adultos', 'Niños', 'Infinity', 'Climatizada', 'Olímpica'] },
        { key: 'description', label: 'Descripción', type: 'textarea', required: false },
        { key: 'depth_m', label: 'Profundidad (metros)', type: 'number', required: false },
        { key: 'opening_time', label: 'Horario Apertura', type: 'time', required: true },
        { key: 'closing_time', label: 'Horario Cierre', type: 'time', required: true },
        { key: 'heated', label: 'Climatizada', type: 'checkbox', required: false },
        { key: 'bar_service', label: 'Servicio de Bar', type: 'checkbox', required: false },
      ],
    },
    {
      name: 'Gimnasio',
      description: 'Información del gimnasio',
      fields: [
        { key: 'name', label: 'Nombre', type: 'text', required: true, placeholder: 'Fitness Center' },
        { key: 'description', label: 'Descripción', type: 'textarea', required: false },
        { key: 'opening_time', label: 'Horario Apertura', type: 'time', required: true },
        { key: 'closing_time', label: 'Horario Cierre', type: 'time', required: true },
        { key: 'open_24h', label: 'Abierto 24 horas', type: 'checkbox', required: false },
        { key: 'equipment', label: 'Equipamiento', type: 'multiselect', required: false, options: ['Máquinas Cardiovasculares', 'Pesas Libres', 'Máquinas de Fuerza', 'Clases Grupales', 'Entrenador Personal'] },
      ],
    },
    {
      name: 'Spa',
      description: 'Información del spa',
      fields: [
        { key: 'name', label: 'Nombre', type: 'text', required: true, placeholder: 'Spa & Wellness' },
        { key: 'description', label: 'Descripción', type: 'textarea', required: true },
        { key: 'opening_time', label: 'Horario Apertura', type: 'time', required: true },
        { key: 'closing_time', label: 'Horario Cierre', type: 'time', required: true },
        { key: 'services', label: 'Servicios', type: 'multiselect', required: false, options: ['Masajes', 'Tratamientos Faciales', 'Tratamientos Corporales', 'Sauna', 'Jacuzzi', 'Manicure/Pedicure'] },
        { key: 'reservation_required', label: 'Requiere Reservación', type: 'checkbox', required: false },
      ],
    },
  ],

  // Eventos & Convenciones
  'events-conventions': [
    {
      name: 'Salón de Eventos',
      description: 'Información de salón',
      fields: [
        { key: 'name', label: 'Nombre del Salón', type: 'text', required: true, placeholder: 'Salón Caribe' },
        { key: 'description', label: 'Descripción', type: 'textarea', required: false },
        { key: 'capacity_theater', label: 'Capacidad Teatro', type: 'number', required: true },
        { key: 'capacity_banquet', label: 'Capacidad Banquete', type: 'number', required: true },
        { key: 'capacity_cocktail', label: 'Capacidad Cocktail', type: 'number', required: false },
        { key: 'size_sqm', label: 'Tamaño (m²)', type: 'number', required: false },
        { key: 'equipment', label: 'Equipamiento', type: 'multiselect', required: false, options: ['Proyector', 'Pantalla', 'Sistema de Audio', 'Micrófono', 'WiFi', 'Aire Acondicionado', 'Pizarra'] },
        { key: 'natural_light', label: 'Luz Natural', type: 'checkbox', required: false },
        { key: 'divisible', label: 'Divisible', type: 'checkbox', required: false },
      ],
    },
  ],

  // Bodas
  'weddings': [
    {
      name: 'Paquete de Boda',
      description: 'Información de paquete nupcial',
      fields: [
        { key: 'package_name', label: 'Nombre del Paquete', type: 'text', required: true, placeholder: 'Romantic Beach Wedding' },
        { key: 'description', label: 'Descripción', type: 'textarea', required: true },
        { key: 'min_guests', label: 'Mínimo de Invitados', type: 'number', required: true },
        { key: 'max_guests', label: 'Máximo de Invitados', type: 'number', required: true },
        { key: 'price', label: 'Precio Base', type: 'number', required: true },
        { key: 'locations', label: 'Locaciones Disponibles', type: 'multiselect', required: false, options: ['Playa', 'Jardín', 'Terraza', 'Salón Interior', 'Rooftop'] },
        { key: 'included_services', label: 'Servicios Incluidos', type: 'textarea', required: false, placeholder: 'Uno por línea' },
        { key: 'coordinator', label: 'Coordinador Incluido', type: 'checkbox', required: false },
        { key: 'catering', label: 'Catering Incluido', type: 'checkbox', required: false },
        { key: 'decoration', label: 'Decoración Incluida', type: 'checkbox', required: false },
      ],
    },
  ],
};

export const getTemplatesForCategory = (categorySlug: string): FieldTemplate[] => {
  return categoryTemplates[categorySlug] || [];
};
