import './Dashboard.scss';
import DashboardContentArea from './components/dashboardContentArea/ContentArea';
import { SideBar } from './components/sidebar/SideBar';
import { WalletProvider } from './context/WalletContext';

const Dashboard = () => {
    return (
        <WalletProvider>
            <div className="Dashboard">
                <div style={{ backgroundColor: 'red', minHeight: '4rem' }}>
                    Header
                </div>
                <div className="Dashboard__content">
                    <SideBar />
                    <DashboardContentArea />
                </div>
            </div>
        </WalletProvider>
    );
};

export { Dashboard };
