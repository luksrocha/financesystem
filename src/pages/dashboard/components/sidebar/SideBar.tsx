import { useState } from 'react';
import classNames from 'classnames';

import './sidebar.scss';
import { sideBarOptionsContants } from './constants/sideBarOptionsConstants';

const SideBar = () => {
    const [isOpened, setIsOpened] = useState(false);

    const handleClick = () => {
        setIsOpened((prev) => !prev);
    };

    const handleIconClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const sideBarClasses = classNames('SideBar', {
        'SideBar--opened': isOpened,
        'SideBar--closed': !isOpened,
    });

    return (
        <div className={sideBarClasses} onClick={handleClick}>
            {sideBarOptionsContants.map((option) => (
                <div
                    onClick={handleIconClick}
                    className="SideBar__option"
                    key={option.name}
                >
                    <img src={option.icon} alt={option.name} />
                    {isOpened && <span>{option.name}</span>}
                </div>
            ))}
        </div>
    );
};

export { SideBar };
