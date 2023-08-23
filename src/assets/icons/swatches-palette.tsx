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
                d="M7.64304 1.75831L7.38461 2.72282L7.64305 1.75831L13.3818 3.29602C14.1977 3.51462 14.6819 4.35324 14.4633 5.16917C14.4633 5.16917 14.4633 5.16918 14.4633 5.16919L13.3451 9.34255L17.261 7.5166C18.0264 7.15968 18.9365 7.4907 19.2935 8.25633C19.2935 8.25634 19.2935 8.25634 19.2935 8.25635L21.8045 13.6409L21.8045 13.6409C21.8896 13.8235 21.9356 14.0145 21.9459 14.2042C21.981 14.3061 22 14.4155 22 14.5294L22.0001 20.4706C22.0001 21.3155 21.315 22 20.4706 22H6.54119C6.14366 22.0033 5.73908 21.9536 5.33639 21.8457C2.93588 21.2025 1.51093 18.735 2.15419 16.3343L5.77004 2.83982C5.98855 2.02432 6.82677 1.53959 7.64304 1.75831ZM11.7863 20H20.0001L20 16.1699L11.7863 20ZM19.793 14.0597L17.6798 9.52806L12.6695 11.8644L10.9803 18.1691L19.793 14.0597ZM17.4812 9.1022L17.4809 9.1016L17.4809 9.10158C17.481 9.10179 17.4811 9.10199 17.4812 9.1022ZM7.5801 3.812L4.08605 16.852C3.72871 18.1855 4.52027 19.5565 5.85403 19.9139C7.18768 20.2712 8.55852 19.4798 8.91588 18.1461M8.91589 18.1461L12.4097 5.10608L7.5801 3.812M5.49999 17.6C5.49999 17.0477 5.94771 16.6 6.49999 16.6H6.50199C6.77126 16.6 7.02915 16.7086 7.21731 16.9012C7.40547 17.0938 7.50801 17.3542 7.50172 17.6233L7.50167 17.6253C7.49547 17.8906 7.38413 18.1425 7.19214 18.3256C7.00015 18.5087 6.74326 18.608 6.47803 18.6017L6.47607 18.6017C5.93326 18.5887 5.49999 18.1449 5.49999 17.6019V17.6Z"
                fill="currentColor"
            />
        </svg>
    );
}