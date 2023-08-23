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
                d="M7.16168 3H16.8388C17.3659 2.99998 17.8206 2.99997 18.1951 3.03057C18.5904 3.06288 18.9835 3.13422 19.3618 3.32698C19.9259 3.61439 20.3854 4.07316 20.6732 4.63805C20.8661 5.01654 20.9373 5.40986 20.9696 5.80515C21 6.17906 21 6.63297 21 7.15895V13.8412C21 14.2154 21 14.5531 20.9891 14.8515C20.9963 14.9 21 14.9495 21 15L21 15.4329C21 15.6848 21.0001 15.9303 20.9831 16.1381C20.9645 16.3666 20.9205 16.6365 20.7821 16.908C20.5901 17.2848 20.2837 17.5905 19.9079 17.782C19.6365 17.9203 19.3669 17.9644 19.1383 17.983C18.9301 18.0001 18.6843 18 18.4319 18L16.9044 18C16.8825 18 16.8605 18 16.8384 18H7.16205C7.1399 18 7.11789 18 7.096 18L5.56837 18C5.3159 18 5.07002 18.0001 4.86177 17.983C4.6332 17.9644 4.36338 17.9203 4.09191 17.782C3.71544 17.5902 3.40966 17.2842 3.21799 16.908C3.07969 16.6366 3.03563 16.3668 3.01695 16.1382C2.99994 15.9301 2.99997 15.6843 3 15.4319L3.00001 15C3.00001 14.9494 3.00376 14.8997 3.011 14.8512C2.99998 14.5522 2.99999 14.2137 3 13.8386V7.16147C2.99999 6.63432 2.99997 6.17956 3.03057 5.80499C3.06288 5.40965 3.13419 5.01643 3.32699 4.63805C3.61447 4.07382 4.07307 3.61473 4.63781 3.32698C5.01625 3.13416 5.40962 3.06286 5.80499 3.03057C6.17965 2.99997 6.63451 2.99998 7.16168 3ZM18.9999 14H5.00008C5.00002 13.9362 5.00001 13.8696 5.00001 13.8V7.20001C5.00001 6.62346 5.00078 6.25119 5.02393 5.96786C5.04613 5.6962 5.08381 5.59548 5.109 5.54603C5.205 5.35761 5.35789 5.20474 5.54579 5.109C5.59518 5.08383 5.69595 5.04614 5.9678 5.02393C6.25126 5.00078 6.62366 5 7.2002 5H16.8002C17.3768 5 17.7489 5.00078 18.0321 5.02393C18.3036 5.04612 18.4043 5.08377 18.4538 5.109C18.6424 5.20508 18.7956 5.35828 18.8912 5.54603C18.9164 5.59537 18.954 5.69598 18.9762 5.9677C18.9993 6.2511 19 6.62336 19 7.20001V13.8C19 13.8696 19 13.9362 18.9999 14ZM8.00001 20C8.00001 19.4477 8.44772 19 9.00001 19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9.00001C8.44772 21 8.00001 20.5523 8.00001 20Z"
                fill="currentColor"
            />
        </svg>
    );
}
