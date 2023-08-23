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
                d="M13.741 3.61165C13.0356 1.46277 9.96438 1.46279 9.25902 3.61166L7.86664 7.85348H3.36082C1.07821 7.85348 0.129153 10.7448 1.97582 12.0729L5.6211 14.6944L4.22873 18.9363C3.52336 21.0851 6.00805 22.872 7.85472 21.544L11.5 18.9224L15.1453 21.544C16.992 22.8721 19.4766 21.0851 18.7713 18.9363L17.3789 14.6944L21.0242 12.0728C22.8709 10.7448 21.9218 7.85348 19.6392 7.85348L15.1334 7.85348L13.741 3.61165Z"
                fill="#22242A"
            />
        </svg>
    );
}
