import React, { useEffect, useState } from "react";
import { CaretDownMdIcon } from "../../icons";

import "./index.scss";

interface Props {
    options: {
        label: string;
        value: string | number;
    }[];
    label: string;
    id: string;
    name?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    invalid?: boolean | string;
    style?: React.CSSProperties;
    readOnly?: boolean;
}

const Select = ({
    options,
    label,
    id,
    name,
    value,
    defaultValue,
    onChange,
    invalid = false,
    style = {},
    readOnly = false,
}: Props) => {
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
        <div className="select__container">
            <div className="select">
                <select
                    defaultValue={defaultValue}
                    value={value}
                    className={`select__element ${
                        invalid ? "select__invalid" : ""
                    }`}
                    onChange={handleChange}
                    id={id}
                    name={name}
                    style={style}
                    disabled={readOnly}
                >
                    <option value=""></option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <label
                    className={`select__label ${
                        isEmpty ? "select__label--placeholder" : ""
                    }`}
                    htmlFor={id}
                >
                    {label}
                </label>
                <CaretDownMdIcon className="select__svg" />
            </div>
            {invalid && typeof invalid === "string" && (
                <div className="select__invalid__message">
                    <p>{invalid}</p>
                </div>
            )}
        </div>
    );
};

export default Select;
