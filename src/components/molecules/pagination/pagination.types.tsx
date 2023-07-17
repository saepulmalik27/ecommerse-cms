export type PaginationProps = {
    total: number;
    limit: number;
    skip: number;
    onPaginate: (skip: number) => void;
};
