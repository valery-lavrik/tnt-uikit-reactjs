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
                opacity="0.4"
                d="M16.34 1.99979H7.67C4.28 1.99979 2 4.37979 2 7.91979V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91979C22 4.37979 19.73 1.99979 16.34 1.99979Z"
                fill="#37383C"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.1248 8.1893C11.1248 8.6713 11.5158 9.0643 11.9948 9.0643C12.4878 9.0643 12.8798 8.6713 12.8798 8.1893C12.8798 7.7073 12.4878 7.3143 12.0048 7.3143C11.5198 7.3143 11.1248 7.7073 11.1248 8.1893ZM12.8698 11.3621C12.8698 10.8801 12.4768 10.4871 11.9948 10.4871C11.5128 10.4871 11.1198 10.8801 11.1198 11.3621V15.7821C11.1198 16.2641 11.5128 16.6571 11.9948 16.6571C12.4768 16.6571 12.8698 16.2641 12.8698 15.7821V11.3621Z"
                fill="#37383C"
            />
        </svg>
    );
}
