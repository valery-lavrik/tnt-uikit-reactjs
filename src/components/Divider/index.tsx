import React from 'react';
import './index.scss';

export interface DividerProps {
    vertical?: boolean;
    style?: React.CSSProperties;
}

const Divider = ({ vertical = false, style = {} }: DividerProps) => {
    return <div className={vertical ? 'divider--vertical' : 'divider--horizontal'} style={style}></div>;
};

export default Divider;
