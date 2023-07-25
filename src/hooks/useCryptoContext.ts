import { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';

export const useCryptoContext = () => {
    const context = useContext(CryptoContext);
    if (!context)
        throw new Error(
            'Use Sign Modal Context can only be used wrapped in a provider'
        );

    const { cryptos, isLoading } = context;

    return { cryptos, isLoading };
};
