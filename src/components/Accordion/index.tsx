import React, { useState } from 'react';
import { CaretSmallIcon } from '../../icons';

import './index.scss';

interface Props {
    children: React.ReactNode;
    title: string | React.ReactNode;
}

const Accordion = ({ children, title }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="accordion">
            <div onClick={() => setOpen((prev) => !prev)} className="accordion__head">
                <div className="accordion__title">{title}</div>
                <div className={`accordion__icon ${open ? 'accordion__icon--open' : ''}`}>
                    <CaretSmallIcon />
                </div>
            </div>
            <div className={`accordion__content ${open ? 'accordion__content--open' : ''}`}>{children}</div>
        </div>
    );
};

export default Accordion;
