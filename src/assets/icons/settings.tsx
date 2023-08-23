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
                d="M9.075 3.5965C8.93581 3.56527 8.79122 3.5642 8.65139 3.59341C8.53099 3.61856 8.3953 3.68333 7.74107 4.06304L7.25341 4.34607C6.60298 4.72358 6.48031 4.80873 6.39892 4.90034C6.30444 5.00668 6.23377 5.13184 6.19158 5.26739C6.15513 5.38451 6.1454 5.53439 6.15804 6.28582L6.16518 6.71048C6.16531 6.71799 6.16544 6.72553 6.16558 6.73308C6.16639 6.77904 6.16721 6.82553 6.16655 6.87022C6.15945 7.35002 6.03727 7.8209 5.81069 8.24347C5.78807 8.28565 5.76439 8.32663 5.73754 8.3731L5.7275 8.39048C5.7001 8.43792 5.67637 8.47901 5.6509 8.52005C5.39789 8.9277 5.05073 9.26894 4.63839 9.51481C4.59517 9.54058 4.553 9.56397 4.49958 9.59358L4.13801 9.79394C3.476 10.1608 3.35091 10.2439 3.26753 10.3344C3.17044 10.4398 3.0972 10.5644 3.05271 10.6996C3.01428 10.8164 3.00265 10.966 3.00437 11.7232L3.00565 12.2854C3.00735 13.0379 3.01938 13.186 3.05787 13.3019C3.10257 13.4366 3.17546 13.5602 3.27178 13.6647C3.35466 13.7546 3.47881 13.8372 4.13602 14.2028L4.50713 14.4093C4.55648 14.4367 4.60119 14.4616 4.6451 14.488C5.05407 14.7343 5.39751 15.0743 5.64814 15.4793C5.67549 15.5234 5.701 15.568 5.72995 15.6186L5.73582 15.6289C5.73961 15.6355 5.74339 15.6421 5.74717 15.6487C5.77218 15.6923 5.79702 15.7356 5.81962 15.7784C6.03958 16.1948 6.1585 16.6573 6.16653 17.1284C6.16742 17.1807 6.16655 17.232 6.16553 17.2923L6.15853 17.7073C6.14578 18.4625 6.15523 18.6119 6.19181 18.729C6.23416 18.8647 6.30525 18.9902 6.40041 19.0968C6.48228 19.1886 6.60588 19.2739 7.25952 19.6506L7.75322 19.9351C8.40501 20.3107 8.54095 20.3749 8.66106 20.3998C8.80037 20.4286 8.94406 20.4274 9.0827 20.3963C9.2021 20.3695 9.33542 20.3034 9.98186 19.9163L10.3357 19.7045C10.3897 19.6721 10.4314 19.6472 10.4757 19.6226C10.8929 19.3907 11.3594 19.2614 11.837 19.2461C11.8855 19.2445 11.9335 19.2445 11.988 19.2445H12.0101C12.0647 19.2445 12.1132 19.2445 12.1619 19.2461C12.6403 19.2615 13.1079 19.3911 13.5259 19.6241C13.5694 19.6484 13.6112 19.6734 13.6605 19.7031L13.6661 19.7064L14.0221 19.9202C14.6708 20.3096 14.8052 20.3762 14.9252 20.4031C15.0647 20.4344 15.2087 20.4355 15.3483 20.4064C15.4687 20.3812 15.6047 20.3163 16.2587 19.9367L16.7464 19.6537C17.3969 19.2762 17.5196 19.191 17.601 19.0994C17.6955 18.993 17.7662 18.8679 17.8083 18.7324C17.8448 18.6153 17.8544 18.4658 17.8417 17.714L17.8346 17.2893C17.8345 17.2823 17.8344 17.2754 17.8342 17.2684C17.8334 17.2213 17.8326 17.1748 17.8333 17.1296C17.8404 16.6501 17.9623 16.1792 18.189 15.7563C18.2116 15.7141 18.2353 15.6731 18.2622 15.6266L18.2676 15.6173C18.2997 15.5617 18.3231 15.5214 18.3491 15.4797C18.602 15.0721 18.9489 14.731 19.3614 14.485C19.4019 14.4609 19.4432 14.438 19.4885 14.4129L19.8622 14.2058C20.524 13.8391 20.6491 13.7558 20.7325 13.6653C20.8292 13.5604 20.9024 13.4359 20.947 13.3002C20.9856 13.1831 20.9976 13.0325 20.9959 12.2766L20.9946 11.7145C20.9929 10.9629 20.9806 10.8139 20.942 10.6978C20.8974 10.5634 20.8245 10.4397 20.728 10.335C20.6451 10.2451 20.5209 10.1623 19.8639 9.79688L19.4915 9.58967C19.4418 9.56206 19.3996 9.53855 19.3572 9.51317C18.9474 9.2677 18.6024 8.92801 18.3506 8.52255C18.3246 8.48076 18.3012 8.44079 18.268 8.38336L18.2625 8.37376C18.2353 8.32665 18.2112 8.285 18.1883 8.24219C17.9622 7.82008 17.8406 7.35016 17.8333 6.87167C17.8326 6.8255 17.8334 6.77807 17.8342 6.72956C17.8344 6.72286 17.8345 6.71615 17.8346 6.70942L17.8416 6.29241C17.8543 5.53769 17.8447 5.38798 17.8081 5.27072C17.7655 5.13427 17.6945 5.00891 17.5999 4.90289C17.5182 4.81136 17.3947 4.72651 16.7401 4.34927L16.2463 4.06471C15.5941 3.68891 15.4588 3.62485 15.3388 3.60001C15.1993 3.57114 15.0556 3.57235 14.9171 3.60343C14.7977 3.63023 14.6644 3.69633 14.0179 4.08345L13.6641 4.29531C13.609 4.32833 13.5679 4.35277 13.524 4.37715C13.1067 4.60917 12.64 4.73834 12.1625 4.75367C12.1139 4.75523 12.066 4.75522 12.0115 4.75521H11.989C11.9347 4.75522 11.887 4.75523 11.8384 4.75367C11.3601 4.73828 10.892 4.60862 10.4739 4.37555C10.4321 4.35227 10.3913 4.32774 10.3464 4.30077L9.97794 4.07956C9.32905 3.69 9.19492 3.62341 9.075 3.5965ZM8.24248 1.63566C8.66157 1.54812 9.09489 1.55124 9.51284 1.64502C9.98937 1.75193 10.4178 2.00991 10.9043 2.30286C10.9384 2.32336 10.9727 2.34403 11.0074 2.36484L11.3634 2.57861C11.4257 2.61599 11.4371 2.62271 11.4477 2.62862C11.587 2.70627 11.7432 2.74957 11.9027 2.7547C11.9151 2.7551 11.9288 2.75521 12.0005 2.75521C12.0719 2.75521 12.086 2.75509 12.0983 2.7547C12.2573 2.74959 12.4129 2.70658 12.5521 2.62916C12.5643 2.62237 12.5799 2.61339 12.6366 2.5794L12.9905 2.36754C13.0253 2.3467 13.0597 2.326 13.0939 2.30547C13.578 2.01472 14.0047 1.75849 14.479 1.652C14.8954 1.55852 15.3267 1.55512 15.7442 1.64151C16.221 1.74021 16.6525 1.98959 17.1434 2.27324C17.1769 2.29263 17.2107 2.31217 17.2449 2.33184L17.7387 2.6164C17.7737 2.63658 17.8085 2.65655 17.8429 2.67635C18.3343 2.95866 18.7675 3.20753 19.0921 3.57129C19.3771 3.89062 19.5899 4.26694 19.7172 4.67466C19.8627 5.14059 19.8537 5.64013 19.8434 6.20832C19.8427 6.24724 19.842 6.28648 19.8413 6.32606L19.8343 6.74306C19.833 6.81785 19.8329 6.82948 19.833 6.8411C19.8355 7.00079 19.8761 7.15738 19.9513 7.29792C19.9572 7.3088 19.9642 7.32115 19.9999 7.38297C20.0318 7.43833 20.0416 7.4546 20.0495 7.46722C20.1336 7.60258 20.2486 7.71574 20.385 7.79744C20.3957 7.80391 20.4086 7.81125 20.47 7.84539L20.8362 8.04912C20.8709 8.06839 20.9052 8.08746 20.9393 8.10636C21.4338 8.38063 21.8688 8.62192 22.1983 8.97928C22.4868 9.29216 22.7058 9.66307 22.8402 10.0677C22.9933 10.5291 22.9939 11.0267 22.9944 11.5925C22.9945 11.6313 22.9945 11.6705 22.9946 11.7099L22.9959 12.272C22.996 12.3108 22.9961 12.3492 22.9962 12.3873C22.9982 12.9587 22.9999 13.4599 22.8469 13.9252C22.713 14.3321 22.4936 14.7057 22.2032 15.0208C21.8717 15.3804 21.4335 15.6225 20.9349 15.898C20.9008 15.9169 20.8663 15.9359 20.8316 15.9551L20.47 16.1555C20.4076 16.1901 20.3959 16.1967 20.3857 16.2028C20.2485 16.2846 20.1329 16.3981 20.0484 16.5343C20.041 16.5463 20.0317 16.5618 19.9994 16.6177C19.9642 16.6786 19.9573 16.6907 19.9516 16.7014C19.8761 16.8422 19.8354 16.9992 19.833 17.1592C19.8329 17.1705 19.8331 17.1812 19.8343 17.2539L19.8415 17.6803C19.8421 17.7193 19.8428 17.7579 19.8435 17.7962C19.8537 18.3634 19.8627 18.8616 19.718 19.3267C19.5913 19.7339 19.3791 20.1092 19.0961 20.4278C18.7728 20.7917 18.3419 21.041 17.8514 21.3249C17.818 21.3443 17.7843 21.3638 17.7503 21.3835L17.2627 21.6665C17.2285 21.6864 17.1945 21.7061 17.1609 21.7257C16.6687 22.0122 16.2358 22.2641 15.7572 22.3641C15.3377 22.4517 14.9049 22.4483 14.4873 22.3546C14.0105 22.2477 13.5819 21.9896 13.0948 21.6963C13.0611 21.676 13.027 21.6555 12.9927 21.6349L12.6366 21.4211C12.5763 21.3849 12.5632 21.3772 12.5522 21.3711C12.4128 21.2934 12.257 21.2502 12.0976 21.2451C12.0852 21.2447 12.0707 21.2445 11.9991 21.2445C11.9276 21.2445 11.9135 21.2447 11.9012 21.2451C11.9011 21.2451 11.9012 21.2451 11.9012 21.2451C11.7423 21.2502 11.5869 21.2931 11.4475 21.3706C11.4357 21.3772 11.4211 21.3857 11.3631 21.4204L11.0093 21.6322C10.9746 21.653 10.9403 21.6736 10.9062 21.6941C10.4218 21.985 9.9952 22.2412 9.52077 22.3477C9.10452 22.4411 8.6733 22.4447 8.25572 22.3583C7.77843 22.2595 7.34644 22.0098 6.85467 21.7257C6.82161 21.7066 6.78828 21.6873 6.75465 21.6679L6.26095 21.3834C6.22713 21.364 6.19358 21.3447 6.1603 21.3255C5.66663 21.0419 5.23339 20.7929 4.90813 20.4284C4.62373 20.1097 4.41021 19.7336 4.28267 19.325C4.13732 18.8594 4.14639 18.3601 4.1567 17.7928C4.15741 17.7533 4.15813 17.7136 4.15881 17.6735L4.16569 17.266C4.16695 17.1916 4.16705 17.1758 4.16682 17.1625C4.16414 17.0056 4.12454 16.8514 4.05115 16.7125C4.04561 16.702 4.04007 16.6923 4.00289 16.6274L4.00006 16.6224C3.96209 16.5561 3.95448 16.543 3.94751 16.5318C3.86356 16.3962 3.74905 16.283 3.61338 16.2013C3.60224 16.1946 3.58959 16.1875 3.52207 16.1499L3.16373 15.9506C3.12876 15.9311 3.09405 15.9119 3.05963 15.8928C2.56578 15.6189 2.13074 15.3776 1.80142 15.0204C1.51275 14.7074 1.29396 14.3364 1.15973 13.9321C1.00681 13.4714 1.00634 12.9744 1.00582 12.4108C1.00578 12.3708 1.00574 12.3305 1.00565 12.2899L1.00437 11.7278C1.00428 11.6874 1.00414 11.6473 1.004 11.6076C1.00197 11.0393 1.00018 10.5388 1.15288 10.0746C1.28692 9.6672 1.50682 9.29369 1.79688 8.97898C2.12823 8.61946 2.56642 8.37736 3.06453 8.10215C3.09893 8.08314 3.13362 8.06397 3.16858 8.0446L3.53015 7.84423C3.5893 7.81145 3.60294 7.80367 3.61409 7.79702C3.75137 7.71516 3.86715 7.60142 3.95159 7.46537C3.95808 7.45492 3.96528 7.44271 4.00027 7.38213C4.03548 7.32118 4.04234 7.30908 4.04809 7.29835C4.12374 7.15727 4.1644 7.0003 4.16677 6.84061C4.16692 6.83035 4.16677 6.8212 4.16577 6.76202L4.15832 6.31947C4.15767 6.28098 4.15699 6.24281 4.15631 6.20496C4.14608 5.63686 4.1371 5.13844 4.28192 4.6731C4.40863 4.26592 4.62072 3.89057 4.90377 3.57198C5.22711 3.20805 5.65791 2.95872 6.14852 2.67478C6.1819 2.65547 6.21555 2.63599 6.24947 2.6163L6.73713 2.33327C6.7716 2.31326 6.80575 2.29338 6.83962 2.27367C7.33136 1.98744 7.76402 1.73559 8.24248 1.63566ZM12 8.99991C10.3431 8.99991 8.99998 10.3431 8.99998 11.9999C8.99998 13.6568 10.3431 14.9999 12 14.9999C13.6568 14.9999 15 13.6568 15 11.9999C15 10.3431 13.6568 8.99991 12 8.99991ZM6.99998 11.9999C6.99998 9.23849 9.23855 6.99991 12 6.99991C14.7614 6.99991 17 9.23849 17 11.9999C17 14.7613 14.7614 16.9999 12 16.9999C9.23855 16.9999 6.99998 14.7613 6.99998 11.9999Z"
                fill="currentColor"
            />
        </svg>
    );
}
