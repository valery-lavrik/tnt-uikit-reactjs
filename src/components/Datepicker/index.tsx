import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";

interface Props {
    label: string;
    selected: Date | null;
    onChange: (date: Date | null) => void;
    minDate?: Date | null | undefined;
    maxDate?: Date | null | undefined;
    id?: string;
    name?: string;
    style?: React.CSSProperties;
    className?: string;
    readOnly?: boolean;
    dateFormat?: string,
}

const DatepickerComp = ({
    label,
    id,
    name,
    selected,
    onChange,
    minDate,
    maxDate,
    style = {},
    className = "",
    readOnly = false,
    dateFormat = 'dd.MM.yyyy',
}: Props) => {
    return (
        <div className="datepicker" style={style}>
            <DatePicker
                readOnly={readOnly}
                className={`datepicker__element ${className}`}
                selected={selected}
                onChange={(date: Date | null) => onChange(date)}
                name={name}
                id={id}
                minDate={minDate}
                maxDate={maxDate}
                dateFormat={dateFormat}
            />
            <label className="datepicker__label">{label}</label>
        </div>
    );
};

export default DatepickerComp;
