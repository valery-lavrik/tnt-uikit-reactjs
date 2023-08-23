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
            <g clipPath="url(#clip0_88_192)">
                <path
                    d="M17.9062 5.8125C17.7658 5.8125 17.6282 5.82397 17.4939 5.84608C17.1569 4.84377 16.2082 4.11955 15.0938 4.11955C14.8667 4.11955 14.6466 4.14963 14.437 4.20593C13.9898 3.4827 13.1918 3 12.2812 3C11.3707 3 10.5691 3.4848 10.1227 4.21078C9.91523 4.15488 9.69727 4.125 9.47227 4.125C8.07656 4.125 6.93785 5.26055 6.93785 6.65625V10.9313C6.75363 10.8961 6.5652 10.875 6.37535 10.875C6.37526 10.875 6.37544 10.875 6.37535 10.875C4.84324 10.875 3.5625 12.1125 3.5625 13.691C3.5625 14.4043 3.82821 15.0804 4.31695 15.6053L7.1734 18.6723C8.55117 20.1527 10.5023 21 12.5238 21H13.6868C17.4105 21 20.4375 17.973 20.4375 14.25V8.34375C20.4375 6.94805 19.302 5.8125 17.9062 5.8125ZM18.75 14.25C18.75 17.0418 16.4793 19.3125 13.7191 19.3125H12.5238C10.9625 19.3125 9.47121 18.6635 8.40703 17.5209L5.60297 14.5105C5.38493 14.2764 5.27229 13.9691 5.27229 13.6984C5.27229 12.9193 5.92373 12.5945 6.37444 12.5945C6.67537 12.5945 6.97561 12.7146 7.1978 12.9524L8.13717 13.961C8.19609 13.9934 8.26992 14.018 8.34023 14.018C8.48459 14.018 8.62373 13.9065 8.62373 13.7362V6.65625C8.62373 6.19043 9.00166 5.8125 9.43584 5.8125C9.90166 5.8125 10.248 6.19043 10.248 6.65625V12C10.3125 12.3094 10.5656 12.5625 10.875 12.5625C11.1844 12.5625 11.4059 12.3107 11.4059 12.0316L11.4375 5.53125C11.4375 5.06543 11.8154 4.6875 12.2496 4.6875C12.7154 4.6875 13.0617 5.06543 13.0617 5.53125V12C13.125 12.3094 13.3781 12.5625 13.6875 12.5625C13.9969 12.5625 14.2496 12.3106 14.2496 12.0316L14.2499 6.68086C14.2499 6.21504 14.6278 5.83711 15.062 5.83711C15.5278 5.83711 15.8741 6.21504 15.8741 6.68086V12.0316C15.9375 12.3094 16.1906 12.5625 16.5 12.5625C16.8094 12.5625 17.0309 12.3107 17.0309 12.0316V8.34375C17.0309 7.87793 17.4088 7.5 17.843 7.5C18.3088 7.5 18.6551 7.87793 18.6551 8.34375V14.25H18.75Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_88_192">
                    <rect width="18" height="18" fill="white" transform="translate(3 3)" />
                </clipPath>
            </defs>
        </svg>
    );
}
