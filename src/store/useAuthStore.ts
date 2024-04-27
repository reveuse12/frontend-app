import { AuthStoreInterface } from "@/types";
import { create } from "zustand";

export const useAuthStore = create<AuthStoreInterface>((set) => ({
  isAuthenticated: false,
  user: {},
  setToken: "",
  loading: false,
  setError: "",
  setUser: (user) => set({ user }),
}));
