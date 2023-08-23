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
                opacity="0.4"
                d="M12.6592 3.71091V12.1889C12.6592 12.5811 12.3409 12.8994 11.9487 12.8994C11.5565 12.8994 11.2382 12.5811 11.2382 12.1889V3.71091C11.2382 3.3187 11.5565 3.00038 11.9487 3.00038C12.3409 3.00038 12.6592 3.3187 12.6592 3.71091Z"
                fill="#37383C"
            />
            <mask id="mask0_1_10200" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="6" y="11" width="12" height="10">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.50024 11.4786H17.3966V20.418H6.50024V11.4786Z" fill="white" />
            </mask>
            <g mask="url(#mask0_1_10200)">
                <path
                    d="M17.3969 12.1891C17.3969 12.3217 17.36 12.4525 17.288 12.5681L12.5502 20.0864C12.4195 20.2929 12.193 20.4189 11.9486 20.4189C11.7042 20.4189 11.4778 20.2929 11.347 20.0864L6.60924 12.5681C6.47187 12.3492 6.46335 12.0726 6.58935 11.8462C6.7144 11.6188 6.95219 11.4786 7.21082 11.4786H16.6864C16.945 11.4786 17.1828 11.6188 17.3079 11.8462C17.3676 11.9532 17.3969 12.0716 17.3969 12.1891Z"
                    fill="#37383C"
                />
            </g>
        </svg>
    );
}
