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
                d="M2.49287 6.13813C2.79825 5.95844 3.17591 5.95377 3.48564 6.12584L11 10.3005V7C11 6.64568 11.1875 6.31781 11.4929 6.13813C11.7983 5.95844 12.1759 5.95377 12.4856 6.12584L21.4856 11.1258C21.8031 11.3022 22 11.6368 22 12C22 12.3632 21.8031 12.6978 21.4856 12.8742L12.4856 17.8742C12.1759 18.0462 11.7983 18.0416 11.4929 17.8619C11.1875 17.6822 11 17.3543 11 17V13.6995L3.48564 17.8742C3.17591 18.0462 2.79825 18.0416 2.49287 17.8619C2.18749 17.6822 2 17.3543 2 17V7C2 6.64568 2.18749 6.31781 2.49287 6.13813ZM9.94087 12L4 8.69951V15.3005L9.94087 12ZM13 15.3005L18.9409 12L13 8.69951V15.3005Z"
                fill="currentColor"
            />
        </svg>
    );
}
