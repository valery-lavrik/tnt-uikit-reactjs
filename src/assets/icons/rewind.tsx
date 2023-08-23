import React from 'react';
export default function Icon({
    className = '',
    style = {},
    onClick,
}: {
    className?: string;
    style?: React.CSSProperties;
    onClick?: (...args: any) => void;
}) {
    return (
        <svg
            onClick={onClick}
            className={className}
            style={style}
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5071 6.13813C12.8125 6.31781 13 6.64568 13 7V10.3005L20.5144 6.12584C20.8241 5.95377 21.2017 5.95844 21.5071 6.13813C21.8125 6.31781 22 6.64568 22 7V17C22 17.3543 21.8125 17.6822 21.5071 17.8619C21.2017 18.0416 20.8241 18.0462 20.5144 17.8742L13 13.6995V17C13 17.3543 12.8125 17.6822 12.5071 17.8619C12.2017 18.0416 11.8241 18.0462 11.5144 17.8742L2.51436 12.8742C2.19689 12.6978 2 12.3632 2 12C2 11.6368 2.19689 11.3022 2.51436 11.1258L11.5144 6.12584C11.8241 5.95377 12.2017 5.95844 12.5071 6.13813ZM11 8.69951L5.05913 12L11 15.3005V8.69951ZM14.0591 12L20 15.3005V8.69951L14.0591 12Z"
                fill="currentColor"
            />
        </svg>
    );
}
