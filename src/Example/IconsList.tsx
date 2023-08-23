import React from 'react';
import * as IconList from '../icons';

import './index.scss';

const IconsList = () => {
    return (
        <div className="test__svgs">
            {Object.keys(IconList).map((iconKey: string, key: number) => {
                // @ts-ignore
                const Icon: React.FC = IconList[iconKey];

                return (
                    <div key={key}>
                        <Icon /> <span>{iconKey}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default IconsList;
