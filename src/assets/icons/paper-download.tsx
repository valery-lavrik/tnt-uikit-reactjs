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
                d="M18.8089 9.021C18.3574 9.021 17.7594 9.011 17.0149 9.011C15.199 9.011 13.7059 7.508 13.7059 5.675V2.459C13.7059 2.206 13.503 2 13.2525 2H7.96436C5.49604 2 3.5 4.026 3.5 6.509V17.284C3.5 19.889 5.59109 22 8.1703 22H16.0455C18.5059 22 20.5 19.987 20.5 17.502V9.471C20.5 9.217 20.298 9.012 20.0465 9.013C19.6238 9.016 19.1168 9.021 18.8089 9.021Z"
                fill="#37383C"
            />
            <path
                opacity="0.4"
                d="M16.0843 2.56729C15.7853 2.25629 15.2633 2.47029 15.2633 2.90129V5.53829C15.2633 6.64429 16.1733 7.55429 17.2793 7.55429C17.9773 7.56229 18.9453 7.56429 19.7673 7.56229C20.1883 7.56129 20.4023 7.05829 20.1103 6.75429C19.0553 5.65729 17.1663 3.69129 16.0843 2.56729Z"
                fill="#37383C"
            />
            <path
                d="M15.1052 12.7089C14.8132 12.4199 14.3432 12.4179 14.0512 12.7109L12.4622 14.3079V9.4809C12.4622 9.0699 12.1282 8.7359 11.7172 8.7359C11.3062 8.7359 10.9722 9.0699 10.9722 9.4809V14.3079L9.38224 12.7109C9.09124 12.4179 8.62024 12.4199 8.32924 12.7089C8.03724 12.9989 8.03724 13.4699 8.32624 13.7619L11.1892 16.6379H11.1902C11.2582 16.7059 11.3392 16.7609 11.4302 16.7989C11.5202 16.8359 11.6182 16.8559 11.7172 16.8559C11.8172 16.8559 11.9152 16.8359 12.0052 16.7979C12.0942 16.7609 12.1752 16.7059 12.2432 16.6389L12.2452 16.6379L15.1072 13.7619C15.3972 13.4699 15.3972 12.9989 15.1052 12.7089Z"
                fill="#37383C"
            />
        </svg>
    );
}