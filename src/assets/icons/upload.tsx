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
                d="M6.447 22C3.996 22 2 19.9698 2 17.4755V12.5144C2 10.0252 3.99 8 6.437 8L17.553 8C20.005 8 22 10.0302 22 12.5256V17.4846C22 19.9748 20.01 22 17.563 22H16.623H6.447Z"
                fill="#37383C"
            />
            <path
                d="M11.4548 2.22109L8.5458 5.06688C8.2458 5.361 8.2458 5.83433 8.5478 6.12748C8.8498 6.41965 9.3368 6.41868 9.6368 6.12553L11.2298 4.56629V6.06125V14.4516C11.2298 14.8655 11.5748 15.2015 11.9998 15.2015C12.4258 15.2015 12.7698 14.8655 12.7698 14.4516V4.56629L14.3628 6.12553C14.6628 6.41868 15.1498 6.41965 15.4518 6.12748C15.6028 5.98042 15.6788 5.78856 15.6788 5.59572C15.6788 5.40483 15.6028 5.21297 15.4538 5.06688L12.5458 2.22109C12.4008 2.07987 12.2048 2.00001 11.9998 2.00001C11.7958 2.00001 11.5998 2.07987 11.4548 2.22109Z"
                fill="#37383C"
            />
        </svg>
    );
}
