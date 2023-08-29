import { useEffect, useState } from 'react';
import { DirectionType, FilterChangeType, OneFilterType, TableActionType, TableColumnType, TableDataType } from './types';
import { LoadStatusType } from '../../Types';

import TableActions from './TableActions';
import Pagination from '../Pagination';
import Table from './Table';
import Loader from '../Loader';

import './index.scss';

interface Props {
    status: LoadStatusType;
    minSearchSize: number;
    page: number;
    totalPage: number;
    filters: OneFilterType[];
    onSearchChange: (val: string) => void;
    onSortChange: (val: string, direction: DirectionType) => void;
    onFilterChange: (filters: FilterChangeType[]) => void;
    onPageChange: (page: number) => void;
    onItemClickAction: (item: TableDataType, action: TableActionType) => void;
    actionItems: TableActionType[];
    actionItemsGroup: TableActionType[];
    header: TableColumnType[];
    data: TableDataType[];
    maxFieldLength?: number;
    tdGen?: (a: TableColumnType, b: any, c: any) => any;
    customHeader?: (ind: number) => TableColumnType | null;
}

const TableView = ({
    status,
    minSearchSize = 3,
    page = 1,
    totalPage = 1,
    filters,
    onSearchChange,
    onSortChange,
    onFilterChange,
    onPageChange,
    onItemClickAction,
    actionItems,
    actionItemsGroup,
    header,
    data,
    maxFieldLength = 10,
    tdGen = () => null,
    customHeader = () => null,
}: Props) => {
    const [multipleItems, setMultipleItems] = useState<TableDataType[]>([]);

    useEffect(() => {
        if (status === '') {
            setMultipleItems([]);
        }
    }, [status]);

    return (
        <div className="table-view">
            {status === 'load' && <Loader />}

            <TableActions
                minSearchSize={minSearchSize}
                filters={filters}
                actionItems={actionItemsGroup}
                onItemClickAction={onItemClickAction}
                multipleItems={multipleItems}
                onSearchChange={onSearchChange}
                onFilterChange={onFilterChange}
            />

            <Table
                data={data}
                header={header}
                actionItems={actionItems}
                multipleItems={multipleItems}
                onSortChange={onSortChange}
                onItemClickAction={onItemClickAction}
                setMultipleItems={setMultipleItems}
                maxFieldLength={maxFieldLength}
                tdGen={tdGen}
                customHeader={customHeader}
            />

            <Pagination pages={totalPage} page={page} onPageChange={onPageChange} />
        </div>
    );
};

export default TableView;
