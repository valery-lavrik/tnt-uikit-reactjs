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
                d="M5.42969 20C5.19239 20 5 19.775 5 19.5C5 19.225 5.19239 19 5.42969 19H18.3203C18.5566 19 18.75 19.225 18.75 19.5C18.75 19.775 18.5566 20 18.3203 20H5.42969ZM8.00781 16C7.29587 16 6.71875 15.3281 6.71875 14.5V5.5C6.71875 4.67156 7.29587 4 8.00781 4H9.72656C10.4382 4 11.0156 4.67156 11.0156 5.5V14.5C11.0156 15.3281 10.4382 16 9.72656 16H8.00781ZM10.1562 14.5V5.5C10.1562 5.22375 9.96289 5 9.72656 5H8.00781C7.77148 5 7.57812 5.22375 7.57812 5.5V14.5C7.57812 14.775 7.77148 15 8.00781 15H9.72656C9.96289 15 10.1562 14.775 10.1562 14.5ZM14.0234 16C13.3118 16 12.7344 15.3281 12.7344 14.5V9.5C12.7344 8.67188 13.3118 8 14.0234 8H15.7422C16.4539 8 17.0312 8.67188 17.0312 9.5V14.5C17.0312 15.3281 16.4539 16 15.7422 16H14.0234ZM16.1719 14.5V9.5C16.1719 9.225 15.9785 9 15.7422 9H14.0234C13.7871 9 13.5938 9.225 13.5938 9.5V14.5C13.5938 14.775 13.7871 15 14.0234 15H15.7422C15.9785 15 16.1719 14.775 16.1719 14.5Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.21875 5.5C6.21875 4.46921 6.95131 3.5 8.00781 3.5H9.72656C10.7827 3.5 11.5156 4.46913 11.5156 5.5V14.5C11.5156 15.5305 10.7828 16.5 9.72656 16.5H8.00781C6.95125 16.5 6.21875 15.5304 6.21875 14.5V5.5ZM9.65625 5.5H8.07812V14.5H9.65625V5.5ZM12.2344 9.5C12.2344 8.46952 12.9672 7.5 14.0234 7.5H15.7422C16.7984 7.5 17.5312 8.46952 17.5312 9.5V14.5C17.5312 15.5305 16.7984 16.5 15.7422 16.5H14.0234C12.9672 16.5 12.2344 15.5305 12.2344 14.5V9.5ZM15.6719 9.5H14.0938V14.5H15.6719V9.5ZM4.5 19.5C4.5 19.0234 4.84717 18.5 5.42969 18.5H18.3203C18.9012 18.5 19.25 19.0226 19.25 19.5C19.25 19.9774 18.9012 20.5 18.3203 20.5H5.42969C4.84717 20.5 4.5 19.9766 4.5 19.5Z"
                fill="currentColor"
            />
        </svg>
    );
}
