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
                d="M19.7695 11.6453C19.039 10.7923 18.7071 10.0531 18.7071 8.79716V8.37013C18.7071 6.73354 18.3304 5.67907 17.5115 4.62459C16.2493 2.98699 14.1244 2 12.0442 2H11.9558C9.91935 2 7.86106 2.94167 6.577 4.5128C5.71333 5.58842 5.29293 6.68822 5.29293 8.37013V8.79716C5.29293 10.0531 4.98284 10.7923 4.23049 11.6453C3.67691 12.2738 3.5 13.0815 3.5 13.9557C3.5 14.8309 3.78723 15.6598 4.36367 16.3336C5.11602 17.1413 6.17846 17.6569 7.26375 17.7466C8.83505 17.9258 10.4063 17.9933 12.0005 17.9933C13.5937 17.9933 15.165 17.8805 16.7372 17.7466C17.8215 17.6569 18.884 17.1413 19.6363 16.3336C20.2118 15.6598 20.5 14.8309 20.5 13.9557C20.5 13.0815 20.3231 12.2738 19.7695 11.6453Z"
                fill="#37383C"
            />
            <path
                opacity="0.4"
                d="M14.0086 19.2284C13.5087 19.1216 10.4625 19.1216 9.96263 19.2284C9.53527 19.3271 9.07312 19.5567 9.07312 20.0602C9.09797 20.5406 9.37923 20.9647 9.76882 21.2336L9.76783 21.2346C10.2717 21.6273 10.8631 21.8771 11.4822 21.9668C11.8122 22.0121 12.1481 22.0101 12.49 21.9668C13.1082 21.8771 13.6995 21.6273 14.2034 21.2346L14.2024 21.2336C14.592 20.9647 14.8733 20.5406 14.8981 20.0602C14.8981 19.5567 14.436 19.3271 14.0086 19.2284Z"
                fill="#37383C"
            />
        </svg>
    );
}
