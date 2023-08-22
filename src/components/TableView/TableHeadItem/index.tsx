import React from 'react';
import { ArrowDownIcon } from '../../../icons';
import { DirectionType } from '../types';

import './index.scss';

interface Props {
    onClick: () => void;
    sort: DirectionType;
    title: string;
    sortable?: boolean;
}

const TableHeadItem = ({ sort, title, onClick, sortable }: Props) => {
    return (
        <th
            className={`table-head-item ${sortable ? 'table-head-item--sortable' : ''} ${sort === 'desc' ? '' : 'table-head-item--asc'} ${
                title === 'ID' ? 'table-head-item--small' : ''
            }`}
            onClick={onClick}
        >
            <div className="table-head-item__content">
                {title} {!!sort && <ArrowDownIcon />}
            </div>
        </th>
    );
};

export default TableHeadItem;
