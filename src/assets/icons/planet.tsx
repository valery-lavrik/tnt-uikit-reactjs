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
                d="M12 5C8.13398 5 4.99998 8.13401 4.99998 12C4.99998 13.9924 5.83241 15.7905 7.16845 17.0652C8.90398 16.6077 10.9445 15.7638 13.0259 14.5622C15.4681 13.1521 17.4556 11.5444 18.735 10.0857C17.9023 7.15026 15.2022 5 12 5ZM18.9646 12.7078C17.6255 13.9514 15.9374 15.1906 14.0259 16.2942C12.4367 17.2117 10.8437 17.9486 9.34799 18.4802C10.1659 18.8153 11.0614 19 12 19C15.627 19 18.6098 16.2414 18.9646 12.7078ZM6.6486 19.2369C8.14437 20.3448 9.99566 21 12 21C16.9705 21 21 16.9706 21 12C21 11.524 20.963 11.0567 20.8918 10.6007C21.3991 9.92169 21.7933 9.23837 22.0257 8.57543C22.3214 7.73158 22.3948 6.78976 21.9181 5.96411C21.4531 5.15879 20.6299 4.75109 19.776 4.57811C18.9866 4.41821 18.0662 4.43308 17.0868 4.57439C15.6397 3.58119 13.8877 3 12 3C7.02941 3 2.99998 7.02944 2.99998 12C2.99998 12.1034 3.00172 12.2063 3.00518 12.3089C2.18764 13.2067 1.54595 14.1172 1.16912 14.9878C0.759606 15.9338 0.589268 17.0215 1.13346 17.9641C1.61016 18.7898 2.46251 19.1971 3.34118 19.3629C4.22406 19.5295 5.26824 19.4834 6.37787 19.2874C6.46734 19.2716 6.55759 19.2548 6.6486 19.2369ZM4.84254 17.4571C4.26215 16.697 3.80008 15.8417 3.48383 14.9188C3.27925 15.2273 3.11951 15.5167 3.00455 15.7822C2.70731 16.4689 2.7794 16.815 2.86551 16.9641C2.9411 17.095 3.14804 17.2912 3.71205 17.3976C4.02226 17.4562 4.40066 17.4783 4.84254 17.4571ZM19.1221 6.49697C19.2125 6.50812 19.2982 6.52194 19.3789 6.5383C19.9141 6.64672 20.1122 6.83619 20.186 6.96411C20.2616 7.09504 20.328 7.37233 20.1382 7.91399C20.1229 7.9577 20.1062 8.00228 20.088 8.04773C19.8183 7.49684 19.494 6.97757 19.1221 6.49697Z"
                fill="currentColor"
            />
        </svg>
    );
}
