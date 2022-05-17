import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
	const [debounceValue, setDebounceVale] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounceVale(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debounceValue;
};

export default useDebounce;
