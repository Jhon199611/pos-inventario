import { create } from 'zustand';
import type { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface AuthState {
  user: User | null;
  status: 'checking' | 'authenticated' | 'unauthenticated';
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  initializeAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  status: 'checking',

  login: async (email, password) => {
    // CORRECCIÓN AQUÍ: Simplemente no declares 'data' si no la vas a usar.
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  },

  logout: async () => {
    await supabase.auth.signOut();
  },

  initializeAuth: () => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        set({ user: session.user, status: 'authenticated' });
      } else {
        set({ user: null, status: 'unauthenticated' });
      }
    });
  },
}));
