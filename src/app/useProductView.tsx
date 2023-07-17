import { TableHeaderProps } from "@/components/templates/table/table.types";
import { listProduct } from "@/redux/features/product.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { productApi } from "@/redux/services/productApi";
import React, { useCallback, useEffect } from "react";

const productColumns: Array<TableHeaderProps> = [
    {
        field: "title",
        title: "Product Name",
        sortable: true,
    },
    {
        field: "brand",
        title: "Brand",
        sortable: true,
    },
    {
        field: "stock",
        title: "Stock",
        sortable: true,
    },
    {
        field: "price",
        title: "Price",
        sortable: true,
    },
    {
        field: "category",
        title: "Category",
        sortable: true,
    },
];

const useProductView = () => {
    const dispatch = useAppDispatch();
    const dataProducts = useAppSelector(state => state.product);
    const [search, setSearch] = React.useState<string>("");

    const [
        handleFetchData,
        { data: products, isLoading, isFetching, isError, isSuccess },
    ] = productApi.useLazyGetProductsQuery();

    const [
        handleFetchFilteredData,
        {
            data: filteredProducts,
            isLoading: isFilteredLoading,
            isFetching: isFilteredFetching,
            isError: isFilteredError,
            isSuccess: isFilteredSuccess,
        },
    ] = productApi.useLazyGetFilteredProductsQuery();

    useEffect(() => {
        handleFetchData({
            limit: 10,
        });
    }, []);

    useEffect(() => {
        if (isSuccess && products) {
            dispatch(listProduct(products));
        }
    }, [isSuccess, products]);

    useEffect(() => {
        if (isFilteredSuccess && filteredProducts) {
            dispatch(listProduct(filteredProducts));
        }
    }, [isFilteredSuccess, filteredProducts]);

    const handlePagination = useCallback(
        (skip: number) => {
            if (search) {
                handleFetchFilteredData({
                    q: search,
                    limit: 10,
                    skip,
                });
            } else {
                handleFetchData({
                    limit: 10,
                    skip,
                });
            }
        },
        [search]
    );

    const handleChange = (value: string) => {
        setSearch(value);
        handleFetchFilteredData({
            q: value,
            limit: 10,
        });
    };

    return {
        handleChange,
        data: dataProducts,
        productColumns,
        handlePagination,
    };
};

export default useProductView;
