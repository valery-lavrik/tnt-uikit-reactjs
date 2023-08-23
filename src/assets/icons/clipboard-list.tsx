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
                d="M9 5.2915H7C5.89543 5.2915 5 6.18693 5 7.2915V19.2915C5 20.3961 5.89543 21.2915 7 21.2915H17C18.1046 21.2915 19 20.3961 19 19.2915V7.2915C19 6.18693 18.1046 5.2915 17 5.2915H15M9 5.2915C9 6.39607 9.89543 7.2915 11 7.2915H13C14.1046 7.2915 15 6.39607 15 5.2915M9 5.2915C9 4.18693 9.89543 3.2915 11 3.2915H13C14.1046 3.2915 15 4.18693 15 5.2915M12 12.2915H15M12 16.2915H15M9 12.2915H9.01M9 16.2915H9.01"
                stroke="#0062FF"
                stroke-width="1.5"
                stroke-linecap="round"
            />
        </svg>
    );
}
