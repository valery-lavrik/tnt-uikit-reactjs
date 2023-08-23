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
                d="M18.8089 9.021C18.3574 9.021 17.7594 9.011 17.0149 9.011C15.199 9.011 13.7059 7.508 13.7059 5.675V2.459C13.7059 2.206 13.503 2 13.2525 2H7.96337C5.49604 2 3.5 4.026 3.5 6.509V17.284C3.5 19.889 5.59109 22 8.1703 22H16.0455C18.5059 22 20.5 19.987 20.5 17.502V9.471C20.5 9.217 20.298 9.012 20.0465 9.013C19.6238 9.016 19.1168 9.021 18.8089 9.021Z"
                fill="#37383C"
            />
            <path
                opacity="0.4"
                d="M16.0839 2.56729C15.7859 2.25629 15.2629 2.47029 15.2629 2.90129V5.53829C15.2629 6.64429 16.1739 7.55429 17.2799 7.55429C17.9769 7.56229 18.9449 7.56429 19.7679 7.56229C20.1879 7.56129 20.4019 7.05829 20.1099 6.75429C19.0549 5.65729 17.1659 3.69129 16.0839 2.56729Z"
                fill="#37383C"
            />
            <path
                d="M14.3671 14.5693H9.42408C9.01308 14.5693 8.67908 14.2363 8.67908 13.8253C8.67908 13.4143 9.01308 13.0803 9.42408 13.0803H14.3671C14.7781 13.0803 15.1121 13.4143 15.1121 13.8253C15.1121 14.2363 14.7781 14.5693 14.3671 14.5693Z"
                fill="#37383C"
            />
        </svg>
    );
}
