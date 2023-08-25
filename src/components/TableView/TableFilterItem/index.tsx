import React from 'react';
import { OneFilterType, OneFilterValueType } from '../types';
import { useState } from 'react';

import Badge from '../../Badge';
import Checkbox from '../../Checkbox';

import './index.scss';

interface Props {
    filter: OneFilterType;
    initial: OneFilterValueType[];
    onFilterChange: (filtersArray: OneFilterType, values: OneFilterValueType[]) => void;
}

const TableFilterItem = ({ filter, onFilterChange, initial = [] }: Props) => {
    const [values, setValues] = useState<OneFilterValueType[]>(initial);
    const allChecked = filter.values.length === values.length;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, itemField: OneFilterValueType) => {
        setValues((prev) => (e.target.checked ? [...prev, itemField] : [...prev.filter((a) => a.title !== itemField.title)]));
    };

    const onCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => setValues(e.target.checked ? [...filter.values] : []);

    const isChecked = (item: OneFilterValueType) => !!values.find((a) => a.title === item.title);

    return (
        <div className="table-filter-item">
            <label className={`table-filter-item__element ${allChecked ? 'table-filter-item__element--active' : ''}`}>
                <Checkbox checked={allChecked} onChange={(e) => onCheckAll(e)} /> <span>Все</span>
                {/* <Badge style={{ marginLeft: 'auto' }}>{filter.values.length}</Badge> */}
            </label>
            {filter.values.map((item, i) => (
                <label
                    className={`table-filter-item__element ${isChecked(item) ? 'table-filter-item__element--active' : ''}`}
                    key={`${item.title}-filter-${i}`}
                >
                    <Checkbox checked={isChecked(item)} onChange={(e) => onChange(e, item)} />
                    <span>{item.title || 'Нет значения'}</span>
                    <Badge style={{ marginLeft: 'auto' }}>{item.count}</Badge>
                </label>
            ))}
            <button className="table-filter-item__button" onClick={() => onFilterChange(filter, values)}>
                Применить
            </button>
        </div>
    );
};

export default TableFilterItem;
