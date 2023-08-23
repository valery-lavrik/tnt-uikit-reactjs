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
                d="M3 4C3.55228 4 4 4.44772 4 5V11H10V5C10 4.44772 10.4477 4 11 4C11.5523 4 12 4.44772 12 5V19C12 19.5523 11.5523 20 11 20C10.4477 20 10 19.5523 10 19V13H4V19C4 19.5523 3.55228 20 3 20C2.44772 20 2 19.5523 2 19V5C2 4.44772 2.44772 4 3 4ZM19.5847 8.18876C19.8455 8.37671 20 8.67856 20 9L20 19C20 19.5523 19.5523 20 19 20C18.4477 20 18 19.5523 18 19L18 10.3874L16.3162 10.9487C15.7923 11.1233 15.226 10.8402 15.0513 10.3162C14.8767 9.79228 15.1598 9.22596 15.6838 9.05132L18.6838 8.05132C18.9887 7.94967 19.324 8.00081 19.5847 8.18876Z"
                fill="currentColor"
            />
        </svg>
    );
}
