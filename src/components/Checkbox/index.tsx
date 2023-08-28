import React from 'react';
import './index.scss';

interface Props {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    id?: string;
    style?: React.CSSProperties;
    invalid?: boolean | string;
    readOnly?: boolean;
}

const Checkbox = ({ checked, onChange, label, id, style = {}, invalid = false, readOnly = false }: Props) => {
    return (
        <div className="checkbox__container">
            <label className="checkbox" style={style}>
                <input className="checkbox__element" id={id} checked={checked} onChange={onChange} type="checkbox" readOnly={readOnly} />
                {label && <span>{label}</span>}
            </label>
            {invalid && typeof invalid === 'string' && (
                <div className="checkbox__invalid__message">
                    <p>{invalid}</p>
                </div>
            )}
        </div>
    );
};

export default Checkbox;
