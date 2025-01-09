import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  isLoading: false,
  login: (email: string, password: string) => {
    console.log("Login attempt:", email);
    set({ isAuthenticated: true });
  },
  register: (email: string, password: string) => {
    console.log("Register attempt:", email);
    set({ isAuthenticated: true });
  },
  logout: () => set({ isAuthenticated: false }),
}));