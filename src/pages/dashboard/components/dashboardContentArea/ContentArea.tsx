import { Wallet } from './components/wallet/Wallet';
import './contentArea.scss';

const DashboardContentArea = () => {
    return (
        <div className="ContentArea">
            <Wallet />
        </div>
    );
};

export default DashboardContentArea;
