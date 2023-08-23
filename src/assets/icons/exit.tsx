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
                d="M18.0321 5.02393C17.7488 5.00078 17.3766 5 16.8 5H7C6.52037 5 6.2108 5.00054 5.97389 5.01671C5.74599 5.03226 5.65919 5.05887 5.61755 5.07612C5.3723 5.17771 5.17752 5.3725 5.07612 5.6173C5.05888 5.65892 5.03227 5.74575 5.01671 5.97375C5.00054 6.21073 5 6.52036 5 6.99999C5 7.55227 4.55229 7.99999 4 7.99999C3.44772 7.99999 3 7.55227 3 6.99999L3 6.968C2.99999 6.52935 2.99998 6.15086 3.02135 5.83761C3.04386 5.50778 3.09336 5.17787 3.22836 4.85194C3.53294 4.11663 4.11732 3.53275 4.85218 3.22836C5.17808 3.09337 5.5079 3.04386 5.83772 3.02135C6.15093 2.99998 6.52937 2.99999 6.96801 3L16.8386 3C17.3657 2.99998 17.8204 2.99997 18.1949 3.03057C18.5903 3.06288 18.9834 3.1342 19.3618 3.32698C19.9259 3.61439 20.3854 4.07316 20.6732 4.63805C20.8661 5.01653 20.9373 5.40983 20.9696 5.80511C21 6.17899 21 6.63286 21 7.1588V16.841C21 17.367 21 17.8209 20.9696 18.1949C20.9373 18.5902 20.8661 18.9835 20.6732 19.362C20.3854 19.927 19.9257 20.3856 19.3618 20.673C18.9834 20.8658 18.5903 20.9371 18.195 20.9694C17.8203 21 17.3655 21 16.8382 21H6.96768C6.52919 21 6.15086 21 5.83774 20.9787C5.50793 20.9562 5.17809 20.9067 4.85218 20.7717C4.11729 20.4673 3.53292 19.8833 3.22836 19.1481C3.09336 18.8221 3.04386 18.4922 3.02135 18.1624C2.99998 17.8491 2.99999 17.4706 3 17.032L3 17C3 16.4477 3.44772 16 4 16C4.55229 16 5 16.4477 5 17C5 17.4796 5.00054 17.7893 5.01671 18.0262C5.03227 18.2542 5.05888 18.3411 5.07612 18.3827C5.17754 18.6275 5.37233 18.8223 5.61755 18.9239C5.65918 18.9411 5.74597 18.9678 5.97387 18.9833C6.21079 18.9995 6.52036 19 7 19H16.8C17.3765 19 17.7488 18.9992 18.032 18.9761C18.3036 18.9539 18.4043 18.9162 18.4538 18.891C18.6425 18.7948 18.7956 18.6417 18.8912 18.454C18.9163 18.4047 18.954 18.3041 18.9762 18.0323C18.9993 17.7489 19 17.3766 19 16.8V7.19995C19 6.6233 18.9993 6.25105 18.9762 5.96767C18.954 5.69598 18.9164 5.59537 18.8912 5.54603C18.7956 5.35828 18.6424 5.20508 18.4538 5.109C18.4043 5.08379 18.3036 5.04612 18.0321 5.02393ZM11.2929 8.2929C11.6834 7.90237 12.3166 7.90237 12.7071 8.2929L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071C10.9024 15.3166 10.9024 14.6834 11.2929 14.2929L12.5858 13L4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11L12.5858 11L11.2929 9.70711C10.9024 9.31658 10.9024 8.68342 11.2929 8.2929Z"
                fill="currentColor"
            />
        </svg>
    );
}
