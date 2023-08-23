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
                d="M8 1C8.55229 1 9 1.44772 9 2V3H15V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V3.00003C17.4591 3.00031 17.8593 3.00313 18.1951 3.03057C18.5904 3.06288 18.9835 3.13421 19.3618 3.32698C19.9259 3.61439 20.3854 4.07315 20.6732 4.63805C20.8661 5.01653 20.9373 5.40983 20.9696 5.80511C21 6.17899 21 6.63286 21 7.1588V16.841C21 17.367 21 17.8209 20.9696 18.1949C20.9373 18.5902 20.8661 18.9835 20.6732 19.362C20.3854 19.927 19.9257 20.3856 19.3618 20.673C18.9835 20.8657 18.5904 20.9371 18.1951 20.9694C17.8205 21 17.3657 21 16.8384 21H7.16209C6.63473 21 6.17973 21 5.80496 20.9694C5.40959 20.9371 5.01623 20.8658 4.63781 20.673C4.07317 20.3853 3.61453 19.9264 3.32698 19.362C3.13418 18.9836 3.06287 18.5904 3.03057 18.195C2.99997 17.8204 2.99998 17.3656 3 16.8385V7.1614C2.99998 6.63426 2.99997 6.17951 3.03057 5.80495C3.06287 5.40961 3.13419 5.01642 3.32698 4.63805C3.61447 4.07382 4.07306 3.61473 4.63781 3.32698C5.01625 3.13416 5.40962 3.06286 5.80499 3.03057C6.14079 3.00314 6.54102 3.00031 7 3.00003V2C7 1.44772 7.44772 1 8 1ZM7.2002 5C6.62365 5 6.25126 5.00078 5.9678 5.02393C5.69595 5.04613 5.59517 5.08383 5.54579 5.10899C5.35789 5.20474 5.205 5.35761 5.109 5.54603C5.0838 5.59549 5.04612 5.6962 5.02393 5.96783C5.00357 6.21696 5.00051 6.53487 5.00007 7H18.9999C18.9995 6.53479 18.9965 6.21687 18.9762 5.96767C18.954 5.69598 18.9164 5.59537 18.8912 5.54603C18.7956 5.35828 18.6424 5.20508 18.4538 5.10899C18.4043 5.08377 18.3036 5.04611 18.0321 5.02393C17.7489 5.00078 17.3768 5 16.8002 5H7.2002ZM19 9H5V16.8C5 17.3765 5.00078 17.7488 5.02393 18.0322C5.04613 18.3039 5.08381 18.4046 5.109 18.454C5.20495 18.6424 5.35778 18.7952 5.54579 18.891C5.59519 18.9161 5.69598 18.9538 5.96782 18.9761C6.25127 18.9992 6.62367 19 7.2002 19H16.8002C17.3767 19 17.7489 18.9992 18.0321 18.9761C18.3036 18.9539 18.4043 18.9162 18.4538 18.891C18.6425 18.7948 18.7956 18.6417 18.8912 18.454C18.9164 18.4047 18.954 18.3041 18.9762 18.0323C18.9993 17.7489 19 17.3766 19 16.8V9Z"
                fill="currentColor"
            />
        </svg>
    );
}
