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
                d="M12 4C8.68625 4.00001 5.99995 6.6863 5.99995 10V13.7224C5.99995 14.166 5.82342 14.5906 5.51063 14.9034L5.12112 15.2929C5.05717 15.3569 5.02535 15.3888 5.0028 15.4128C5.00225 15.4134 5.00172 15.414 5.00121 15.4145C5.00117 15.4155 5.00114 15.4165 5.00111 15.4175C5.00007 15.4504 4.99995 15.4955 4.99995 15.5858C4.99995 15.7899 5.00033 15.9015 5.00491 15.9825C5.00515 15.9867 5.00539 15.9906 5.00564 15.9943C5.00928 15.9945 5.0132 15.9948 5.0174 15.995C5.0984 15.9996 5.21 16 5.41402 16H18.5856C18.7896 16 18.9013 15.9996 18.9824 15.995C18.9867 15.9948 18.9907 15.9945 18.9945 15.9943C18.9947 15.9906 18.995 15.9867 18.9952 15.9825C18.9998 15.9015 19.0002 15.7899 19.0002 15.5858C19.0002 15.4961 19 15.4509 18.9989 15.4185C18.9989 15.4172 18.9989 15.4159 18.9988 15.4148C18.9983 15.4142 18.9978 15.4137 18.9972 15.4131C18.9746 15.389 18.9427 15.357 18.8786 15.2929L18.4891 14.9034C18.1759 14.5902 18 14.1654 18 13.7224V10C18 6.68628 15.3137 3.99999 12 4ZM16 18H18.5856C18.6128 18 18.6407 18.0001 18.6692 18.0002C18.9612 18.0013 19.3204 18.0027 19.6394 17.8951C20.2309 17.6955 20.6956 17.2312 20.8953 16.6393C21.0028 16.3204 21.0015 15.9614 21.0004 15.6697C21.0003 15.641 21.0002 15.613 21.0002 15.5858C21.0002 15.575 21.0002 15.5639 21.0002 15.5526C21.0004 15.4198 21.0007 15.2554 20.9736 15.0904C20.9238 14.7869 20.8047 14.4984 20.6247 14.2477C20.5276 14.1126 20.4108 13.9962 20.3185 13.9043C20.3098 13.8956 20.3012 13.887 20.2929 13.8787L20 13.5858V10C20 5.58172 16.4182 1.99999 12 2C7.58168 2.00001 3.99995 5.58173 3.99995 10V13.5856L3.70691 13.8787C3.69875 13.8868 3.69034 13.8952 3.68173 13.9038C3.58903 13.9962 3.47233 14.1124 3.37517 14.2477C3.19494 14.4987 3.0761 14.7873 3.02635 15.0904C2.99936 15.2548 2.99967 15.4195 2.99991 15.5506C2.99993 15.5626 2.99995 15.5744 2.99995 15.5858C2.99995 15.6131 2.99985 15.6411 2.99974 15.6697C2.99864 15.9615 2.99729 16.3203 3.10486 16.6393C3.30437 17.2308 3.76855 17.6954 4.36052 17.8951C4.67949 18.0026 5.03845 18.0013 5.33038 18.0002C5.35894 18.0001 5.38685 18 5.41402 18H7.99995C7.99995 20.2091 9.79082 22 12 22C14.2091 22 16 20.2091 16 18ZM9.99995 18C9.99995 19.1046 10.8954 20 12 20C13.1045 20 14 19.1046 14 18H9.99995Z"
                fill="currentColor"
            />
        </svg>
    );
}
