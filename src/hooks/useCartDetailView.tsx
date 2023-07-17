"use client";
import { TableHeaderProps } from "@/components/templates/table/table.types";
import { useGetCartByIdQuery } from "@/redux/services/cartApi";
import { formatCurrency } from "@/utils/helper";
import { useParams } from "next/navigation";
import React from "react";
const productColumns: TableHeaderProps[] = [
    {
        field: "title",
        title: "Product Name",
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
        field: "quantity",
        title: "Quantity",
        sortable: true,
    },
    {
        field: "total",
        title: "Total",
        sortable: true,
    },
    {
        field: "discountPercentage",
        title: "Discounted Percentage",
        sortable: true,
    },
    {
        field: "discountedPrice",
        title: "Discounted Price",
        sortable: true,
    },
];

const useCartDetailView = () => {
    const { id } = useParams();

    const { data, isError, isFetching, isLoading, isSuccess, error } =
        useGetCartByIdQuery(
            {
                id: id,
            },
            {
                skip: !id,
            }
        );

    const dataProduct = React.useMemo(() => {
        return data?.products;
    }, [data]);

    return {
        data,
        colums: productColumns,
        dataProduct,
    };
};

export default useCartDetailView;
