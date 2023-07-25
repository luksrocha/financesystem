import { useState } from 'react';
import { useCryptoContext } from '../../../../hooks/useCryptoContext';
import './topCryptos.scss';
import { convertToUSDCurrency } from '../../../../utils/currencyUtils';

const TopCryptos = () => {
    const { cryptos } = useCryptoContext();

    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll((prevShowAll) => !prevShowAll);
    };

    const visibleData = showAll ? cryptos : cryptos.slice(0, 5);

    return (
        <div className="TopCryptos">
            <h2 className="TopCryptos__header">Top Cryptos</h2>
            <table className="TopCryptos__table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Crypto</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Trade</th>
                    </tr>
                </thead>
                <tbody>
                    {visibleData.map((crypto, index) => (
                        <tr
                            key={crypto.asset_id}
                            className={index % 2 === 0 ? 'even' : 'odd'}
                        >
                            <td>{index + 1}</td>
                            <td>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 10,
                                    }}
                                >
                                    {crypto?.image && (
                                        <img
                                            src={crypto?.image}
                                            alt={crypto.asset_id}
                                        />
                                    )}
                                    {crypto.name}
                                </div>
                            </td>
                            <td>{convertToUSDCurrency(crypto.price_usd)}</td>
                            <td>-</td>
                            <td>
                                <button className="TopCryptos__buyButton">
                                    Buy
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="TopCryptos__viewMore" onClick={toggleShowAll}>
                {showAll ? 'View less -' : 'View more +'}
            </button>
        </div>
    );
};

export { TopCryptos };
