import React from 'react';
export default function Icon({
    className = '',
    style = {},
    onClick,
}: {
    className?: string;
    style?: React.CSSProperties;
    onClick?: (...args: any) => void;
}) {
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
                d="M15.3228 7.03434C15.2251 7.00804 15.1064 7.00001 14.5014 7.00001H7.2002C6.62365 7.00001 6.25126 7.00078 5.9678 7.02394C5.69595 7.04614 5.59517 7.08384 5.54579 7.109C5.35789 7.20474 5.205 7.35762 5.109 7.54604C5.0838 7.59549 5.04612 7.6962 5.02393 7.96783C5.00078 8.25115 5 8.6234 5 9.19996V14.8C5 15.3765 5.00078 15.7488 5.02393 16.0322C5.04613 16.3039 5.08381 16.4046 5.109 16.454C5.20495 16.6424 5.35778 16.7952 5.54579 16.891C5.59519 16.9162 5.69598 16.9539 5.96782 16.9761C6.25127 16.9992 6.62367 17 7.2002 17H14.5014C15.1062 17 15.225 16.9919 15.3228 16.9656C15.4359 16.9352 15.5426 16.8852 15.6383 16.8178C15.7215 16.7593 15.8056 16.6717 16.1917 16.2084L18.5251 13.4084C18.8382 13.0327 19.0374 12.7925 19.1768 12.5971C19.3089 12.412 19.3439 12.325 19.3583 12.2744C19.4095 12.0951 19.4095 11.905 19.3583 11.7257C19.3439 11.675 19.3089 11.588 19.1768 11.4029C19.0374 11.2075 18.8382 10.9673 18.5251 10.5916L16.1917 7.79156C15.8057 7.32832 15.7215 7.24072 15.6383 7.18217C15.5425 7.1147 15.4358 7.06474 15.3228 7.03434ZM14.5956 4.99994C15.0532 4.99947 15.456 4.99905 15.8424 5.10302C16.1818 5.19433 16.5022 5.34448 16.7894 5.5466C17.1182 5.77803 17.3771 6.08924 17.6729 6.44482C17.6912 6.46678 17.7096 6.4889 17.7282 6.51119L20.0812 9.33479C20.3672 9.67794 20.6162 9.97672 20.805 10.2414C21.0054 10.5223 21.18 10.8209 21.2816 11.177C21.4351 11.7149 21.4351 12.2851 21.2816 12.823C21.18 13.1792 21.0054 13.4777 20.8049 13.7587C20.6163 14.0231 20.3674 14.3217 20.0817 14.6646L17.7282 17.4888C17.7095 17.5111 17.6911 17.5334 17.6727 17.5554C17.3771 17.9108 17.1182 18.222 16.7894 18.4534C16.5021 18.6556 16.1817 18.8057 15.8424 18.8969C15.4558 19.001 15.053 19.0005 14.595 19.0001C14.5641 19 14.5329 19 14.5014 19H7.16204C6.6347 19 6.17972 19 5.80496 18.9694C5.40959 18.9371 5.01623 18.8658 4.63781 18.673C4.07317 18.3853 3.61453 17.9264 3.32698 17.362C3.13418 16.9836 3.06287 16.5904 3.03057 16.195C2.99997 15.8204 2.99998 15.3657 3 14.8385V9.16141C2.99998 8.63426 2.99997 8.17952 3.03057 7.80496C3.06287 7.40962 3.13419 7.01643 3.32698 6.63806C3.61447 6.07383 4.07306 5.61474 4.63781 5.32699C5.01625 5.13416 5.40962 5.06287 5.80499 5.03057C6.17965 4.99997 6.63451 4.99999 7.16168 5.00001L14.5014 5.00001C14.5331 5.00001 14.5644 4.99997 14.5956 4.99994Z"
                fill="currentColor"
            />
        </svg>
    );
}
