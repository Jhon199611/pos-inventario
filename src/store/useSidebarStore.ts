import { create } from "zustand";

interface SidebarState {
  isCollapsed: boolean;
  toggleCollapse: () => void;
  isMobileOpen: boolean;
  toggleMobile: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isCollapsed: false,
  toggleCollapse: () =>
    set((state) => ({ isCollapsed: !state.isCollapsed })),
  isMobileOpen: false,
  toggleMobile: () =>
    set((state) => ({ isMobileOpen: !state.isMobileOpen })),
}));