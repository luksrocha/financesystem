import emptyWallet from '../../../../../../../../assets/img/empty-wallet.svg';

import './emptyWallet.scss';

const EmptyWallet = () => {
    return (
        <div className="EmptyWallet">
            <img src={emptyWallet} alt="empty wallet" />
            <h3>Nothing here yet...</h3>
            <span>Add a crypto and start earning</span>
        </div>
    );
};

export { EmptyWallet };
