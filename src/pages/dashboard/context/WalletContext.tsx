import { createContext, useMemo, useState, useCallback } from 'react';
import { WalletType } from '../../../types/waleltType';
import { useCryptoContext } from '../../../hooks/useCryptoContext';

interface WalletContextType {
    wallet: WalletType;
    handleWallet: ({ amount, cryptoId }: HandleWalletProps) => void;
    canOpenAddWallet: boolean;
    setCanOpenAddWallet: React.Dispatch<React.SetStateAction<boolean>>;
}

interface HandleWalletProps {
    cryptoId: string;
    amount: number;
}

export const WalletContext = createContext({} as WalletContextType);

interface WalletProviderProps {
    children: React.ReactNode;
}

export const WalletProvider = ({ children }: WalletProviderProps) => {
    const [wallet, setWallet] = useState<WalletType>({});
    const [canOpenAddWallet, setCanOpenAddWallet] = useState(false);
    const { cryptos } = useCryptoContext();

    const handleWallet = useCallback(
        ({ cryptoId, amount }: HandleWalletProps) => {
            setWallet((prev) => {
                const key = prev[cryptoId];

                if (key?.name) {
                    return {
                        ...prev,
                        [cryptoId]: {
                            ...key,
                            amount: key ? key.amount + amount : amount,
                        },
                    };
                }

                const selectedCrypto = cryptos.find(
                    (crypto) => crypto.asset_id === cryptoId
                );

                return {
                    ...prev,
                    [cryptoId]: {
                        name: cryptoId,
                        amount,
                        image: selectedCrypto?.image || '',
                        value: selectedCrypto?.price_usd || 0,
                    },
                };
            });
        },
        [cryptos]
    );

    const value = useMemo(
        () => ({ wallet, handleWallet, canOpenAddWallet, setCanOpenAddWallet }),
        [canOpenAddWallet, handleWallet, wallet]
    );

    return (
        <WalletContext.Provider value={value}>
            {children}
        </WalletContext.Provider>
    );
};
