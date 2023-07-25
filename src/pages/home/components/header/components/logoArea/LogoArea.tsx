import Logo from '../../../../../../assets/img/logo.svg';

import './logoArea.scss';

const LogoArea = () => {
    return (
        <div className="LogoArea">
            <img src={Logo} alt="logo" />
            <span>About us</span>
            <span>Top Cryptos</span>
        </div>
    );
};

export default LogoArea;
