import { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';

export const useSearch = (query, limit = 10) => {
    const [state, setState] = useState({
        articles: [],
        status: 'IDLE',
        error: '',
    });

    const cancelToken = useRef(null);

    useEffect(() => {
        if (query.length < 3) {
            return;
        }

        if (cancelToken.current) {
            console.log('cancel --- 1');
            cancelToken.current.cancel();
        }

        cancelToken.current = axios.CancelToken.source();

        axios
            .get(
                `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}&limit=${limit}`,
                { cancelToken: cancelToken.current.token }
            )
            .then((res) => {
                const parseResponse = [];
                for (let i = 0; i < res.data[1].length; i++) {
                    parseResponse.push({
                        id: res.data[3][i],
                        label: res.data[1][i],
                    });
                }
                setState({
                    articles: parseResponse,
                    status: 'SUCCESS',
                    error: '',
                });
            })
            .catch((error) => {
                if (axios.isCancel(error)) {
                    return;
                }

                setState({
                    articles: [],
                    status: 'ERROR',
                    error: error,
                });
            });
    }, [query, limit]);

    return state;
};

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value, 500);
        }, delay);
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
};

export const useSearchForm = () => {
    const [searchValue, setSearchValue] = useState('');

    const onSearchChange = useCallback(
        (e) => setSearchValue(e.target.value),
        []
    );

    return {
        searchValue,
        onSearchChange,
    };
};
