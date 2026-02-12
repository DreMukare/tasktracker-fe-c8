// 1. Import the necessary functions from zustand
import { create } from 'zustand';

// 2. Define your store state
const initState = {
	theme: 'light',
	pStyling: 'leading-7 [&:not(:first-child)]:mt-6',
	h4Styling: 'scroll-m-20 text-xl font-semibold tracking-tight',
	h3Styling: 'scroll-m-20 text-2xl font-semibold tracking-tight',
	h2Styling: 'scroll-m-20 text-3xl font-semibold tracking-tight',
	h1Styling: 'scroll-m-20 text-4xl font-semibold tracking-tight',
};

// 3. Create and define the zustand store
const useTheme = create((set) => ({
	...initState,
	setTheme: (themeValue) => set({ theme: themeValue }),
}));

// 4. Export your store so you can access it in other files
export default useTheme;
