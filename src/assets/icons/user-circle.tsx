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
                d="M12 4C7.58172 4 4 7.58172 4 12C4 14.3894 5.04749 16.5341 6.70831 18C8.11792 16.7561 9.97121 16 12 16C14.0288 16 15.882 16.7562 17.2916 18C18.9525 16.5341 20 14.3894 20 12C20 7.58172 16.4183 4 12 4ZM15.5572 19.1676C14.5615 18.4331 13.3317 18 12 18C10.6683 18 9.43843 18.4331 8.44267 19.1675C9.51419 19.7004 10.7221 20 12 20C13.2779 20 14.4858 19.7004 15.5572 19.1676ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9ZM8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11Z"
                fill="currentColor"
            />
        </svg>
    );
}
