import './serviceAreaCard.scss';

interface ServiceAreaCardProps {
    image: string;
    title: string;
    subTitle: string;
    text: string;
}

const ServiceAreaCard = ({
    image,
    subTitle,
    text,
    title,
}: ServiceAreaCardProps) => {
    return (
        <div className="ServiceAreaCard">
            <img src={image} alt="services" />
            <h5>{title}</h5>
            <h4>{subTitle}</h4>
            <span>{text}</span>
        </div>
    );
};

export { ServiceAreaCard };
