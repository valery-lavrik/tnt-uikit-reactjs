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
                d="M15 5C14.4477 5 14 4.55228 14 4C14 3.44772 14.4477 3 15 3H20C20.5523 3 21 3.44772 21 4V9C21 9.55228 20.5523 10 20 10C19.4477 10 19 9.55228 19 9V6.41421L13.7071 11.7071C13.3166 12.0976 12.6834 12.0976 12.2929 11.7071C11.9024 11.3166 11.9024 10.6834 12.2929 10.2929L17.5858 5H15ZM8.16168 4H10.0002C10.5525 4 11.0002 4.44772 11.0002 5C11.0002 5.55228 10.5525 6 10.0002 6H8.2002C7.62365 6 7.25126 6.00078 6.9678 6.02393C6.69595 6.04613 6.59517 6.08383 6.54579 6.10899C6.35789 6.20474 6.205 6.35761 6.109 6.54603C6.0838 6.59549 6.04612 6.6962 6.02393 6.96783C6.00078 7.25114 6 7.6234 6 8.19995V15.8C6 16.3765 6.00078 16.7488 6.02393 17.0322C6.04613 17.3039 6.08381 17.4046 6.109 17.454C6.20495 17.6424 6.35778 17.7952 6.54579 17.891C6.59519 17.9161 6.69598 17.9538 6.96782 17.9761C7.25127 17.9992 7.62367 18 8.2002 18H15.8002C16.3767 18 16.7489 17.9992 17.0321 17.9761C17.3036 17.9539 17.4043 17.9162 17.4538 17.891C17.6425 17.7948 17.7956 17.6417 17.8912 17.454C17.9164 17.4047 17.954 17.3041 17.9762 17.0323C17.9993 16.7489 18 16.3767 18 15.8V14C18 13.4477 18.4477 13 19 13C19.5523 13 20 13.4477 20 14L20 15.8411C20 16.3671 20 16.821 19.9696 17.1949C19.9373 17.5902 19.8661 17.9835 19.6732 18.362C19.3854 18.927 18.9257 19.3856 18.3618 19.673C17.9835 19.8657 17.5904 19.9371 17.1951 19.9694C16.8205 20 16.3657 20 15.8384 20H8.16209C7.63473 20 7.17973 20 6.80496 19.9694C6.40959 19.9371 6.01623 19.8658 5.63781 19.673C5.07317 19.3853 4.61453 18.9264 4.32698 18.362C4.13418 17.9836 4.06287 17.5904 4.03057 17.195C3.99997 16.8204 3.99998 16.3656 4 15.8385V8.1614C3.99998 7.63426 3.99997 7.17951 4.03057 6.80495C4.06287 6.40961 4.13419 6.01642 4.32698 5.63805C4.61447 5.07382 5.07306 4.61473 5.63781 4.32698C6.01625 4.13416 6.40962 4.06286 6.80499 4.03057C7.17965 3.99997 7.6345 3.99998 8.16168 4Z"
                fill="currentColor"
            />
        </svg>
    );
}
