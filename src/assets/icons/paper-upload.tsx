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
                d="M18.8088 9.021C18.3573 9.021 17.7592 9.011 17.0146 9.011C15.1987 9.011 13.7055 7.508 13.7055 5.675V2.459C13.7055 2.206 13.5026 2 13.253 2H7.96363C5.49517 2 3.5 4.026 3.5 6.509V17.284C3.5 19.889 5.59022 22 8.16958 22H16.0453C18.5058 22 20.5 19.987 20.5 17.502V9.471C20.5 9.217 20.298 9.012 20.0465 9.013C19.6247 9.016 19.1168 9.021 18.8088 9.021Z"
                fill="#37383C"
            />
            <path
                opacity="0.4"
                d="M16.0842 2.56729C15.7852 2.25629 15.2632 2.47029 15.2632 2.90129V5.53829C15.2632 6.64429 16.1742 7.55429 17.2792 7.55429C17.9772 7.56229 18.9452 7.56429 19.7672 7.56229C20.1882 7.56129 20.4022 7.05829 20.1102 6.75429C19.0552 5.65729 17.1662 3.69129 16.0842 2.56729Z"
                fill="#37383C"
            />
            <path
                d="M15.1052 12.8837C14.8142 13.1727 14.3432 13.1747 14.0512 12.8817L12.4622 11.2847V16.1117C12.4622 16.5227 12.1282 16.8567 11.7172 16.8567C11.3062 16.8567 10.9732 16.5227 10.9732 16.1117V11.2847L9.38223 12.8817C9.09223 13.1747 8.62023 13.1727 8.32923 12.8837C8.03823 12.5947 8.03723 12.1227 8.32723 11.8307L11.1892 8.95569C11.1902 8.95469 11.1902 8.95469 11.1902 8.95469C11.2582 8.88669 11.3402 8.83169 11.4302 8.79469C11.5202 8.75669 11.6182 8.73669 11.7172 8.73669C11.8172 8.73669 11.9152 8.75669 12.0052 8.79469C12.0942 8.83169 12.1752 8.88669 12.2432 8.95369C12.2442 8.95469 12.2452 8.95469 12.2452 8.95569L15.1072 11.8307C15.3972 12.1227 15.3972 12.5947 15.1052 12.8837Z"
                fill="#37383C"
            />
        </svg>
    );
}
