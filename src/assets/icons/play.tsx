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
                d="M7.78486 4.35208C7.79758 4.35886 7.81034 4.36567 7.82313 4.37249L17.861 9.72602C18.2581 9.93775 18.6149 10.128 18.8862 10.3063C19.1574 10.4845 19.4987 10.7461 19.6906 11.162C19.9359 11.6937 19.9359 12.3062 19.6906 12.8379C19.4987 13.2538 19.1574 13.5154 18.8862 13.6936C18.6149 13.8718 18.2581 14.0621 17.8612 14.2738L7.78446 19.648C7.42896 19.8377 7.10404 20.011 6.82831 20.1272C6.5453 20.2464 6.16895 20.3717 5.74416 20.3169C5.19132 20.2456 4.6933 19.9468 4.37019 19.4925C4.12199 19.1435 4.05535 18.7525 4.02731 18.4466C3.99994 18.1479 3.99997 17.7788 4 17.3749L4 6.66659C4 6.65267 4 6.6388 4 6.62496C3.99997 6.22104 3.99994 5.85193 4.02732 5.55327C4.05535 5.24739 4.122 4.85636 4.37019 4.50741C4.69331 4.05309 5.19134 3.75435 5.74416 3.68305C6.16891 3.62827 6.54523 3.75351 6.82826 3.87274C7.10412 3.98894 7.42918 4.16234 7.78486 4.35208ZM6.02219 5.70368C6.0211 5.71361 6.02002 5.72432 6.01897 5.73582C6.00101 5.93178 6 6.2072 6 6.66659V17.3333C6 17.7926 6.00101 18.0681 6.01897 18.2641C6.02002 18.2756 6.0211 18.2863 6.02219 18.2962C6.03139 18.2925 6.04125 18.2885 6.05179 18.2841C6.23312 18.2077 6.47649 18.0789 6.88196 17.8627L16.882 12.5294C17.3292 12.2908 17.6029 12.1437 17.7879 12.0221C17.7999 12.0143 17.8109 12.0069 17.821 11.9999C17.8109 11.993 17.7999 11.9856 17.7879 11.9778C17.6029 11.8562 17.3292 11.7091 16.882 11.4705L6.88196 6.1372C6.47651 5.92096 6.23314 5.79225 6.05183 5.71587C6.04127 5.71142 6.0314 5.70737 6.02219 5.70368Z"
                fill="currentColor"
            />
        </svg>
    );
}
