// 1. Import the necessary functions from zustand
import { create } from 'zustand';

// 2. Define your store state
const initState = {
	theme: 'light',
};

// 3. Create and define the zustand store
const useTheme = create((set) => ({
	...initState,
	setTheme: (themeValue) => set({ theme: themeValue }),
}));

// 4. Export your store so you can access it in other files
export default useTheme;
