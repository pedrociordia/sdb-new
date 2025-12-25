// Database types
export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface ContentSection {
  id: string;
  category_id: string;
  title: string;
  slug: string;
  content: Record<string, any>;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface MediaAsset {
  id: string;
  section_id: string;
  url: string;
  type: 'image' | 'video' | 'document';
  alt_text: string;
  created_at: string;
}

export interface AuditLog {
  id: string;
  user_email: string;
  action: 'create' | 'update' | 'delete';
  entity_type: string;
  entity_id: string;
  changes: Record<string, any>;
  created_at: string;
}

// UI types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor' | 'viewer';
  created_at: string;
}

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
}

export interface Modal {
  isOpen: boolean;
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}
