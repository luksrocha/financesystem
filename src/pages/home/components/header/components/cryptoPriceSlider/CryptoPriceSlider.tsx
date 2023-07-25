import { useEffect, useState } from 'react';
import { useCryptoContext } from '../../../../../../hooks/useCryptoContext';

import './CryptoPriceSlider.scss';
import { convertToBRLCurrency } from '../../../../../../utils/currencyUtils';

const CryptoPriceSlider = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const { cryptos, isLoading } = useCryptoContext();

    const updateScroll = () => {
        setScrollPosition((prevPosition) =>
            prevPosition === 1400 ? 0 : prevPosition + 1
        );
    };

    useEffect(() => {
        if (isLoading) return;
        const scrollInterval = setInterval(updateScroll, 50);

        return () => clearInterval(scrollInterval);
    }, [isLoading]);

    return (
        <div className="CryptoPriceSlider">
            <div
                className="CryptoPriceSlider__slider"
                style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
                {cryptos?.map((crypto, index) => (
                    <div
                        key={index}
                        className="CryptoPriceSlider__slider--item"
                    >
                        <span className="CryptoPriceSlider__slider--name">
                            {crypto.asset_id}
                        </span>
                        <span className="CryptoPriceSlider__slider--price">
                            {convertToBRLCurrency(crypto?.price_brl)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CryptoPriceSlider;
