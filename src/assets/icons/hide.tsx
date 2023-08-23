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
                d="M3.29291 3.29289C3.68343 2.90237 4.3166 2.90237 4.70712 3.29289L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L16.4771 17.8913C15.1423 18.541 13.6257 19 12 19C8.04386 19 4.68988 16.2855 2.8819 14.488C2.86291 14.4692 2.84397 14.4504 2.8251 14.4317C2.39877 14.0087 2.00733 13.6204 1.78222 12.9303C1.68398 12.6291 1.65296 12.285 1.65295 11.9999C1.65295 11.7148 1.68396 11.3706 1.78225 11.0694C2.00744 10.3792 2.39946 9.99041 2.82639 9.56698C2.84534 9.54818 2.86436 9.52932 2.88343 9.51036L3.55361 10.1846L2.88343 9.51036C3.62269 8.77557 4.59151 7.91679 5.73316 7.14737L3.29291 4.70711C2.90238 4.31658 2.90238 3.68342 3.29291 3.29289ZM7.17777 8.59197C6.03349 9.31834 5.04629 10.1805 4.29335 10.9289C3.80092 11.4183 3.74747 11.494 3.68359 11.6898C3.68361 11.6897 3.68084 11.6984 3.6769 11.7173C3.67305 11.7358 3.6689 11.76 3.66514 11.79C3.65752 11.8506 3.65295 11.923 3.65295 11.9998C3.65296 12.0767 3.65753 12.1491 3.66515 12.2098C3.66891 12.2397 3.67306 12.264 3.67691 12.2824C3.68086 12.3014 3.68363 12.3101 3.68363 12.3101C3.74752 12.506 3.80071 12.5813 4.29196 13.0697C6.04284 14.8103 8.89486 17 12 17C13.0183 17 14.0151 16.7648 14.964 16.3782L13.2932 14.7074C12.9014 14.8948 12.4626 14.9999 12 14.9999C10.3432 14.9999 9.00001 13.6568 9.00001 11.9999C9.00001 11.5372 9.1052 11.0984 9.29256 10.7068L7.17777 8.59197ZM10.8731 5.07256C11.2422 5.02535 11.6182 5 12 5C15.9561 5 19.3104 7.7145 21.1184 9.51193C21.1376 9.53099 21.1567 9.54996 21.1758 9.56885C21.6017 9.99138 21.9933 10.3798 22.2183 11.0698C22.3167 11.3712 22.3475 11.7156 22.3474 12.0006C22.3473 12.2857 22.3161 12.6297 22.2179 12.9306C21.9926 13.621 21.6006 14.0097 21.1733 14.4336C21.1545 14.4522 21.1357 14.4709 21.1168 14.4897C20.8301 14.7746 20.5103 15.0769 20.1604 15.3845C19.7457 15.7493 19.1139 15.7088 18.7491 15.2941C18.3844 14.8794 18.4249 14.2475 18.8396 13.8827C19.1559 13.6046 19.446 13.3304 19.7069 13.0712C20.1991 12.5819 20.2526 12.5061 20.3165 12.3102L20.3165 12.3103M12 7C11.7068 7 11.4157 7.01946 11.1269 7.0564C10.5791 7.12648 10.0782 6.73919 10.0081 6.19137C9.93802 5.64355 10.3253 5.14264 10.8731 5.07256M12 7C15.1052 7 17.9575 9.18967 19.7084 10.9303L12 7ZM19.7084 10.9303C20.1999 11.4189 20.2531 11.4942 20.3169 11.69L19.7084 10.9303ZM20.3169 11.69L20.3169 11.69L20.3169 11.69ZM20.3169 11.69C20.3171 11.6905 20.3198 11.6992 20.3236 11.7174L20.3169 11.69ZM20.3236 11.7174C20.3274 11.7358 20.3315 11.76 20.3353 11.7899L20.3236 11.7174ZM20.3353 11.7899C20.3429 11.8505 20.3474 11.9228 20.3474 11.9997L20.3353 11.7899ZM20.3474 11.9997C20.3474 12.0766 20.3427 12.1489 20.3351 12.2097L20.3474 11.9997ZM20.3351 12.2097C20.3313 12.2396 20.3272 12.2639 20.3233 12.2824L20.3351 12.2097ZM20.3233 12.2824C20.3214 12.2915 20.3197 12.2985 20.3184 12.3034L20.3233 12.2824ZM20.3184 12.3034C20.3173 12.3077 20.3166 12.3099 20.3165 12.3102L20.3184 12.3034Z"
                fill="currentColor"
            />
        </svg>
    );
}