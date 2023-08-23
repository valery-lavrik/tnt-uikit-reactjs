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
                d="M9.44721 2.10555C9.94119 2.35254 10.1414 2.95321 9.89443 3.44719L8.89443 5.44719C8.64744 5.94117 8.04676 6.14139 7.55279 5.8944C7.05881 5.64741 6.85858 5.04674 7.10557 4.55276L8.10557 2.55276C8.35256 2.05878 8.95324 1.85856 9.44721 2.10555ZM12.4472 2.10555C12.9412 2.35254 13.1414 2.95321 12.8944 3.44719L11.8944 5.44719C11.6474 5.94117 11.0468 6.14139 10.5528 5.8944C10.0588 5.64741 9.85858 5.04674 10.1056 4.55276L11.1056 2.55276C11.3526 2.05878 11.9532 1.85856 12.4472 2.10555ZM15.4472 2.10555C15.9412 2.35254 16.1414 2.95321 15.8944 3.44719L14.8944 5.44719C14.6474 5.94117 14.0468 6.14139 13.5528 5.8944C13.0588 5.64741 12.8586 5.04674 13.1056 4.55276L14.1056 2.55276C14.3526 2.05878 14.9532 1.85856 15.4472 2.10555ZM5 8.99997V13C5 16.3137 7.68629 19 11 19C14.3137 19 17 16.3137 17 13V8.99997H5ZM18.7643 7.99997C18.4375 7.40395 17.8041 6.99997 17.0767 6.99997H4.92285C3.86042 6.99997 3 7.86133 3 8.92307V13C3 15.3894 4.04751 17.5341 5.70834 19H4C3.44772 19 3 19.4477 3 20C3 20.5523 3.44772 21 4 21H18C18.5523 21 19 20.5523 19 20C19 19.4477 18.5523 19 18 19H16.2917C17.4725 17.9578 18.3433 16.5724 18.748 15H19.5C21.433 15 23 13.433 23 11.5C23 9.56698 21.433 7.99997 19.5 7.99997H18.7643ZM19 9.99998V13H19.5C20.3284 13 21 12.3284 21 11.5C21 10.6715 20.3284 9.99998 19.5 9.99998H19Z"
                fill="currentColor"
            />
        </svg>
    );
}
