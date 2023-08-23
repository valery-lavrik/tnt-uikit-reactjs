import React from 'react';
import './index.scss';

interface Props {
    label: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
    readOnly?: boolean;
}

const Switcher = ({ label, checked, onChange, style = {}, readOnly = false }: Props) => {
    return (
        <div className="switcher" style={style}>
            <span className="switcher__label">{label}:</span>
            <div className="switcher__input">
                <input readOnly={readOnly} type="checkbox" checked={checked} onChange={onChange} />
            </div>
        </div>
    );
};

export default Switcher;
