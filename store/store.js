import { create } from 'zustand';

export const initializeStore = create((set) => ({
	info: {},
	updateInfo: (data) => set((state) => ({ info: { ...state.info, ...data } })),
	reset: () => set((state) => state)
}));
