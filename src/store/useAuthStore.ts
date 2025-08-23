// src/store/useAuthStore.ts
import { create } from 'zustand';
import type { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface AuthState {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  fetchUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  login: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    set({ user: data.user });
  },

  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },

  fetchUser: () => {
    supabase.auth.getSession().then(({ data }) => {
      set({ user: data.session?.user || null });
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      set({ user: session?.user || null });
    });
  },
}));
