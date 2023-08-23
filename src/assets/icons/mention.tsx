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
                d="M9.34155 4.45454C10.9561 3.88573 12.7106 3.84985 14.3471 4.3521C15.9835 4.85433 17.416 5.86822 18.4336 7.24489C19.4511 8.62155 20 10.2882 20 12V13C20 14.6568 18.6569 16 17 16C16.0831 16 15.2622 15.5886 14.7119 14.9403C13.9991 15.5981 13.0465 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79085 9.79086 7.99999 12 7.99999C12.7654 7.99999 13.4807 8.21499 14.0886 8.5879C14.2456 8.24118 14.5946 7.99999 15 7.99999C15.5523 7.99999 16 8.4477 16 8.99999V13C16 13.5523 16.4477 14 17 14C17.5523 14 18 13.5523 18 13V12C18 10.7161 17.5883 9.46607 16.8252 8.43367C16.0621 7.40127 14.9877 6.64079 13.7603 6.26408C12.5329 5.88739 11.217 5.9143 10.0061 6.3409C8.79523 6.76749 7.75315 7.57128 7.03291 8.63413C6.31271 9.69691 5.95249 10.9627 6.00503 12.2455C6.05757 13.5283 6.5202 14.7605 7.32492 15.7608C8.12963 16.7612 9.23416 17.477 10.4759 17.8032C11.7177 18.1293 13.0311 18.0485 14.2235 17.5727C14.7365 17.368 15.3182 17.618 15.5229 18.1309C15.7276 18.6439 15.4777 19.2256 14.9647 19.4303C13.3748 20.0647 11.6236 20.1724 9.96788 19.7376C8.31225 19.3027 6.83956 18.3483 5.76656 17.0144C4.69359 15.6806 4.07676 14.0377 4.00671 12.3274C3.93665 10.617 4.41692 8.92931 5.37725 7.51217C6.33753 6.0951 7.72696 5.02336 9.34155 4.45454ZM14 12C14 10.8954 13.1046 9.99999 12 9.99999C10.8954 9.99999 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12Z"
                fill="currentColor"
            />
        </svg>
    );
}
