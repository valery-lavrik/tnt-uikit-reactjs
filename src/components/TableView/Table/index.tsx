import React, { useState } from 'react';
import { DirectionType, TableActionType, TableColumnType, TableDataType } from '../types';
import { MoreVerticalIcon } from '../../../icons';

import TableHeadItem from '../TableHeadItem';
import DropDown from '../../DropDown';
import Checkbox from '../../Checkbox';

import './index.scss';

interface Props {
    data: TableDataType[];
    header: TableColumnType[];
    actionItems: TableActionType[];
    multipleItems: TableDataType[];
    onSortChange: (val: string, direction: DirectionType) => void;
    onItemClickAction: (item: TableDataType, action: TableActionType) => void;
    setMultipleItems: React.Dispatch<React.SetStateAction<TableDataType[]>>;
    maxFieldLength: number;
    tdGen?: (col: TableColumnType, data: any, model: any) => any;
    customHeader?: (ind: number) => TableColumnType | null;
}

const Table = ({
    data,
    header,
    actionItems,
    multipleItems,
    onSortChange,
    onItemClickAction,
    setMultipleItems,
    maxFieldLength,
    tdGen = () => null,
    customHeader = () => null,
}: Props) => {
    const [sort, setSort] = useState<{ [key: string]: DirectionType }>({});

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, item: TableDataType) => {
        setMultipleItems((prev) => (e.target.checked ? [...prev, item] : [...prev.filter((el) => el !== item)]));
    };

    const onCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMultipleItems(e.target.checked ? [...data] : []);
    };

    const onSortClick = (item: TableColumnType): void => {
        if (!item?.hasSort) return;
        const prevSort: DirectionType = sort?.[item.id] || 'asc';
        const nextSort: DirectionType = prevSort === 'asc' ? 'desc' : 'asc';
        setSort({ [item.id]: nextSort });
        onSortChange(item.id, nextSort);
    };

    // Генератор ячейки
    const tdGenerator = (Comp: any) => {
        if (!Comp) return null;

        if ((['string', 'number'].includes(typeof Comp))) {
            return `${Comp}`.length > maxFieldLength ? <span title={Comp}>{`${Comp}`.substring(0, maxFieldLength)}...</span> : Comp
        }

        return <Comp />;
    }

    return (
        <div className="table">
            <div className="table__container">
                <table className="table__element">
                    <thead>
                        <tr>
                            <th className="table-head-item table-head-item--small">
                                <Checkbox checked={multipleItems.length === data.length && !!data.length} onChange={(e) => onCheckAll(e)} />
                            </th>
                            {header.map((item, index) => {
                                const custonHeader = customHeader(index);

                                return ([
                                    <TableHeadItem
                                        key={`${item.id}-th`}
                                        sortable={item.hasSort}
                                        sort={sort?.[item.id] || ''}
                                        title={item.title}
                                        onClick={() => onSortClick(item)}
                                    />,
                                    !!custonHeader && <TableHeadItem
                                        key={`${custonHeader.id}-th`}
                                        sortable={custonHeader.hasSort}
                                        sort={sort?.[custonHeader.id] || ''}
                                        title={custonHeader.title}
                                        onClick={() => onSortClick(custonHeader)}
                                    />
                                ]);
                            })}
                            <TableHeadItem sort={''} title={''} onClick={() => { }} />
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => {
                            const checked = multipleItems.includes(row);
                            return (
                                <tr key={row.id} className={`table__row ${checked ? 'table__row--checked' : ''}`}>
                                    <td className="table__cell">
                                        <Checkbox checked={checked} onChange={(e) => onChange(e, row)} />
                                    </td>
                                    {header.map((col, index) => {
                                        const tdGenComp = tdGen(col, row[col.id], row);
                                        const Comp = tdGenComp !== null ? tdGenComp : row[col.id];

                                        const custonHeader = customHeader(index);
                                        let CustomTd: any = null;
                                        if (!!custonHeader) {
                                            CustomTd = tdGen(custonHeader, null, row);
                                        }

                                        return ([
                                            <td key={'tr' + col.id} className="table__cell">
                                                {tdGenerator(Comp)}
                                            </td>,
                                            !!custonHeader && (
                                                <td key={'tr' + custonHeader.id} className="table__cell">
                                                    {tdGenerator(CustomTd)}
                                                </td>
                                            )
                                        ]);
                                    })}
                                    <td className="table__cell table__cell--action">
                                        <div className="table__cell--action__container">
                                            <DropDown
                                                Component={({ close }) => (
                                                    <div className="table__dropdown">
                                                        {actionItems.map((action) => (
                                                            <span
                                                                key={`${action.id}-action`}
                                                                onClick={() => {
                                                                    onItemClickAction(row, action);
                                                                    close();
                                                                }}
                                                            >
                                                                {action.title}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                                Button={() => (
                                                    <div className="table__dropdown__button">
                                                        <MoreVerticalIcon />
                                                    </div>
                                                )}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
