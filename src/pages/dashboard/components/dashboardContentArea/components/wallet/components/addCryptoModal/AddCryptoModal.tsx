import { useState } from 'react';
import { SingleValue } from 'react-select';

import SelectCrypto from '../selectCrypto/SelectCrypto';
import { Modal } from '../../../../../../../../components/modal/Modal';
import { CoinsApiAssetsType } from '../../../../../../../../types/coinsApiAssetsType';
import { useWalletContext } from '../../../../../../hooks/useWalletContext';

import './addCryptoModal.scss';

interface AddCryptoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddCryptoModal = ({ isOpen, onClose }: AddCryptoModalProps) => {
    const [amount, setAmount] = useState<number | undefined>(undefined);
    const [crypto, setCrypto] = useState('');
    const { handleWallet } = useWalletContext();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setAmount(!newValue ? undefined : parseFloat(newValue));
    };

    const handleSubmit = () => {
        if (!amount || !crypto) return;

        handleWallet({ amount, cryptoId: crypto });
        onClose();
        setAmount(undefined);
        setCrypto('');
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="AddCryptoModal">
                <SelectCrypto
                    onChange={(newValue: SingleValue<CoinsApiAssetsType>) =>
                        setCrypto(newValue?.asset_id || '')
                    }
                />
                <input
                    placeholder="0,00"
                    value={amount}
                    onChange={handleInputChange}
                    className="AddCryptoModal__input"
                    type="number"
                    style={{ width: '100%' }}
                />
                <button
                    disabled={!amount || !crypto}
                    onClick={handleSubmit}
                    className="AddCryptoModal__button"
                >
                    Add Crypto
                </button>
            </div>
        </Modal>
    );
};

export default AddCryptoModal;
