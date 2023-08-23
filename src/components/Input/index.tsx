import React, { useState } from 'react';
import { House01Icon } from '../../icons';

import './index.scss';

interface Props {
    label: string;
    id: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    invalid?: boolean;
    type?: 'text' | 'password';
    style?: React.CSSProperties;
    readOnly?: boolean;
}

const Input = ({ label, id, name, value, onChange, invalid = false, type = 'text', style = {}, readOnly = false }: Props) => {
    const [showPassword, setShowPassword] = useState(false);

    const onClick = () => setShowPassword((prev) => !prev);

    return (
        <div className="input">
            {type === 'password' ? (
                <input
                    className={`input__element ${invalid ? 'input__invalid' : ''}`}
                    value={value}
                    onChange={onChange}
                    id={id}
                    name={name}
                    type={showPassword ? 'text' : 'password'}
                    style={style}
                    placeholder=" "
                    readOnly={readOnly}
                />
            ) : (
                <input
                    className={`input__element ${invalid ? 'input__invalid' : ''}`}
                    value={value}
                    onChange={onChange}
                    id={id}
                    name={name}
                    type="text"
                    style={style}
                    placeholder=" "
                    readOnly={readOnly}
                />
            )}
            <label className="input__label">{label}</label>
            {type === 'password' &&
                (showPassword ? <House01Icon className="input__svg" onClick={onClick} /> : <House01Icon className="input__svg" onClick={onClick} />)}
        </div>
    );
};

export default Input;
