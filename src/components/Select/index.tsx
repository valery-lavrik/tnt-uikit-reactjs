import React, { useEffect, useState } from 'react';
import { StrokeIcon } from '../../icons';

import './index.scss';

interface Props {
    options: {
        label: string;
        value: string;
    }[];
    label: string;
    id: string;
    name?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    invalid?: boolean;
    style?: React.CSSProperties;
}

const Select = ({ options, label, id, name, value, defaultValue, onChange, invalid = false, style = {} }: Props) => {
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        if (value || defaultValue) setIsEmpty(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e);
        if (!!e.target.value) setIsEmpty(false);
        else setIsEmpty(true);
    };

    return (
        <div className="select">
            <select
                defaultValue={defaultValue}
                value={value}
                className={`select__element ${invalid ? 'select__invalid' : ''}`}
                onChange={handleChange}
                id={id}
                name={name}
                style={style}
            >
                <option value=""></option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <label className={`select__label ${isEmpty ? 'select__label--placeholder' : ''}`} htmlFor={id}>
                {label}
            </label>
            <StrokeIcon className="select__svg" />
        </div>
    );
};

export default Select;
