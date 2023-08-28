//import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";

interface Props {
    label: string;
    value: string | number | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    min?: string | number | undefined;
    max?: string | number | undefined;
    id?: string;
    name?: string;
    style?: React.CSSProperties;
    className?: string;
    readOnly?: boolean;
    showTimeSelect?: boolean;
    required?: boolean;
}

const DatepickerComp = ({
    label,
    id,
    name,
    value,
    onChange,
    min,
    max,
    style = {},
    className = "",
    readOnly = false,
    showTimeSelect = false,
    required = false,
}: Props) => {
    return (
        <div className="datepicker" style={style}>
            <input
                type={showTimeSelect ? "datetime-local" : "date"}
                readOnly={readOnly}
                className={`datepicker__element ${className}`}
                value={value}
                onChange={(e) => onChange(e)}
                name={name}
                id={id}
                min={min}
                max={max}
                required={required}
            />
            <label className="datepicker__label">{label}</label>
        </div>
    );
};

export default DatepickerComp;
