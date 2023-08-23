import React from 'react';
import './index.scss';

import { Oif } from '../../icons';

const ServicesCard = () => {
    return (
        <div className="services-card">
            <div className="services-card__icon">
                <Oif />
            </div>
            <h6 className="services-card__name">ОИФ</h6>
        </div>
    );
};

export default ServicesCard;
