import React, { FormEvent } from 'react';

import './index.scss';

interface Props {
    children: React.ReactNode;
    title: string;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    style?: React.CSSProperties;
}

const Form = ({ children, title, onSubmit, style = {} }: Props) => {
    return (
        <div className="form">
            <h2 className="form__title">{title}</h2>
            <form className="form__element" onSubmit={onSubmit} style={style}>
                {children}
            </form>
        </div>
    );
};

export default Form;
