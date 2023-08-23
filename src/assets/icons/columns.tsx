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
                d="M7.41614 3.00004C7.44382 3.00007 7.47178 3.00009 7.50003 3.00009C7.52827 3.00009 7.55623 3.00007 7.58391 3.00004C7.96461 2.99974 8.29244 2.99948 8.5853 3.05773C9.77551 3.29448 10.7055 4.22492 10.9422 5.41486C11.0006 5.70824 11.0004 6.03644 11.0001 6.41861C11 6.4455 11 6.47266 11 6.50009V17.5001C11 17.5275 11 17.5547 11.0001 17.5816C11.0004 17.9637 11.0006 18.292 10.9422 18.5854C10.7055 19.7753 9.77546 20.7057 8.5853 20.9424C8.29244 21.0007 7.96464 21.0004 7.58394 21.0001C7.55627 21.0001 7.52831 21.0001 7.50007 21.0001C7.47183 21.0001 7.44387 21.0001 7.4162 21.0001C7.0355 21.0004 6.70766 21.0007 6.4148 20.9424C5.22478 20.7057 4.2944 19.7755 4.05767 18.5854C3.99942 18.2925 3.99968 17.9647 3.99998 17.584C4 17.5563 4.00003 17.5283 4.00003 17.5001V6.50009C4.00003 6.47184 4 6.44388 3.99998 6.41621C3.99968 6.03551 3.99942 5.70771 4.05767 5.41486C4.29439 4.22479 5.22473 3.29445 6.4148 3.05773C6.70765 2.99948 7.03545 2.99974 7.41614 3.00004ZM7.50003 5.00009C6.98745 5.00009 6.87723 5.00493 6.80498 5.0193C6.40829 5.09821 6.09815 5.40835 6.01924 5.80504C6.00487 5.87729 6.00003 5.98751 6.00003 6.50009V17.5001C6.00003 18.0127 6.00487 18.1229 6.01924 18.1952C6.09814 18.5918 6.40824 18.9019 6.80498 18.9809C6.87723 18.9952 6.98749 19.0001 7.50007 19.0001C8.01265 19.0001 8.12287 18.9952 8.19512 18.9809C8.59172 18.902 8.90174 18.592 8.98067 18.1952C8.99506 18.1228 9.00003 18.0121 9.00003 17.5001V6.50009C9.00003 5.98808 8.99506 5.87741 8.98067 5.80504C8.90173 5.40821 8.59167 5.09818 8.19512 5.0193C8.12287 5.00493 8.01261 5.00009 7.50003 5.00009ZM16.4161 3.00004C16.4438 3.00007 16.4718 3.00009 16.5 3.00009C16.5283 3.00009 16.5562 3.00007 16.5839 3.00004C16.9646 2.99974 17.2924 2.99948 17.5853 3.05773C18.7755 3.29448 19.7055 4.22492 19.9422 5.41486C20.0006 5.70824 20.0004 6.03644 20.0001 6.41861C20 6.4455 20 6.47266 20 6.50009V17.5001C20 17.5275 20 17.5547 20.0001 17.5816C20.0004 17.9637 20.0006 18.292 19.9422 18.5854C19.7055 19.7753 18.7755 20.7057 17.5853 20.9424C17.2924 21.0007 16.9646 21.0004 16.5839 21.0001C16.5563 21.0001 16.5283 21.0001 16.5001 21.0001C16.4718 21.0001 16.4439 21.0001 16.4162 21.0001C16.0355 21.0004 15.7077 21.0007 15.4148 20.9424C14.2248 20.7057 13.2944 19.7755 13.0577 18.5854C12.9994 18.2925 12.9997 17.9647 13 17.584C13 17.5563 13 17.5283 13 17.5001V6.50009C13 6.47184 13 6.44388 13 6.41621C12.9997 6.03551 12.9994 5.70771 13.0577 5.41486C13.2944 4.22479 14.2247 3.29445 15.4148 3.05773C15.7077 2.99948 16.0354 2.99974 16.4161 3.00004ZM16.5 5.00009C15.9874 5.00009 15.8772 5.00493 15.805 5.0193C15.4083 5.09821 15.0981 5.40835 15.0192 5.80504C15.0049 5.87729 15 5.98751 15 6.50009V17.5001C15 18.0127 15.0049 18.1229 15.0192 18.1952C15.0981 18.5918 15.4082 18.9019 15.805 18.9809C15.8772 18.9952 15.9875 19.0001 16.5001 19.0001C17.0126 19.0001 17.1229 18.9952 17.1951 18.9809C17.5917 18.902 17.9017 18.592 17.9807 18.1952C17.9951 18.1228 18 18.0121 18 17.5001V6.50009C18 5.98808 17.9951 5.87741 17.9807 5.80504C17.9017 5.40821 17.5917 5.09818 17.1951 5.0193C17.1229 5.00493 17.0126 5.00009 16.5 5.00009Z"
                fill="currentColor"
            />
        </svg>
    );
}