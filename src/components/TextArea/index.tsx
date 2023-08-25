import { useState } from "react";
import "./index.scss";

interface Props {
    label: string;
    id?: string;
    name?: string;
    value?: string | number;
    rows?: number;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    style?: React.CSSProperties;
    readOnly?: boolean;
}

const TextArea = ({
    label,
    id,
    name,
    value,
    rows = 5,
    onChange,
    style = {},
    readOnly = false,
}: Props) => {
    return (
        <div className="text-area">
            <textarea
                placeholder=" "
                className="text-area__element"
                id={id}
                value={value}
                onChange={onChange}
                maxLength={500}
                rows={rows}
                name={name}
                style={style}
                readOnly={readOnly}
            />
            <label className="text-area__label">{label}</label>
        </div>
    );
};

export default TextArea;
