import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StorageStoreType {
  storage: {
    theme?: "dark" | "light";
    blur?: boolean;
    showDock?: boolean;
    background?: {
      image: string;
      style: "cover" | "contain" | "fill" | "none" | "scale-down";
    };
  };
  setStorage: (storage: {}) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateStorage: (key: keyof StorageStoreType["storage"], value: any) => void;
}

export const useStorage = create<StorageStoreType>()(persist((set, get) => ({
  storage: {},
  setStorage: (storage) => set({ storage }),
  updateStorage: (key, value) => set({
    storage: { ...get().storage, [key]: value },
  }),
}), {
  name: "ReactDeskAppStorage",
}))
