import "./index.scss";

interface Props {
    label: string;
    id?: string;
    name?: string;
    value?: string | number;
    rows?: number;
    invalid?: boolean | string;
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
    invalid = false,
    onChange,
    style = {},
    readOnly = false,
}: Props) => {
    return (
        <div className="text-area__container">
            <div className="text-area">
                <textarea
                    placeholder=" "
                    className={`text-area__element ${
                        invalid ? "text-area__invalid" : ""
                    }`}
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
            {invalid && typeof invalid === "string" && (
                <div className="text-area__invalid__message">
                    <p>{invalid}</p>
                </div>
            )}
        </div>
    );
};

export default TextArea;
