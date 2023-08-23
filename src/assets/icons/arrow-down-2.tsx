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
                d="M10.8672 7.21433L15.0865 14.0624C15.1805 14.2158 15.1715 14.4122 15.0605 14.5558C14.5594 15.2064 14.0514 15.7877 13.6244 16.1755C13.6244 16.1755 13.2824 16.5096 13.0654 16.6542C12.7693 16.8877 12.3823 17 12.0063 17C11.5843 17 11.1853 16.8769 10.8662 16.6317C10.8092 16.576 10.5582 16.364 10.3532 16.1638C9.07715 14.9954 6.96905 11.9455 6.33002 10.3414C6.22701 10.1079 6.012 9.48466 6 9.16131C6 8.84967 6.068 8.54879 6.21701 8.25962C6.42202 7.90403 6.74004 7.62561 7.11706 7.46931C7.37907 7.36869 8.16511 7.21336 8.18811 7.21336C8.74914 7.11274 9.53718 7.03751 10.4572 7.00039C10.6222 6.99355 10.7822 7.07659 10.8672 7.21433Z"
                fill="#37383C"
            />
            <path
                opacity="0.4"
                d="M13.1398 7.67231C12.9528 7.37044 13.1918 6.99043 13.5508 7.00508C14.3928 7.04123 15.1349 7.10375 15.6869 7.17995C15.6989 7.19167 16.678 7.347 17.009 7.52577C17.624 7.8374 18 8.44895 18 9.1064V9.16111C17.989 9.58509 17.613 10.4868 17.59 10.4868C17.401 10.941 17.081 11.534 16.696 12.1719C16.522 12.4591 16.0949 12.466 15.9179 12.1788L13.1398 7.67231Z"
                fill="#37383C"
            />
        </svg>
    );
}