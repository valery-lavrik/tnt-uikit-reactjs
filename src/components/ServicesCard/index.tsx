import React from 'react';
import './index.scss';

import { OifIcon } from '../../icons';

const ServicesCard = () => {
    return (
        <div className="services-card">
            <div className="services-card__icon">
                <OifIcon />
            </div>
            <h6 className="services-card__name">ОИФ</h6>
        </div>
    );
};

export default ServicesCard;
