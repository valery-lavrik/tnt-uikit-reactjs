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
                d="M15.8448 4.68493C15.6439 4.61967 15.4275 4.61967 15.2267 4.68493C15.1738 4.7021 15.0759 4.74672 14.8681 4.92312C14.6513 5.10708 14.3875 5.36977 13.9798 5.77741L13.4141 6.34315L14.8284 7.75746C15.2189 8.14799 15.2189 8.78115 14.8284 9.17168C14.4379 9.5622 13.8047 9.5622 13.4142 9.17168L11.9999 7.75736L10.586 9.17127L12.0003 10.5856C12.3908 10.9761 12.3908 11.6093 12.0003 11.9998C11.6098 12.3903 10.9766 12.3903 10.5861 11.9998L9.17176 10.5855L7.75761 11.9996L9.17216 13.4142C9.56269 13.8047 9.56269 14.4379 9.17216 14.8284C8.78164 15.2189 8.14847 15.2189 7.75795 14.8284L6.34339 13.4139L5.77741 13.9798C5.36971 14.3875 5.10703 14.6513 4.92304 14.868C4.74664 15.0758 4.70207 15.1737 4.68493 15.2264C4.61967 15.4273 4.61967 15.6436 4.68493 15.8444C4.70208 15.8972 4.74668 15.9951 4.92308 16.2029C5.10705 16.4196 5.36974 16.6834 5.77741 17.0911L6.90878 18.2225C7.31634 18.63 7.58026 18.8927 7.79702 19.0767C8.00489 19.253 8.10294 19.2977 8.15586 19.3149C8.3567 19.3802 8.57265 19.3802 8.77349 19.3149C8.82638 19.2977 8.92437 19.2531 9.13221 19.0767C9.34895 18.8928 9.61282 18.6301 10.0204 18.2225L18.2229 10.0201C18.6305 9.61245 18.8931 9.34864 19.0769 9.13198C19.2532 8.92426 19.2978 8.82631 19.315 8.77337C19.3803 8.57252 19.3803 8.35621 19.315 8.15537C19.2979 8.10259 19.2533 8.00473 19.0769 7.79695C18.893 7.58024 18.6303 7.31646 18.2226 6.90878L17.0912 5.77741C16.6835 5.36968 16.4198 5.107 16.2031 4.923C15.9953 4.7466 15.8975 4.70206 15.8448 4.68493ZM14.6086 2.78282C15.2112 2.58704 15.8603 2.58704 16.4628 2.78282C16.8667 2.91406 17.1952 3.14172 17.4975 3.39843C17.7837 3.6414 18.1049 3.9626 18.4771 4.33487L19.664 5.5218C20.0368 5.89454 20.3584 6.2161 20.6016 6.5026C20.8583 6.80499 21.0859 7.13346 21.2172 7.53734C21.4129 8.13987 21.4129 8.78887 21.2172 9.3914C21.086 9.79511 20.8586 10.1235 20.6019 10.426C20.3582 10.7132 20.0359 11.0354 19.6622 11.4092L11.4095 19.6619C11.0358 20.0356 10.7135 20.3579 10.4263 20.6016C10.1238 20.8583 9.79529 21.0858 9.39152 21.217C8.78899 21.4128 8.14036 21.4128 7.53783 21.217C7.13409 21.0859 6.80556 20.8584 6.50303 20.6016C6.21557 20.3577 5.89297 20.0351 5.51885 19.661L4.33636 18.4785C3.9634 18.1055 3.64167 17.7838 3.39835 17.4972C3.14164 17.1948 2.91404 16.8663 2.78282 16.4624C2.58704 15.8599 2.58704 15.2109 2.78282 14.6084C2.91405 14.2045 3.14168 13.876 3.39839 13.5736C3.64154 13.2872 3.96302 12.9658 4.33565 12.5932L12.5917 4.33712C12.965 3.96381 13.287 3.64181 13.5739 3.39831C13.8763 3.1416 14.2048 2.91403 14.6086 2.78282Z"
                fill="currentColor"
            />
        </svg>
    );
}
