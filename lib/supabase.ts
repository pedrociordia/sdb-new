import { createClient } from '@supabase/supabase-js';

// Supabase client configuration
// TODO: Add your Supabase credentials to .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth helpers
export const auth = {
  signUp: async (email: string, password: string, name: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          role: 'editor',
        },
      },
    });
    return { data, error };
  },

  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  getCurrentUser: async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    return { user, error };
  },

  resetPassword: async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    return { data, error };
  },
};

// Database helpers
export const db = {
  // Categories
  getCategories: async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('order_index');
    return { data, error };
  },

  // Content Sections
  getSections: async (categoryId: string) => {
    const { data, error } = await supabase
      .from('content_sections')
      .select('*')
      .eq('category_id', categoryId)
      .order('order_index');
    return { data, error };
  },

  createSection: async (section: any) => {
    const { data, error } = await supabase
      .from('content_sections')
      .insert(section)
      .select()
      .single();
    return { data, error };
  },

  updateSection: async (id: string, updates: any) => {
    const { data, error } = await supabase
      .from('content_sections')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    return { data, error };
  },

  deleteSection: async (id: string) => {
    const { error } = await supabase
      .from('content_sections')
      .delete()
      .eq('id', id);
    return { error };
  },
};
