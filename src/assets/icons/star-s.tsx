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
                d="M12.9763 3.11361L15.2028 7.58789C15.3668 7.91205 15.6799 8.13717 16.041 8.18719L21.042 8.91556C21.3341 8.95658 21.5992 9.11066 21.7782 9.34578C21.9552 9.5779 22.0312 9.87205 21.9882 10.1612C21.9532 10.4013 21.8402 10.6234 21.6672 10.7935L18.0434 14.3063C17.7783 14.5514 17.6583 14.9146 17.7223 15.2698L18.6145 20.2083C18.7095 20.8046 18.3144 21.3669 17.7223 21.48C17.4783 21.519 17.2282 21.478 17.0082 21.3659L12.5472 19.0417C12.2161 18.8746 11.8251 18.8746 11.494 19.0417L7.03303 21.3659C6.48491 21.657 5.80576 21.4589 5.5007 20.9187C5.38767 20.7036 5.34766 20.4584 5.38467 20.2193L6.27686 15.2798C6.34088 14.9256 6.21985 14.5604 5.95579 14.3153L2.33202 10.8045C1.90092 10.3883 1.88792 9.70296 2.30301 9.27175C2.31201 9.26274 2.32201 9.25274 2.33202 9.24273C2.50405 9.06764 2.7301 8.95658 2.97415 8.92757L7.97523 8.1982C8.33531 8.14717 8.64837 7.92406 8.81341 7.59789L10.9599 3.11361C11.1509 2.72942 11.547 2.4903 11.9771 2.5003H12.1111C12.4842 2.54533 12.8093 2.77644 12.9763 3.11361Z"
                fill="#37383C"
            />
            <path
                d="M11.992 18.9171C11.7983 18.9231 11.6096 18.9752 11.4399 19.0682L7.00072 21.3871C6.45756 21.6464 5.80756 21.4452 5.50303 20.9258C5.39021 20.7136 5.34927 20.4704 5.38721 20.2322L6.27384 15.3032C6.33375 14.9449 6.21394 14.5806 5.95334 14.3284L2.32794 10.8185C1.8976 10.3971 1.88961 9.70556 2.31096 9.27421C2.31695 9.26821 2.32195 9.2632 2.32794 9.2582C2.49967 9.08806 2.72133 8.97597 2.95996 8.94094L7.96523 8.20433C8.32767 8.1583 8.64219 7.93211 8.80194 7.60384L10.9776 3.06312C11.1843 2.69682 11.5806 2.47864 12 2.50166C11.992 2.7989 11.992 18.715 11.992 18.9171Z"
                fill="#37383C"
            />
        </svg>
    );
}
