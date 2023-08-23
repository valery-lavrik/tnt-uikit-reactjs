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
                d="M3.2984 6.28743C3.69194 5.89995 4.32508 5.90486 4.71257 6.2984L8.71257 10.3609C8.82839 10.4785 8.85397 10.5038 8.87153 10.5195C9.25121 10.8593 9.82546 10.8593 10.2051 10.5195C10.2227 10.5038 10.2483 10.4785 10.3641 10.3609L10.3693 10.3556C10.4639 10.2595 10.5404 10.1818 10.6148 10.1152C11.7539 9.09572 13.4771 9.09572 14.6161 10.1152C14.6906 10.1819 14.7671 10.2595 14.8617 10.3556L19.0003 14.5589L19 11.0001C19 10.4478 19.4476 10 19.9999 10C20.5522 9.99996 21 10.4476 21 10.9999L21.0005 16.9999C21.0005 17.2652 20.8951 17.5195 20.7076 17.7071C20.52 17.8946 20.2657 18 20.0005 18H14C13.4477 18 13 17.5523 13 17C13 16.4477 13.4477 16 14 16H17.6125L13.4417 11.7641C13.3286 11.6492 13.3005 11.6218 13.2823 11.6055C12.9026 11.2656 12.3284 11.2656 11.9487 11.6055C11.9304 11.6218 11.9024 11.6492 11.7892 11.7641C11.7828 11.7706 11.7765 11.7771 11.7702 11.7834C11.6842 11.8709 11.6103 11.946 11.539 12.0098C10.4 13.0293 8.67672 13.0293 7.53768 12.0098C7.46641 11.946 7.3925 11.8709 7.30644 11.7834C7.30017 11.777 7.29384 11.7706 7.28743 11.7641L3.28743 7.7016C2.89995 7.30806 2.90486 6.67492 3.2984 6.28743Z"
                fill="currentColor"
            />
        </svg>
    );
}