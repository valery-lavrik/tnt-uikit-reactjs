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
                d="M5.00002 2C5.55231 2 6.00002 2.44772 6.00002 3V5.29184C6.5429 4.80622 7.14531 4.386 7.79556 4.04244C9.28439 3.25581 10.9643 2.90268 12.6438 3.02307C14.3233 3.14346 15.9352 3.73258 17.2965 4.72348C18.6579 5.71439 19.714 7.06734 20.3448 8.62855C20.5516 9.14062 20.3042 9.72345 19.7922 9.93034C19.2801 10.1372 18.6973 9.88984 18.4904 9.37777C17.9998 8.16349 17.1784 7.1112 16.1195 6.34049C15.0607 5.56976 13.8071 5.11158 12.5008 5.01795C11.1945 4.92431 9.88778 5.199 8.72987 5.81079C8.12946 6.12802 7.58146 6.52931 7.10111 7H10C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9H5.00002C4.44774 9 4.00002 8.55228 4.00002 8V3C4.00002 2.44772 4.44774 2 5.00002 2ZM4.20745 14.0696C4.71951 13.8628 5.30235 14.1101 5.50924 14.6222C5.99984 15.8365 6.82124 16.8888 7.88008 17.6595C8.93888 18.4302 10.1931 18.8884 11.4995 18.9821C12.8057 19.0757 14.1119 18.801 15.2698 18.1892C15.8702 17.872 16.4181 17.4707 16.8984 17H14C13.4477 17 13 16.5523 13 16C13 15.4477 13.4477 15 14 15H19C19.5523 15 20 15.4477 20 16V21C20 21.5523 19.5523 22 19 22C18.4477 22 18 21.5523 18 21V18.7077C17.4571 19.1935 16.8546 19.6139 16.2042 19.9575C14.7154 20.7441 13.036 21.0973 11.3565 20.977C9.67701 20.8566 8.06453 20.2675 6.7031 19.2765C5.34173 18.2856 4.28564 16.9326 3.65487 15.3714C3.44798 14.8594 3.69538 14.2765 4.20745 14.0696Z"
                fill="currentColor"
            />
        </svg>
    );
}
