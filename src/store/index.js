import { create } from "zustand";

export const useMacbookStore = create((set) =>({
    color: '#68bbfb',
    setColor: (color) => set({color}),

    scale: 0.08,
    setScale: (scale) =>set({scale}),

    reset: () => set({color: '#68bbfb', scale: 0.08}),
}))

