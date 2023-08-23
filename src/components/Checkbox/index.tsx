import React from 'react';
import './index.scss';

interface Props {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    id?: string;
    style?: React.CSSProperties;
    readOnly?: boolean;
}

const Checkbox = ({ checked, onChange, label, id, style = {}, readOnly = false }: Props) => {
    return (
        <label className="sidebar-checkbox" style={style}>
            <input id={id} checked={checked} onChange={onChange} type="checkbox" readOnly={readOnly} />
            {label && <span>{label}</span>}
        </label>
    );
};

export default Checkbox;
