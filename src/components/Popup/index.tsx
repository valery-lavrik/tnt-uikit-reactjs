import React from 'react';
import './index.scss';

interface Props {
    children: React.ReactNode;
    text: string;
    subtext?: string;
}

const Popup = ({ children, text, subtext }: Props) => {
    return (
        <div className="popup">
            {children}
            <div className="popup__message">
                <span>{text}</span>
                {subtext && <small>{subtext}</small>}
            </div>
        </div>
    );
};

export default Popup;
