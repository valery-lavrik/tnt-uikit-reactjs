import TableView from "../components/TableView";
import { TableActionType } from "../components/TableView/types";
import data from "./../assets/MockResponse/BusinessModels.json";

const actions: TableActionType[] = [
    {
        id: "more",
        title: "Подробнее",
    },
    {
        id: "edit",
        title: "Редактировать",
    },
    {
        id: "delete",
        title: "Удалить",
    },
];

const actionsGroup: TableActionType[] = [
    {
        id: "delete",
        title: "Удалить",
    },
];


const TableViewExample = () => {


    // Добавлять свои заголовки в таблицу так:
    const thGenHandler = (ind: number) => {
        if (ind === 3) {
            return ({
                hasSort: false,
                id: "myCustomHeader",
                title: "Мой заголовок"
            });
        }

        return null;
    }


    // модифицировать контент колонок будем так:
    const tdGenHandler = (col: any, data: any, model: any) => {

        if (col.id === 'name') {
            return () => <p style={{ color: 'red' }}>{data}</p>
        }

        // Мой кастомный TD в таблице (см customHeader параметр)
        if (col.id === 'myCustomHeader') {
            return () => (
                <p onClick={() => console.log('model', model)} >
                    Мой кастомный компонент
                </p>
            );
        }

        return null
    }

    return (
        <div className="">
            <TableView
                status={""}
                minSearchSize={3}
                page={1}
                totalPage={3}
                // @ts-ignore
                filters={data?.info?.filters || []}
                onSearchChange={(val) => console.log(val)}
                onSortChange={(val, direction) =>
                    console.log({ [val]: direction })
                }
                onFilterChange={(filtersArray) => console.log(filtersArray)}
                onPageChange={(page) => console.log(page)}
                onItemClickAction={(...args: any) => {
                    console.log(...args);
                }}
                actionItems={actions}
                actionItemsGroup={actionsGroup}
                header={data?.info?.headers || []}
                data={data?.data || []}
                maxFieldLength={50}
                tdGen={tdGenHandler}
                customHeader={thGenHandler}
            />
        </div>
    );
};

export default TableViewExample;
