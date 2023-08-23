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
                d="M8 3C8.55228 3 9 3.44772 9 4V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V4C7 3.44772 7.44772 3 8 3ZM17.6568 6.34316C16.4852 5.17156 14.5858 5.17154 13.4143 6.34309L12.0001 7.75731C11.6096 8.14783 10.9764 8.14783 10.5859 7.75731C10.1953 7.36678 10.1953 6.73362 10.5859 6.34309L12.0001 4.92888C13.9527 2.97624 17.1184 2.97634 19.071 4.92894C21.0235 6.88143 21.0241 10.0472 19.0714 11.9999C19.0714 11.9999 19.0714 11.9999 19.0714 11.9999L17.6573 13.4141C17.2668 13.8047 16.6337 13.8047 16.2431 13.4142C15.8526 13.0237 15.8525 12.3905 16.243 12L17.6571 10.5858C18.8286 9.41432 18.8285 7.51485 17.6568 6.34316ZM4 7L6 7C6.55228 7 7 7.44772 7 8C7 8.55229 6.55228 9 6 9L4 9C3.44772 9 3 8.55229 3 8C3 7.44772 3.44771 7 4 7ZM7.75804 10.5859C8.14856 10.9764 8.14856 11.6096 7.75804 12.0001L6.34383 13.4143C5.17215 14.586 5.17205 16.4854 6.34352 17.6569C7.51505 18.8284 9.41474 18.8285 10.5863 17.6571C10.5863 17.6571 10.5864 17.657 10.5863 17.6571L11.9999 16.2429C12.3904 15.8523 13.0235 15.8521 13.4141 16.2426C13.8047 16.633 13.8049 17.2662 13.4144 17.6568L12.0008 19.071C10.0482 21.0236 6.88193 21.0237 4.92931 19.0711C2.97659 17.1184 2.97709 13.9526 4.92961 12.0001L6.34383 10.5859C6.73435 10.1953 7.36752 10.1953 7.75804 10.5859ZM17 16C17 15.4477 17.4477 15 18 15H20C20.5523 15 21 15.4477 21 16C21 16.5523 20.5523 17 20 17H18C17.4477 17 17 16.5523 17 16ZM16 17C16.5523 17 17 17.4477 17 18V20C17 20.5523 16.5523 21 16 21C15.4477 21 15 20.5523 15 20V18C15 17.4477 15.4477 17 16 17Z"
                fill="currentColor"
            />
        </svg>
    );
}
