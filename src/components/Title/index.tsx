import React from 'react';
import './index.scss';

interface Props {
    title: string;
    subtitle?: string;
    style?: React.CSSProperties;
    subtitleStyle?: React.CSSProperties;
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Title = ({ title, subtitle, style = {}, subtitleStyle = {}, type = 'h3' }: Props) => {
    return (
        <div className="title" style={style}>
            <TitleType title={title} type={type} />
            {subtitle && (
                <span className="title__subtitle" style={subtitleStyle}>
                    {subtitle}
                </span>
            )}
        </div>
    );
};

const TitleType = ({ title, type }: { title: Props['title']; type: Props['type'] }) => {
    switch (type) {
        case 'h1':
            return <h1>{title}</h1>;
        case 'h2':
            return <h2>{title}</h2>;
        case 'h3':
            return <h3>{title}</h3>;
        case 'h4':
            return <h4>{title}</h4>;
        case 'h5':
            return <h5>{title}</h5>;
        case 'h6':
            return <h6>{title}</h6>;
        default:
            return <h3>{title}</h3>;
    }
};

export default Title;
