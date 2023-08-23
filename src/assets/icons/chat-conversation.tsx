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
                d="M2 5C2 3.89543 2.89543 3 4 3H15C16.1046 3 17 3.89543 17 5V7H20C21.1046 7 22 7.89543 22 9V20C22 20.3877 21.7759 20.7405 21.4249 20.9053C21.0739 21.07 20.6593 21.017 20.361 20.7692L17.0275 18L9 18C7.89543 18 7 17.1046 7 16V14L6.97251 14L3.639 16.7692C3.34075 17.017 2.92615 17.07 2.57515 16.9053C2.22414 16.7406 2 16.3878 2 16V5ZM9 14V16H17.0278C17.4951 16 17.9468 16.1636 18.3055 16.4616L20 17.8693V9H17V12C17 13.1046 16.1046 14 15 14H9ZM15 12H6.97217C6.50497 12 6.05328 12.1635 5.69448 12.4616L4 13.8693V5H15V12Z"
                fill="currentColor"
            />
        </svg>
    );
}
