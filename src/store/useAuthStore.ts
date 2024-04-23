import { AuthStoreInterface } from "@/types";
import { create } from "zustand";

export const useAuthStore = create<AuthStoreInterface>((set) => ({
  isAuthenticated: false,
  user: {},
  token: "",
  loading: false,
  error: "",
  setUser: (user) => set({ user }),
}));
