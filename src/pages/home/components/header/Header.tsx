import CryptoPriceSlider from './components/cryptoPriceSlider/CryptoPriceSlider';
import LogoArea from './components/logoArea/LogoArea';
import { SignUpAndSignInArea } from './components/signUpAndSignInArea/SignUpAndSignInArea';

import './header.scss';

const Header = () => {
    return (
        <div className="Header">
            <LogoArea />
            <CryptoPriceSlider />
            <SignUpAndSignInArea />
        </div>
    );
};

export { Header };
