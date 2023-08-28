export type DirectionType = "asc" | "desc" | "";

export type TableColumnType = {
    id: string;
    title: string;
    hasSort: boolean;
};

export type TableDataType = {
    [key: string]: any;
};

export type TableActionType = {
    id: string;
    title: string;
};

export type OneFilterType = {
    id: string;
    title: string;
    values: OneFilterValueType[];
};

export type OneFilterValueType = {
    title: string | boolean | null;
    count: number;
};

export type SelectFiltersType = {
    [key: string]: OneFilterValueType[];
};

export type FilterChangeType = {
    id: string;
    values: (string | boolean | null)[];
};
