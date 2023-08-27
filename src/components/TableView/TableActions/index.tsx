import { useEffect, useState } from 'react';
import { SearchMagnifyingGlassIcon, CaretDownMdIcon, MoreVerticalIcon } from '../../../icons';
import { FilterChangeType, OneFilterType, OneFilterValueType, SelectFiltersType, TableActionType, TableColumnType, TableDataType } from '../types';
import useFirstRender from '../../../utils/useFirstRender';
import _ from 'lodash';

import DropDown from '../../DropDown';
import TableFilterItem from '../TableFilterItem';
import Button from '../../Button';
import Badge from '../../Badge';

import './index.scss';

interface Props {
    filters: OneFilterType[];
    minSearchSize: number;
    header: TableColumnType[];
    actionItems: TableActionType[];
    multipleItems: TableDataType[];
    onSearchChange: (val: string) => void;
    onFilterChange: (filters: FilterChangeType[]) => void;
    onItemClickAction: (item: TableDataType, action: TableActionType) => void;
}

const TableActions = ({ filters = [], minSearchSize = 3, multipleItems, onSearchChange, onFilterChange, actionItems, onItemClickAction, header }: Props) => {
    const [filtersCollector, setFiltersCollector] = useState<SelectFiltersType>({});
    const onSearchChangeDebounced = _.debounce(onSearchChange, 700);
    const isFirst = useFirstRender();

    useEffect(() => {
        if (!isFirst) {
            let filter_: FilterChangeType[] = [];
            for (const key in filtersCollector) {
                filter_.push({
                    id: key,
                    values: filtersCollector[key].map((a) => a.title),
                });
            }

            // пыстые фильтры уберу
            filter_ = filter_.filter(a => a?.values?.length);

            onFilterChange(filter_);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filtersCollector]);

    const onFilterChangeHandler = (filtersArray: OneFilterType, values: OneFilterValueType[]) => {
        setFiltersCollector({ ...filtersCollector, [filtersArray.id]: values });
    };

    return (
        <div className="table-actions">
            <div className="table-actions__search">
                <div>
                    <SearchMagnifyingGlassIcon />
                </div>
                <input
                    onChange={(e) => {
                        if (e.target.value.length >= minSearchSize || e.target.value.length === 0) {
                            onSearchChangeDebounced(e.target.value);
                        }
                    }}
                    placeholder={`Поиск (от ${minSearchSize} символов)`}
                    type="text"
                />
            </div>

            {multipleItems.length > 0 && (
                <div className="table-actions__delete">
                    <span className="table-actions__delete__label">Выбрано: {multipleItems.length}</span>
                    <DropDown
                        Component={({ close }) => (
                            <div className="table">
                                <div className="table__dropdown">
                                    {actionItems.map((action) => (
                                        <span
                                            key={`${action.id}-action`}
                                            onClick={() => {
                                                onItemClickAction(multipleItems, action);
                                                close();
                                            }}
                                        >
                                            {action.title}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        Button={() => (
                            <Button secondary>
                                <MoreVerticalIcon />
                            </Button>
                        )}
                    />
                </div>
            )}

            {!!filters?.length && (
                <div className="table-actions__filters">
                    <span className="table-actions__filters__title">Фильтры: </span>
                    {filters.map((filter) => (
                        <DropDown
                            key={`${filter.id}-filter`}
                            Button={() => (
                                <div key={`filter-${filter.id}`} className="table-actions__filters__item">
                                    <span>{header?.find(a => a.id === filter.id)?.title || 'Не задано'}</span>
                                    {!!filtersCollector[filter.id]?.length && <Badge status="dark">{filtersCollector[filter.id].length}</Badge>}
                                    <CaretDownMdIcon />
                                </div>
                            )}
                            Component={() => (
                                <TableFilterItem filter={filter} initial={filtersCollector[filter.id]} onFilterChange={onFilterChangeHandler} />
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TableActions;
