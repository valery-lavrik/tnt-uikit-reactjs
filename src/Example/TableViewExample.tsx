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
    // модифицировать контент колонок будем так:
    const tdGenHandler = (col: any, data: any, model: any) => {
        if (col.id === "name") {
            //console.log('col, data', col, data, model);
            return () => <p style={{ color: "red" }}>{data}</p>;
        }

        return null;
    };

    return (
        <div className="">
            <TableView
                status={""}
                minSearchSize={3}
                page={1}
                pageSize={5}
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
            />
        </div>
    );
};

export default TableViewExample;
