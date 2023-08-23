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
                d="M16.8641 5.0493C16.7488 5.01167 16.6013 4.99995 15.8571 4.99995H8.14258C7.39849 4.99995 7.25178 5.01166 7.13646 5.0493C7.00208 5.09317 6.87864 5.1648 6.77481 5.25889C6.68497 5.34028 6.60196 5.4621 6.23261 6.10845L5.72319 6.99995H18.2769L17.7675 6.10845C17.7675 6.10844 17.7675 6.10846 17.7675 6.10845C17.3985 5.46263 17.315 5.34037 17.225 5.25889C17.1206 5.16422 16.9977 5.0929 16.8641 5.0493ZM19 8.99995H5V16.7999C5 17.3765 5.00078 17.7488 5.02393 18.0321C5.04612 18.3038 5.0838 18.4045 5.109 18.4539C5.20498 18.6423 5.35784 18.7952 5.54579 18.8909C5.59519 18.9161 5.69598 18.9538 5.96782 18.976C6.25127 18.9992 6.62367 18.9999 7.2002 18.9999H16.8002C17.3767 18.9999 17.7489 18.9992 18.0321 18.976C18.3036 18.9538 18.4043 18.9162 18.4538 18.8909C18.6424 18.7948 18.7956 18.6416 18.8912 18.4539C18.9164 18.4046 18.954 18.304 18.9762 18.0323C18.9993 17.7489 19 17.3766 19 16.7999V8.99995ZM15.9739 2.99985C16.5337 2.99915 17.0267 2.99853 17.4847 3.14802C17.8863 3.27911 18.2552 3.49345 18.5679 3.77678C18.9252 4.10046 19.1692 4.52871 19.4467 5.01581C19.4657 5.049 19.4847 5.08246 19.504 5.11617L20.8683 7.50384C20.9546 7.65493 21 7.82593 21 7.99995V16.8411C21 17.367 21 17.8209 20.9696 18.1948C20.9373 18.5901 20.8661 18.9834 20.6732 19.3619C20.3854 19.9268 19.9258 20.3855 19.3618 20.6729C18.9835 20.8657 18.5904 20.937 18.1951 20.9694C17.8205 21 17.3657 21 16.8384 20.9999H7.16209C6.63473 21 6.17973 21 5.80496 20.9694C5.40959 20.9371 5.01623 20.8658 4.63781 20.6729C4.07311 20.3852 3.61449 19.9262 3.32698 19.3619C3.13419 18.9835 3.06287 18.5903 3.03057 18.195C2.99997 17.8204 2.99998 17.3656 3 16.8385L3 7.99995C3 7.82592 3.04542 7.65491 3.13176 7.50381L4.49613 5.11617C4.49613 5.11618 4.49613 5.11617 4.49613 5.11617C4.51577 5.0818 4.5352 5.04769 4.55447 5.01387C4.8313 4.52797 5.07508 4.10009 5.43192 3.77678C5.74526 3.49286 6.1151 3.27884 6.51589 3.14802C6.97387 2.99853 7.46598 2.99915 8.02585 2.99985C8.06443 2.9999 8.10334 2.99995 8.14258 2.99995H15.8571C15.8963 2.99995 15.9353 2.9999 15.9739 2.99985ZM12 9.99995C12.5523 9.99995 13 10.4477 13 10.9999L13 15.1314L14.4453 14.1679C14.9048 13.8615 15.5257 13.9857 15.8321 14.4452C16.1384 14.9048 16.0142 15.5256 15.5547 15.832L12.5547 17.832C12.2188 18.0559 11.7812 18.0559 11.4453 17.832L8.4453 15.832C7.98577 15.5256 7.8616 14.9048 8.16795 14.4452C8.4743 13.9857 9.09517 13.8615 9.5547 14.1679L11 15.1314L11 10.9999C11 10.4477 11.4477 9.99995 12 9.99995Z"
                fill="currentColor"
            />
        </svg>
    );
}
