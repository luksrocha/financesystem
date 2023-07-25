import { BannerArea } from './components/bannerArea/BannerArea';
import { Header } from './components/header/Header';
import { NewsLetter } from './components/newsLetter/NewsLetter';
import { ServicesArea } from './components/servicesArea/ServicesArea';
import { SignInModal } from './components/signInModal/SignInModal';
import { TopCryptos } from './components/topCryptos/TopCryptos';
import { SignModalProvider } from './context/signModalContext';

import './home.scss';

const Home = () => {
    return (
        <SignModalProvider>
            <main className="Home">
                <Header />
                <BannerArea />
                <ServicesArea />
                <TopCryptos />
                <NewsLetter />
                <SignInModal />
            </main>
        </SignModalProvider>
    );
};

export { Home };
