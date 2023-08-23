import React from 'react';
import { SvgPropsType } from '../../Types';
export default function Icon({ className = '', style = {}, onClick }: SvgPropsType) {
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
            <g clipPath="url(#clip0_93_95)">
                <path
                    d="M15.75 2C17.1289 2 18.25 3.11914 18.25 4.5V7C18.25 8.37891 17.1289 9.5 15.75 9.5H4.5C3.11914 9.5 2 8.37891 2 7V4.5C2 3.11914 3.11914 2 4.5 2H15.75ZM15.75 3.875H4.5C4.15469 3.875 3.875 4.15469 3.875 4.5V7C3.875 7.34375 4.15469 7.625 4.5 7.625H15.75C16.0938 7.625 16.375 7.34375 16.375 7V4.5C16.375 4.15469 16.0938 3.875 15.75 3.875ZM8.25 15.75C8.25 15.0586 8.80859 14.5 9.5 14.5H9.8125V13.875C9.8125 12.3203 11.0703 11.0625 12.625 11.0625H18.5625C19.4258 11.0625 20.125 10.3633 20.125 9.5V7.625C20.125 7.21875 19.8633 6.87109 19.5 6.74219V4.82969C20.9062 4.98516 22 6.17578 22 7.625V9.5C22 11.3984 20.4609 12.9375 18.5625 12.9375H12.625C12.1055 12.9375 11.6875 13.3555 11.6875 13.875V14.5H12C12.6914 14.5 13.25 15.0586 13.25 15.75V20.75C13.25 21.4414 12.6914 22 12 22H9.5C8.80859 22 8.25 21.4414 8.25 20.75V15.75Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_93_95">
                    <rect width="20" height="20" fill="white" transform="translate(2 2)" />
                </clipPath>
            </defs>
        </svg>
    );
}
