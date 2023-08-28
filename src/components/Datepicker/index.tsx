//import "react-datepicker/dist/react-datepicker.css";
import './index.scss';

interface Props {
    label: string;
    value: string | number | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    invalid?: boolean | string;
    min?: string | number | undefined;
    max?: string | number | undefined;
    id?: string;
    name?: string;
    style?: React.CSSProperties;
    className?: string;
    readOnly?: boolean;
    showTimeSelect?: boolean;
}

const DatepickerComp = ({
    label,
    id,
    name,
    value,
    onChange,
    invalid = false,
    min,
    max,
    style = {},
    className = '',
    readOnly = false,
    showTimeSelect = false,
}: Props) => {
    return (
        <div className="datepicker__container">
            <div className="datepicker" style={style}>
                <input
                    type={showTimeSelect ? 'datetime-local' : 'date'}
                    readOnly={readOnly}
                    className={`datepicker__element ${invalid ? 'datepicker__invalid' : ''}`}
                    value={value}
                    onChange={(e) => onChange(e)}
                    name={name}
                    id={id}
                    min={min}
                    max={max}
                />
                <label className="datepicker__label">{label}</label>
            </div>
            {invalid && typeof invalid === 'string' && (
                <div className="input__invalid__message">
                    <p>{invalid}</p>
                </div>
            )}
        </div>
    );
};

export default DatepickerComp;
