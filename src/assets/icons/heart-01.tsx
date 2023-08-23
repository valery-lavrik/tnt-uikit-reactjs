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
                d="M4.89025 7.17031C4.37574 7.78194 4 8.70016 4 10.0001C4 12.5333 5.93835 15.024 8.16436 17.0027C9.2453 17.9635 10.3309 18.748 11.1484 19.293C11.4863 19.5183 11.7768 19.7015 12 19.8383C12.2232 19.7015 12.5137 19.5183 12.8516 19.293C13.6691 18.748 14.7547 17.9635 15.8356 17.0027C18.0616 15.024 20 12.5333 20 10.0001C20 8.70016 19.6243 7.78194 19.1098 7.17031C18.5924 6.55526 17.8836 6.18853 17.1074 6.07667C15.5454 5.85159 13.7381 6.6663 12.92 8.58647C12.7629 8.95521 12.4008 9.19452 12 9.19452C11.5992 9.19452 11.2371 8.95521 11.08 8.58647C10.2619 6.6663 8.4546 5.85159 6.89263 6.07667C6.11636 6.18853 5.40763 6.55526 4.89025 7.17031ZM12 21.0001C11.5144 21.8743 11.5141 21.8741 11.5138 21.874L11.5131 21.8735L11.511 21.8724L11.5043 21.8686L11.4814 21.8557C11.4619 21.8447 11.4342 21.8289 11.3987 21.8083C11.3276 21.7673 11.2255 21.7075 11.0968 21.6298C10.8395 21.4746 10.475 21.2478 10.0391 20.9572C9.16911 20.3772 8.0047 19.5367 6.83564 18.4975C4.56165 16.4762 2 13.4669 2 10.0001C2 8.30006 2.49926 6.90576 3.35975 5.88284C4.21737 4.86333 5.38364 4.27346 6.60737 4.09712C8.53723 3.81903 10.6266 4.56465 12 6.26353C13.3734 4.56465 15.4628 3.81903 17.3926 4.09712C18.6164 4.27346 19.7826 4.86333 20.6402 5.88284C21.5007 6.90576 22 8.30006 22 10.0001C22 13.4669 19.4384 16.4762 17.1644 18.4975C15.9953 19.5367 14.8309 20.3772 13.9609 20.9572C13.525 21.2478 13.1606 21.4746 12.9032 21.6298C12.7745 21.7075 12.6724 21.7673 12.6013 21.8083C12.5658 21.8289 12.5381 21.8447 12.5186 21.8557L12.4957 21.8686L12.489 21.8724L12.4869 21.8735L12.4862 21.874C12.4859 21.8741 12.4856 21.8743 12 21.0001ZM12 21.0001L12.4856 21.8743C12.1836 22.042 11.8164 22.042 11.5144 21.8743L12 21.0001Z"
                fill="currentColor"
            />
        </svg>
    );
}