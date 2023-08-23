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
                d="M3.71089 11.3408H12.1889C12.5811 11.3408 12.8994 11.6591 12.8994 12.0513C12.8994 12.4435 12.5811 12.7618 12.1889 12.7618H3.71089C3.31868 12.7618 3.00037 12.4435 3.00037 12.0513C3.00037 11.6591 3.31868 11.3408 3.71089 11.3408Z"
                fill="#37383C"
            />
            <mask id="mask0_1_10225" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="11" y="6" width="10" height="12">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.4786 17.4998V6.60336H20.418V17.4998H11.4786Z" fill="white" />
            </mask>
            <g mask="url(#mask0_1_10225)">
                <path
                    d="M12.1891 6.60307C12.3217 6.60307 12.4525 6.64002 12.5681 6.71202L20.0864 11.4498C20.2929 11.5805 20.4189 11.807 20.4189 12.0514C20.4189 12.2958 20.2929 12.5222 20.0864 12.653L12.5681 17.3908C12.3492 17.5281 12.0726 17.5367 11.8462 17.4107C11.6188 17.2856 11.4786 17.0478 11.4786 16.7892V7.3136C11.4786 7.05497 11.6188 6.81718 11.8462 6.69213C11.9532 6.63244 12.0716 6.60307 12.1891 6.60307Z"
                    fill="#37383C"
                />
            </g>
        </svg>
    );
}
