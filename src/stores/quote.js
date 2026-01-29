import { create } from 'zustand';

const initState = {
	quotes: [],
	quoteOfTheDay: [],
};

const useQuoteStore = create((set) => ({
	...initState,
	setQuotes: (newQuotes) =>
		set((state) => ({
			quotes: [newQuotes, ...state.quotes],
		})),
	setQuoteOfTheDay: (newQuote) =>
		set({
			quoteOfTheDay: [newQuote],
		}),
}));

export default useQuoteStore;
