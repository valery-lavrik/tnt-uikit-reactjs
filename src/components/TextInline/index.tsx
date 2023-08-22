import React from 'react';
import './index.scss';

interface Props {
    title: string;
    text: string;
    style?: React.CSSProperties;
}

const TextInline = ({ title, text, style = {} }: Props) => {
    return (
        <div className="text-inline" style={style}>
            <span className="text-inline__title">{title}:</span>
            <span>{text}</span>
        </div>
    );
};

export default TextInline;
