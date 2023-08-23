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
                d="M14.7524 4.01295C14.2842 4.54213 14 5.23788 14 6C14 7.65685 15.3431 9 17 9C18.6569 9 20 7.65685 20 6C20 4.34315 18.6569 3 17 3C16.1399 3 15.3644 3.36193 14.8174 3.94179C14.7968 3.96663 14.7751 3.99037 14.7524 4.01295ZM12.4101 4.01376C12.1462 4.62258 12 5.29422 12 6C12 8.76142 14.2386 11 17 11C17.3425 11 17.6769 10.9656 18 10.9V13.7224C18 14.1655 18.176 14.5902 18.4892 14.9034L18.9997 15.4139L19 16H5V15.4141L5.51084 14.9034C5.82397 14.5902 6 14.1655 6 13.7224V9.99998C6 6.6863 8.68628 4 12 4C12.1379 4 12.2746 4.00464 12.4101 4.01376ZM13.7574 2.19387C13.1912 2.06686 12.6029 2 12 2C7.58172 2 4 5.58172 4 9.99998V13.5858L3.58584 14C3.21116 14.3748 3 14.8833 3 15.4141V16C3 17.1046 3.89543 18 5 18H8C8 20.2091 9.79086 22 12 22C14.2091 22 16 20.2091 16 18H19C20.1046 18 21 17.1046 21 16V15.4142C21 14.8835 20.789 14.3749 20.4143 14.0001L20 13.5858V10.0004C21.2144 9.08816 22 7.63582 22 6C22 3.23858 19.7614 1 17 1C15.7627 1 14.6304 1.4494 13.7574 2.19387ZM10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18H10Z"
                fill="currentColor"
            />
        </svg>
    );
}
