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
                d="M4 6.42857C4 5.91574 4.39797 5.5 4.88889 5.5H13.7778C17.2142 5.5 20 8.41015 20 12C20 15.5899 17.2142 18.5 13.7778 18.5H4.88889C4.39797 18.5 4 18.0843 4 17.5714C4 17.0586 4.39797 16.6429 4.88889 16.6429H13.7778C16.2324 16.6429 18.2222 14.5642 18.2222 12C18.2222 9.43582 16.2324 7.35714 13.7778 7.35714H4.88889C4.39797 7.35714 4 6.94141 4 6.42857ZM10.2222 10.6071C10.2222 10.0943 10.6202 9.67857 11.1111 9.67857H13.7778C14.2687 9.67857 14.6667 10.0943 14.6667 10.6071V13.3929C14.6667 13.9057 14.2687 14.3214 13.7778 14.3214H11.1111C10.6202 14.3214 10.2222 13.9057 10.2222 13.3929V12.9286H4.88889C4.39797 12.9286 4 12.5128 4 12C4 11.4872 4.39797 11.0714 4.88889 11.0714H10.2222V10.6071ZM12 12.4643V11.5357H12.8889V12.4643H12Z"
                fill="currentColor"
            />
        </svg>
    );
}
