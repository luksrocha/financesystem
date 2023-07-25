import { ServiceAreaCard } from './components/serviceAreaCard/ServiceAreaCard';
import './servicesArea.scss';
import {
    serviceConstantsFirstRow,
    serviceConstantsSecondRow,
} from './constants/serviceAreaConstants';

const ServicesArea = () => {
    return (
        <div className="ServicesArea">
            <div className="ServicesArea__cards">
                <div className="ServicesArea__cards--firstRow">
                    {serviceConstantsFirstRow.map((service) => (
                        <ServiceAreaCard
                            image={service.image}
                            subTitle={service.subTitle}
                            title={service.title}
                            text={service.text}
                        />
                    ))}
                </div>
                <div className="ServicesArea__cards--secondRow">
                    {serviceConstantsSecondRow.map((service) => (
                        <ServiceAreaCard
                            image={service.image}
                            subTitle={service.subTitle}
                            title={service.title}
                            text={service.text}
                        />
                    ))}
                </div>
            </div>
            <div className="ServicesArea__textArea">
                <h3>Lorem Ipsum</h3>
                <h2>Lorem Ipsum</h2>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor
                </span>
                <button>Sign up now</button>
            </div>
        </div>
    );
};

export { ServicesArea };
