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
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.7071 7.29289C17.0019 7.58765 17.0829 8.03432 16.9104 8.4138L14.4104 13.9138C14.3103 14.1339 14.1339 14.3103 13.9138 14.4104L8.4138 16.9104C8.03432 17.0829 7.58765 17.0019 7.29289 16.7071C6.99814 16.4124 6.91714 15.9657 7.08963 15.5862L9.58963 10.0862C9.68968 9.86609 9.86609 9.68968 10.0862 9.58963L15.5862 7.08963C15.9657 6.91714 16.4124 6.99814 16.7071 7.29289ZM11.2552 11.2552L10.0138 13.9862L12.7448 12.7448L13.9862 10.0138L11.2552 11.2552Z"
                fill="currentColor"
            />
        </svg>
    );
}