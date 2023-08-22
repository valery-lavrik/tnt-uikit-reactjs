import React from 'react';
import './index.scss';

interface Props {
    text: string;
    subtext: string;
}

const TableText = ({ text, subtext }: Props) => {
    return (
        <div className="table-text">
            <span>{text}</span>
            <small>{subtext}</small>
        </div>
    );
};

export default TableText;
