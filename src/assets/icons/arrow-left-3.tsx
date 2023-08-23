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
                d="M20.2891 12.6592L11.8111 12.6592C11.4189 12.6592 11.1006 12.3409 11.1006 11.9487C11.1006 11.5565 11.4189 11.2382 11.8111 11.2382L20.2891 11.2382C20.6813 11.2382 20.9996 11.5565 20.9996 11.9487C20.9996 12.3409 20.6813 12.6592 20.2891 12.6592Z"
                fill="#37383C"
            />
            <mask id="mask0_1_10208" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="3" y="6" width="10" height="12">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5214 6.50024L12.5214 17.3966H3.58196L3.58196 6.50024L12.5214 6.50024Z"
                    fill="white"
                />
            </mask>
            <g mask="url(#mask0_1_10208)">
                <path
                    d="M11.8109 17.3969C11.6783 17.3969 11.5475 17.36 11.4319 17.288L3.91363 12.5502C3.70711 12.4195 3.58111 12.193 3.58111 11.9486C3.58111 11.7042 3.70711 11.4778 3.91363 11.347L11.4319 6.60924C11.6508 6.47187 11.9274 6.46335 12.1538 6.58935C12.3812 6.7144 12.5214 6.95219 12.5214 7.21082L12.5214 16.6864C12.5214 16.945 12.3812 17.1828 12.1538 17.3079C12.0468 17.3676 11.9284 17.3969 11.8109 17.3969Z"
                    fill="#37383C"
                />
            </g>
        </svg>
    );
}
