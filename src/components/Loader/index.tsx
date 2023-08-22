import React from 'react';
import './index.scss';

interface Props {
    label?: string;
}

export default function FullScrenLoad({ label }: Props) {
    return (
        <div className="loader">
            <Loader label={label} />
        </div>
    );
}

export function Loader({ label }: Props) {
    return (
        <div className="loader__container">
            <span className="loader__icon"></span>
            {label && <label className="loader__label">{label}</label>}
        </div>
    );
}
