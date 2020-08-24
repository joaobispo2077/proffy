import {useState, useEffect, Dispatch, SetStateAction} from 'react';

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
    const [state, setState] = useState(getInitalTheme(key, initialState));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state])

    return [state, setState];
    }

function getInitalTheme(key: string, initialState: any) {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
        return JSON.parse(storageValue);
    } else {
        return initialState;
    }
}

export default usePersistedState; 