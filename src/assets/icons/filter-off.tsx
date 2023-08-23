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
            <g clipPath="url(#clip0_1_4516)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.29284 0.292893C4.68336 -0.0976311 5.31653 -0.0976311 5.70705 0.292893L16.1978 10.7836C16.2009 10.7867 16.2041 10.7898 16.2072 10.7929C16.2103 10.796 16.2134 10.7992 16.2165 10.8023L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3165 16.0976 18.6834 16.0976 18.2928 15.7071L15.5 12.9143L15.1758 13.2385C15.0832 13.3311 15.0371 13.3775 15.005 13.4127C15.0042 13.4136 15.0033 13.4145 15.0025 13.4154C15.0025 13.4165 15.0024 13.4177 15.0024 13.4189C15.0002 13.4663 14.9999 13.5317 14.9999 13.6627V18.0111C14.9999 18.0356 15 18.0608 15.0001 18.0866C15.0012 18.3628 15.0025 18.7097 14.8906 19.0341C14.7936 19.3153 14.6352 19.5703 14.4285 19.7814C14.1883 20.0266 13.8776 20.1805 13.6297 20.3033C13.6068 20.3147 13.5844 20.3258 13.5626 20.3367L12.7265 20.7547C12.3745 20.9307 12.0516 21.0922 11.7775 21.1993C11.4955 21.3094 11.1235 21.422 10.7073 21.3605C10.1625 21.28 9.67598 20.9785 9.36103 20.5282C9.11988 20.1834 9.05427 19.8004 9.02668 19.4989C8.99988 19.2062 8.99991 18.8454 8.99995 18.4523L8.99995 13.6627C8.99995 13.5311 8.99978 13.4658 8.99764 13.4179C8.9976 13.4171 8.99756 13.4163 8.99752 13.4155C8.99659 13.4144 8.9956 13.4133 8.99455 13.4122C8.96272 13.3773 8.91671 13.3309 8.82433 13.2385L3.76159 8.17573C3.74986 8.16401 3.73778 8.15199 3.72539 8.13967C3.59078 8.00578 3.42121 7.83712 3.29477 7.63077C3.18547 7.45241 3.10436 7.25743 3.05521 7.0527C2.99871 6.81737 2.99935 6.57818 2.99985 6.38827C2.9999 6.37083 2.99995 6.3538 2.99995 6.33723V5.59998C2.99995 5.58933 2.99995 5.5787 2.99994 5.56807C2.99991 5.31569 2.99989 5.06991 3.01689 4.86176C3.03557 4.63316 3.07964 4.36344 3.21793 4.09203C3.40955 3.71596 3.71527 3.40987 4.09185 3.21799C4.3632 3.07973 4.6328 3.03564 4.86143 3.01695C5.06954 2.99994 5.31528 2.99997 5.56764 3C5.57367 3 5.5797 3 5.58573 3L4.29284 1.70711C3.90232 1.31658 3.90232 0.683417 4.29284 0.292893ZM7.58235 4.99662C7.55505 4.99886 7.52744 5 7.49956 5H5.59956C5.30302 5 5.14086 5.00078 5.02436 5.0103C5.0198 5.01067 5.01548 5.01105 5.0114 5.01143C5.01101 5.01558 5.01063 5.01998 5.01025 5.02463C5.00072 5.1412 4.99995 5.30345 4.99995 5.59998V6.33723C4.99995 6.46823 5.00019 6.53363 5.00236 6.58114C5.00241 6.58233 5.00247 6.58348 5.00252 6.58458C5.00332 6.58547 5.00416 6.58639 5.00503 6.58735C5.03709 6.62247 5.08316 6.66888 5.1758 6.76152L10.2385 11.8243C10.25 11.8357 10.2618 11.8474 10.2738 11.8594C10.4092 11.9941 10.5785 12.1626 10.7051 12.3692C10.8135 12.5461 10.8954 12.741 10.945 12.9473C11.0013 13.1821 11.0006 13.4215 11.0001 13.6097C11 13.6279 10.9999 13.6456 10.9999 13.6627V18.4111C10.9999 18.8592 11.0009 19.1264 11.0184 19.3166C11.0194 19.3276 11.0204 19.3377 11.0214 19.3472C11.0303 19.3439 11.0398 19.3403 11.05 19.3363C11.2279 19.2668 11.4674 19.1482 11.8682 18.9478L12.6682 18.5478C12.8394 18.4622 12.9272 18.4178 12.9888 18.382C12.9909 18.3808 12.9928 18.3797 12.9946 18.3786C12.9948 18.3766 12.9949 18.3746 12.995 18.3724C12.9995 18.3012 12.9999 18.2027 12.9999 18.0111V13.6627C12.9999 13.6461 12.9999 13.6291 12.9999 13.6117C12.9993 13.4218 12.9987 13.1827 13.0552 12.9473C13.1043 12.7427 13.1854 12.5477 13.2948 12.3692C13.4212 12.1629 13.5908 11.9942 13.7254 11.8603C13.7378 11.848 13.7499 11.836 13.7616 11.8243L14.0858 11.5001L7.58235 4.99662ZM18.9756 5.01031C18.8588 5.00078 18.6965 5 18.3999 5H12.9999C12.4477 5 11.9999 4.55228 11.9999 4C11.9999 3.44772 12.4477 3 12.9999 3L18.4318 3C18.6842 2.99997 18.9301 2.99994 19.1383 3.01694C19.3669 3.0356 19.6368 3.07963 19.9083 3.21799C20.2863 3.41058 20.5907 3.71737 20.7816 4.09203C20.9197 4.36304 20.9639 4.6324 20.9828 4.86119C21 5.0706 21 5.31778 20.9999 5.57179V6.33723C20.9999 6.3544 21 6.37209 21.0001 6.39026C21.0006 6.57845 21.0013 6.81794 20.945 7.0527C20.8954 7.25919 20.8135 7.45397 20.7051 7.63077C20.5786 7.83729 20.4091 8.00584 20.2741 8.14017C20.2619 8.1523 20.25 8.16416 20.2384 8.17573L18.7071 9.70711C18.3165 10.0976 17.6834 10.0976 17.2928 9.70711C16.9023 9.31658 16.9023 8.68342 17.2928 8.29289L18.8242 6.76152C18.9167 6.66903 18.9627 6.62262 18.9947 6.5876C18.9957 6.5865 18.9966 6.58546 18.9975 6.58446C18.9976 6.58369 18.9976 6.5829 18.9976 6.58208C18.9998 6.53419 18.9999 6.46886 18.9999 6.33723V5.59998C18.9999 5.30381 18.9991 5.14154 18.9895 5.0252C18.9891 5.02033 18.9887 5.01574 18.9883 5.01141C18.9843 5.01104 18.98 5.01067 18.9756 5.01031Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_1_4516">
                    <rect width="1em" height="1em" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
