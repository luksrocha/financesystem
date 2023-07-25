import { useContext } from 'react';
import { WalletContext } from '../context/WalletContext';

export const useWalletContext = () => {
    const context = useContext(WalletContext);
    if (!context)
        throw new Error(
            'Use Sign Modal Context can only be used wrapped in a provider'
        );

    const { wallet, handleWallet, canOpenAddWallet, setCanOpenAddWallet } =
        context;

    return { wallet, handleWallet, canOpenAddWallet, setCanOpenAddWallet };
};
