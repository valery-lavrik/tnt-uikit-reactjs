import React, { useState } from 'react';
import { HideIcon, ShowIcon } from '../../icons';

import './index.scss';

interface Props {
    label: string;
    id: string;
    name?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    invalid?: boolean | string;
    type?: 'text' | 'password';
    style?: React.CSSProperties;
    readOnly?: boolean;
}

const Input = ({ label, id, name, value, onChange, invalid = false, type = 'text', style = {}, readOnly = false }: Props) => {
    const [showPassword, setShowPassword] = useState(false);

    const onClick = () => setShowPassword((prev) => !prev);

    return (
        <div className="input__container">
            <div className="input">
                <input
                    className={`input__element ${invalid ? 'input__invalid' : ''}`}
                    value={value}
                    onChange={onChange}
                    id={id}
                    name={name}
                    type={!showPassword ? type : 'text'}
                    style={style}
                    placeholder=" "
                    readOnly={readOnly}
                />
                <label className="input__label">{label}</label>
                {type === 'password' &&
                    (showPassword ? <ShowIcon className="input__svg" onClick={onClick} /> : <HideIcon className="input__svg" onClick={onClick} />)}
            </div>
            {invalid && typeof invalid === 'string' && (
                <div className="input__invalid__message">
                    <p>{invalid}</p>
                </div>
            )}
        </div>
    );
};

export default Input;
