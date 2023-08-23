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
                d="M11 4.06189C7.05369 4.55399 4 7.92038 4 12C4 16.4183 7.58172 20 12 20C13.7339 20 15.339 19.4484 16.6493 18.5111L11.2652 12.6783C11.0947 12.4936 11 12.2514 11 12V4.06189ZM13 4.06189V11H19.9381C19.4869 7.38128 16.6187 4.51314 13 4.06189ZM19.9381 13H14.284L18.1186 17.1542C19.0901 16.0021 19.7421 14.5719 19.9381 13ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
                fill="currentColor"
            />
        </svg>
    );
}