import './pills.scss';

interface PillsProps {
    children: React.ReactNode;
}

const Pills = ({ children }: PillsProps) => {
    return <div className="Pills">{children}</div>;
};

export { Pills };
