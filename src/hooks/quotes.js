import { useQuery } from '@tanstack/react-query';
import useQuoteStore from '../stores/quote';
import { useEffect } from 'react';

const useQuotes = () => {
	const { setQuoteOfTheDay } = useQuoteStore.getState();

	const { isPending, error, data } = useQuery({
		queryKey: ['quote'],
		queryFn: () => {
			return fetch('/api/today').then((res) => res.json());
		},
	});

	useEffect(() => {
		if (data?.[0]?.q) {
			setQuoteOfTheDay(data[0]);
		}
	}, [data, setQuoteOfTheDay]);

	return { isPending, error, data };
};

export default useQuotes;
