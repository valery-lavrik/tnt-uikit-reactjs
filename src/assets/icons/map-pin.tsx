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
                d="M12 4C10.4052 4 8.87782 4.62669 7.75344 5.73871C6.62943 6.85037 6 8.35578 6 9.9231C6 12.0586 6.9376 14.071 8.1689 15.7829C9.39515 17.4879 10.8543 18.8128 11.7567 19.5517C11.8263 19.6087 11.8774 19.6505 11.9221 19.6857C11.9583 19.7142 11.9828 19.7324 12 19.7445C12.0172 19.7324 12.0418 19.7142 12.0781 19.6856C12.1228 19.6504 12.1739 19.6086 12.2434 19.5517C13.1459 18.8128 14.6049 17.4879 15.8311 15.7829C17.0624 14.071 18 12.0585 18 9.92306C18 8.35574 17.3706 6.85038 16.2466 5.73872C15.1222 4.62669 13.5949 4 12 4ZM6.34706 4.31671C7.84819 2.83208 9.88186 2 12 2C14.1182 2 16.1518 2.8321 17.6529 4.31672C19.1544 5.80172 20 7.81816 20 9.92306C20 12.6394 18.8154 15.059 17.4548 16.9507C16.0892 18.8495 14.4868 20.2998 13.5105 21.0992C13.494 21.1127 13.4772 21.1266 13.4599 21.1408C13.239 21.3231 12.9507 21.561 12.542 21.6761C12.2086 21.7699 11.7913 21.7699 11.4578 21.6761C11.0494 21.5611 10.7612 21.3232 10.5408 21.1413C10.5234 21.1269 10.5063 21.1128 10.4897 21.0992C9.5134 20.2998 7.91092 18.8495 6.54525 16.9508C5.18463 15.059 4 12.6394 4 9.9231C4 7.81818 4.84557 5.8017 6.34706 4.31671ZM12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8ZM9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9Z"
                fill="currentColor"
            />
        </svg>
    );
}
