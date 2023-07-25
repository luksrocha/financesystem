import { createContext, useMemo, useState, useEffect } from 'react';
import { getCoinsApiAssets, getCryptoImages } from '../api/coinsApi';
import { CoinsApiAssetsType } from '../types/coinsApiAssetsType';
import { getTopCryptoCurrencies } from '../utils/cryptoUtils';

interface CryptoContextType {
    cryptos: CoinsApiAssetsType[];
    isLoading: boolean;
}

export const CryptoContext = createContext({} as CryptoContextType);

interface CryptoProviderProps {
    children: React.ReactNode;
}

export const CryptoProvider = ({ children }: CryptoProviderProps) => {
    const [cryptos, setCryptos] = useState<CoinsApiAssetsType[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchCoinsApiAssets = async () => {
        setIsLoading((prev) => !prev);
        const api = await getCoinsApiAssets();
        const apiImages = await getCryptoImages();
        const topCryptos = getTopCryptoCurrencies(api);
        const topCryptosWithImage = topCryptos.map((crypto) => {
            const cryptoImage = apiImages.find(
                (image) => image.asset_id === crypto.asset_id
            );
            return {
                ...crypto,
                image: cryptoImage?.url,
            };
        });
        setCryptos(topCryptosWithImage);
        setIsLoading((prev) => !prev);
    };

    useEffect(() => {
        fetchCoinsApiAssets();
    }, []);

    const value = useMemo(() => ({ cryptos, isLoading }), [cryptos, isLoading]);

    return (
        <CryptoContext.Provider value={value}>
            {children}
        </CryptoContext.Provider>
    );
};
