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
                d="M18.3203 4C18.5566 4 18.75 4.22387 18.75 4.5C18.75 4.77625 18.5566 5 18.3203 5H5.42969C5.19239 5 5 4.77625 5 4.5C5 4.22387 5.19239 4 5.42969 4H18.3203ZM9.72656 8C10.4382 8 11.0156 8.67188 11.0156 9.5V18.5C11.0156 19.3281 10.4382 20 9.72656 20H8.00781C7.29587 20 6.71875 19.3281 6.71875 18.5V9.5C6.71875 8.67188 7.29587 8 8.00781 8H9.72656ZM9.72656 9H8.00781C7.77148 9 7.57812 9.225 7.57812 9.5V18.5C7.57812 18.775 7.77148 19 8.00781 19H9.72656C9.96289 19 10.1562 18.775 10.1562 18.5V9.5C10.1562 9.225 9.96289 9 9.72656 9ZM15.7422 8C16.4539 8 17.0312 8.67188 17.0312 9.5V14.5C17.0312 15.3281 16.4539 16 15.7422 16H14.0234C13.3118 16 12.7344 15.3281 12.7344 14.5V9.5C12.7344 8.67188 13.3118 8 14.0234 8H15.7422ZM15.7422 9H14.0234C13.7871 9 13.5938 9.225 13.5938 9.5V14.5C13.5938 14.775 13.7871 15 14.0234 15H15.7422C15.9785 15 16.1719 14.775 16.1719 14.5V9.5C16.1719 9.225 15.9785 9 15.7422 9Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.5 4.5C4.5 4.02152 4.84783 3.5 5.42969 3.5H18.3203C18.9005 3.5 19.25 4.02074 19.25 4.5C19.25 4.97947 18.9005 5.5 18.3203 5.5H5.42969C4.84791 5.5 4.5 4.97869 4.5 4.5ZM6.21875 9.5C6.21875 8.46959 6.95125 7.5 8.00781 7.5H9.72656C10.7828 7.5 11.5156 8.46952 11.5156 9.5V18.5C11.5156 19.5305 10.7828 20.5 9.72656 20.5H8.00781C6.95125 20.5 6.21875 19.5304 6.21875 18.5V9.5ZM12.2344 9.5C12.2344 8.46952 12.9672 7.5 14.0234 7.5H15.7422C16.7984 7.5 17.5312 8.46952 17.5312 9.5V14.5C17.5312 15.5305 16.7984 16.5 15.7422 16.5H14.0234C12.9672 16.5 12.2344 15.5305 12.2344 14.5V9.5ZM9.65625 9.5H8.07812V18.5H9.65625V9.5ZM15.6719 9.5H14.0938V14.5H15.6719V9.5Z"
                fill="currentColor"
            />
        </svg>
    );
}
