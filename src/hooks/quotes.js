import useQuoteStore from '../stores/quote';

const useQuotes = () => {
	const { setQuoteOfTheDay } = useQuoteStore.getState();

	const fetchQuotes = async () => {
		let quote;

		try {
			const res = await fetch('/api/today');
			quote = await res.json();

			if (quote[0].q) {
				setQuoteOfTheDay(quote[0]);
			} else {
				throw new Error('Something went wrong fetching quote of the day');
			}
		} catch (error) {
			console.error('Failed to fetch quote of the day: ', error);
		}

		return quote;
	};

	return fetchQuotes();
};

export default useQuotes;
