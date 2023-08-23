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
                d="M16.3402 1.99979H7.67024C4.28024 1.99979 2.00024 4.37979 2.00024 7.91979V16.0898C2.00024 19.6198 4.28024 21.9998 7.67024 21.9998H16.3402C19.7302 21.9998 22.0002 19.6198 22.0002 16.0898V7.91979C22.0002 4.37979 19.7302 1.99979 16.3402 1.99979Z"
                fill="#37383C"
            />
            <path
                d="M10.8133 15.2479C10.5893 15.2479 10.3653 15.1629 10.1943 14.9919L7.82132 12.6189C7.47932 12.2769 7.47932 11.7229 7.82132 11.3819C8.16332 11.0399 8.71632 11.0389 9.05832 11.3809L10.8133 13.1359L14.9413 9.00787C15.2833 8.66587 15.8363 8.66587 16.1783 9.00787C16.5203 9.34987 16.5203 9.90387 16.1783 10.2459L11.4323 14.9919C11.2613 15.1629 11.0373 15.2479 10.8133 15.2479Z"
                fill="#37383C"
            />
        </svg>
    );
}
