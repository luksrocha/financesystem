import classNames from 'classnames';
import walletImg from '../../../../../../assets/img/wallet.svg';
import { convertToUSDCurrency } from '../../../../../../utils/currencyUtils';
import { useWalletContext } from '../../../../hooks/useWalletContext';
import { useWalletData } from '../../../../hooks/useWalletData';
import AddCryptoModal from './components/addCryptoModal/AddCryptoModal';
import CryptoTable from './components/cryptoTable/CryptoTable';
import { EmptyWallet } from './components/emptyWallet/EmptyWallet';

import './wallet.scss';

const Wallet = () => {
    const { canOpenAddWallet, setCanOpenAddWallet } = useWalletContext();
    const { isWalletEmpty, getWalletBalance, walletArray } = useWalletData();
    console.log(walletArray);

    return (
        <div className="Wallet">
            <AddCryptoModal
                isOpen={canOpenAddWallet}
                onClose={() => setCanOpenAddWallet(false)}
            />
            <div className="Wallet__header">
                <div className="Wallet__header--text">
                    <img src={walletImg} alt="wallet" />
                    <h3>My Wallet</h3>-
                    {!isWalletEmpty && (
                        <h3>{convertToUSDCurrency(getWalletBalance())}</h3>
                    )}
                </div>
                <button
                    onClick={() => setCanOpenAddWallet(true)}
                    className="Wallet__header--button"
                >
                    + Add Crypto
                </button>
            </div>
            <div
                className={classNames('Wallet__content', {
                    empty: isWalletEmpty,
                })}
            >
                {isWalletEmpty && <EmptyWallet />}
                {!isWalletEmpty && <CryptoTable />}
            </div>
        </div>
    );
};

export { Wallet };
