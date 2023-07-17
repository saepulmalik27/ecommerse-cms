import { TableHeaderProps } from "@/components/templates/table/table.types";
import { listProduct } from "@/redux/features/product.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
    productApi,
    useGetAllProductCategoriesQuery,
} from "@/redux/services/productApi";
import { formatCurrency } from "@/utils/helper";
import React, { useCallback, useEffect } from "react";

export const productColumns: Array<TableHeaderProps> = [
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
        callback: value => {
            return formatCurrency(Number(value));
        },
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

    const { data: listcategory } = useGetAllProductCategoriesQuery({});

    const [
        handleFetchFilteredDataCategory,
        { data: filterCategory, isSuccess: isSuccessFilterCategory },
    ] = productApi.useLazyGetFilterProductCategoriesQuery();

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

    useEffect(() => {
        if (isSuccessFilterCategory && filterCategory) {
            dispatch(listProduct(filterCategory));
        }
    }, [isSuccessFilterCategory, filterCategory]);

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

    const handleFilterCategory = (value: string) => {
        handleFetchFilteredDataCategory({
            category: value,
            limit: 10,
            skip: 0,
        });
    };

    return {
        handleChange,
        data: dataProducts,
        productColumns,
        handlePagination,
        listcategory,
        handleFilterCategory,
    };
};

export default useProductView;
