import './bannerArea.scss';
import waves from '../../../../assets/img/waves.svg';
import banner1 from '../../../../assets/img/banner1.svg';
import banner2 from '../../../../assets/img/banner2.svg';
import banner3 from '../../../../assets/img/banner3.svg';
import { Pills } from '../../../../components/pills/Pills';
import { useEffect, useRef } from 'react';

const BannerArea = () => {
    const bannerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const { current } = bannerRef;

        const handleMouseWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (current) {
                current.scrollBy({ left: e.deltaY, behavior: 'smooth' });
            }
        };

        current?.addEventListener('wheel', (e) => handleMouseWheel(e));

        return () => {
            current?.removeEventListener('wheel', (e) => handleMouseWheel(e));
        };
    });

    return (
        <div className="BannerArea">
            <div className="BannerArea__content">
                <div className="BannerArea__content--text">
                    <h1>Lorem ipsum dolor sit amet, consectetur</h1>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor
                    </span>
                    <button>SIGN UP NOW </button>
                    <div className="BannerArea__content--pills">
                        <Pills>Cryptos</Pills>
                        <Pills>NFTs</Pills>
                        <Pills>Games</Pills>
                    </div>
                </div>
                <div ref={bannerRef} className="BannerArea__content--banner">
                    <img src={banner1} alt="waves" />
                    <img src={banner2} alt="waves" />
                    <img src={banner3} alt="waves" />
                </div>
            </div>
            <img src={waves} alt="waves" />
        </div>
    );
};

export { BannerArea };
