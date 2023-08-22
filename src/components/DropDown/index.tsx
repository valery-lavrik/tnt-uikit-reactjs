import React from 'react';
import { useState, useRef } from 'react';

import './index.scss';

type DropDownPropsType = {
    Button: (props: any) => JSX.Element;
    Component: (props: any) => JSX.Element;
};

export default function DropDown({ Button, Component }: DropDownPropsType) {
    const container = useRef<HTMLDivElement>();
    const [dropdownState, setDropdownState] = useState<boolean>(false);

    const handleDropdownClick = () => {
        if (!dropdownState) {
            document.addEventListener('click', handleClickOutside);
            document.addEventListener('keydown', handleEscClick);
            setDropdownState(!dropdownState);
        } else {
            close();
        }
    };

    const close = () => {
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('keydown', handleEscClick);
        setDropdownState(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (container.current && !container.current.contains(e.target as Node)) close();
    };

    const handleEscClick = (e: KeyboardEvent) => {
        if (e.code === 'Escape') close();
    };

    return (
        // @ts-ignore
        <div className="drop_down" ref={container}>
            <span className="drop_down__label" onClick={handleDropdownClick}>
                <Button />
            </span>
            {dropdownState && (
                <div className="drop_down__content">
                    <Component close={close} />
                </div>
            )}
        </div>
    );
}
