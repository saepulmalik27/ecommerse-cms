"use client";
import Button from "@/components/atoms/button";
import { TableHeaderProps } from "@/components/templates/table/table.types";
import { cartApi } from "@/redux/services/cartApi";
import { useRouter } from "next/navigation";
import React from "react";
import SVG from "react-inlinesvg";

const cartsColumns: TableHeaderProps[] = [
    {
        field: "id",
        title: "ID",
        sortable: true,
    },
    {
        field: "total",
        title: "Total",
        sortable: true,
    },
    {
        field: "discountedTotal",
        title: "Discounted Total",
        sortable: true,
    },
    {
        field: "userId",
        title: "User ID",
        sortable: true,
    },
    {
        field: "totalProducts",
        title: "Total Products",
        sortable: true,
    },
    {
        field: "totalQuantity",
        title: "Total Quantity",
        sortable: true,
    },
];

const useCartView = () => {
    const [
        handleFetchData,
        { data, isLoading, isFetching, isError, isSuccess },
    ] = cartApi.useLazyGetCartsQuery();

    React.useEffect(() => {
        handleFetchData({
            limit: 10,
        });
    }, []);

    const handlePagination = (skip: number) => {
        handleFetchData({
            limit: 10,
            skip: skip,
        });
    };

    const router = useRouter();

    const handleClickDetail = (id: string) => {
        router.push("/cart/" + id);
    };

    const dataColumns = [
        ...cartsColumns,
        {
            field: "action",
            title: "Action",
            sortable: false,
            customelement: (row: any) => {
                return (
                    <Button onClick={() => handleClickDetail(row.id)}>
                        {" "}
                        <div className="flex gap-1 items-center">
                            <SVG
                                src="icons/eye.svg"
                                className="w-4 h-4 aspect-square"
                            />{" "}
                            <span>Detail</span>{" "}
                        </div>{" "}
                    </Button>
                );
            },
        },
    ];

    return {
        data,
        handlePagination,
        colums: dataColumns,
        isLoading: isLoading || isFetching,
    };
};

export default useCartView;
