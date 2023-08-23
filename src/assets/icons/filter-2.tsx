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
                d="M14.5715 13.5941L20.4266 7.72014C20.7929 7.35183 21 6.84877 21 6.32376V4.60099C21 3.52002 20.1423 3 19.0844 3H4.91556C3.85765 3 3 3.52002 3 4.60099V6.3547C3 6.85177 3.18462 7.33087 3.51772 7.69419L8.89711 13.5632C8.9987 13.674 9.14034 13.7368 9.28979 13.7378L14.1915 13.7518C14.3332 13.7528 14.4699 13.6969 14.5715 13.5941Z"
                fill="#37383C"
            />
            <path
                opacity="0.4"
                d="M9.05627 13.6857V20.2903C9.05627 20.5309 9.1774 20.7575 9.3757 20.8872C9.48901 20.9621 9.6199 21 9.7508 21C9.84946 21 9.94812 20.979 10.0399 20.9371L14.0059 19.0886C14.254 18.9738 14.4132 18.7213 14.4132 18.4428V13.6857H9.05627Z"
                fill="#37383C"
            />
        </svg>
    );
}
