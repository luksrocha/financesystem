import { convertToUSDCurrency } from '../../../../../../../../utils/currencyUtils';
import { useWalletData } from '../../../../../../hooks/useWalletData';
import './cryptoTable.scss';

const CryptoTable = () => {
    const { walletArray } = useWalletData();

    return (
        <table className="crypto-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Crypto</th>
                    <th>Holdings</th>
                    <th>Change</th>
                    <th>Trade</th>
                </tr>
            </thead>
            <tbody>
                {walletArray.map((item, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 16,
                                }}
                            >
                                <img src={item.image} alt={item.name} />
                                {item.name}
                            </div>
                        </td>
                        <td>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                {convertToUSDCurrency(item.amount)}
                                <span style={{ color: '#FBAB34' }}>
                                    {(item.amount / item.value).toFixed(2)}{' '}
                                    {item.name}
                                </span>
                            </div>
                        </td>
                        <td>+5.3%</td>
                        <td>Buy</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CryptoTable;
