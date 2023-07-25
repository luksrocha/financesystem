import { useWalletContext } from './useWalletContext';

const useWalletData = () => {
    const { wallet } = useWalletContext();

    const isWalletEmpty = Object.keys(wallet).length === 0;

    const getWalletBalance = () => {
        if (isWalletEmpty) {
            return 0;
        }

        const walletSum = Object.values(wallet)
            .flat(1)
            .reduce((acc, curr) => {
                return acc + curr.amount;
            }, 0);

        return walletSum;
    };

    const walletArray = Object.values(wallet).flat(1);

    return { isWalletEmpty, getWalletBalance, walletArray };
};

export { useWalletData };
