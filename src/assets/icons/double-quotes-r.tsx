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
                d="M6.56822 6C6.57884 6 6.58947 6.00001 6.6001 6.00001H8.4001C8.41075 6.00001 8.42139 6 8.43201 6C8.68438 5.99997 8.93014 5.99994 9.13826 6.01695C9.36688 6.03564 9.63652 6.07972 9.90789 6.21799C10.2838 6.40953 10.5902 6.7153 10.7821 7.09204C10.9205 7.36356 10.9645 7.63338 10.9831 7.86192C11.0001 8.06972 11 8.31512 11 8.56704C11 8.57801 11 8.58899 11 8.59998L11 14C11 16.2091 9.20914 18 7.00001 18C6.44772 18 6.00001 17.5523 6.00001 17C6.00001 16.4477 6.44772 16 7.00001 16C8.10457 16 9.00001 15.1046 9.00001 14L9.00001 13L6.6001 13C6.58952 13 6.57894 13 6.56837 13C6.31591 13 6.07002 13.0001 5.86177 12.9831C5.6332 12.9644 5.36338 12.9203 5.09191 12.782C4.71544 12.5902 4.40966 12.2842 4.21799 11.908C4.07969 11.6366 4.03562 11.3668 4.01695 11.1382C3.99994 10.9301 3.99997 10.6843 4 10.4319C4 10.4213 4.00001 10.4106 4.00001 10.4V8.59998C4.00001 8.58934 4 8.5787 4 8.56808C3.99997 8.3157 3.99994 8.06992 4.01695 7.86176C4.03563 7.63317 4.0797 7.36345 4.21799 7.09203L5.109 7.54603M4.21799 7.09203C4.40961 6.71597 4.71533 6.40987 5.09191 6.21799C5.3634 6.07966 5.63323 6.03562 5.86179 6.01695C6.06999 5.99994 6.31582 5.99997 6.56822 6M9.00001 11V8.59998C9.00001 8.30335 8.99925 8.14112 8.98974 8.02448C8.98937 8.0199 8.98899 8.01556 8.98862 8.01146C8.98444 8.01107 8.98002 8.01069 8.97535 8.01031C8.85883 8.00078 8.69664 8.00001 8.4001 8.00001H6.6001C6.30359 8.00001 6.14126 8.00078 6.02461 8.01031C6.01998 8.01069 6.01559 8.01107 6.01145 8.01145C6.01107 8.0156 6.01069 8.01999 6.01031 8.02464C6.00078 8.14121 6.00001 8.30345 6.00001 8.59998V10.4C6.00001 10.6965 6.00078 10.8588 6.01031 10.9754C6.01069 10.98 6.01107 10.9844 6.01145 10.9885C6.0156 10.9889 6.01999 10.9893 6.02463 10.9897C6.14127 10.9992 6.3036 11 6.6001 11L9.00001 11ZM15.5682 6H17.432C17.6844 5.99997 17.9301 5.99994 18.1383 6.01695C18.3669 6.03564 18.6365 6.07972 18.9079 6.21799C19.2838 6.40953 19.5902 6.7153 19.7821 7.09204C19.9205 7.36356 19.9645 7.63338 19.9831 7.86192C20.0001 8.06972 20 8.31512 20 8.56704L20 14C20 16.2091 18.2091 18 16 18C15.4477 18 15 17.5523 15 17C15 16.4477 15.4477 16 16 16C17.1046 16 18 15.1046 18 14V13L15.5684 13C15.3159 13 15.07 13.0001 14.8618 12.9831C14.6332 12.9644 14.3634 12.9203 14.0919 12.782C13.7154 12.5902 13.4097 12.2842 13.218 11.908C13.0797 11.6366 13.0356 11.3668 13.0169 11.1382C12.9999 10.9301 13 10.6843 13 10.4319C13 10.4213 13 10.4106 13 10.4V8.59998C13 8.58934 13 8.57871 13 8.56808C13 8.3157 12.9999 8.06992 13.017 7.86176C13.0356 7.63317 13.0797 7.36345 13.218 7.09203C13.4096 6.71597 13.7153 6.40987 14.0919 6.21799C14.3634 6.07966 14.6332 6.03562 14.8618 6.01695C15.07 5.99994 15.3158 5.99997 15.5682 6ZM18 11V8.59998C18 8.30335 17.9993 8.14112 17.9897 8.02448C17.9894 8.0199 17.989 8.01556 17.9886 8.01146C17.9844 8.01107 17.98 8.01069 17.9753 8.01031C17.8588 8.00078 17.6966 8.00001 17.4001 8.00001H15.6001C15.3036 8.00001 15.1413 8.00078 15.0246 8.01031C15.02 8.01069 15.0156 8.01107 15.0115 8.01145C15.0111 8.0156 15.0107 8.01999 15.0103 8.02464C15.0008 8.14121 15 8.30345 15 8.59998V10.4C15 10.6965 15.0008 10.8588 15.0103 10.9754C15.0107 10.98 15.0111 10.9844 15.0115 10.9885C15.0156 10.9889 15.02 10.9893 15.0246 10.9897C15.1413 10.9992 15.3036 11 15.6001 11L18 11Z"
                fill="currentColor"
            />
        </svg>
    );
}
