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
                d="M4.72276 21.1673C4.70976 21.1673 4.69776 21.1673 4.68376 21.1663C4.36876 21.1503 4.05976 21.0823 3.76576 20.9633C2.31876 20.3753 1.62076 18.7223 2.20776 17.2763L9.52876 4.45031C9.78076 3.99431 10.1628 3.61231 10.6288 3.35431C11.9938 2.59831 13.7198 3.09531 14.4748 4.45931L21.7478 17.1873C21.9098 17.5683 21.9788 17.8783 21.9958 18.1943C22.0348 18.9503 21.7768 19.6753 21.2708 20.2363C20.7648 20.7973 20.0698 21.1283 19.3148 21.1663L4.79476 21.1673H4.72276Z"
                fill="#37383C"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.1245 10.0208C11.1245 9.53881 11.5175 9.14581 11.9995 9.14581C12.4815 9.14581 12.8745 9.53881 12.8745 10.0208V12.8488C12.8745 13.3318 12.4815 13.7238 11.9995 13.7238C11.5175 13.7238 11.1245 13.3318 11.1245 12.8488V10.0208ZM11.1245 16.2699C11.1245 15.7849 11.5175 15.3899 11.9995 15.3899C12.4815 15.3899 12.8745 15.7799 12.8745 16.2589C12.8745 16.7519 12.4815 17.1449 11.9995 17.1449C11.5175 17.1449 11.1245 16.7519 11.1245 16.2699Z"
                fill="#37383C"
            />
        </svg>
    );
}
