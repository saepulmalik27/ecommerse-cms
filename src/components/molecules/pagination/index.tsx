"use client";
import React from "react";
import { PaginationProps } from "./pagination.types";
import Button from "@/components/atoms/button";

const Pagination: React.FC<PaginationProps> = ({
    total,
    limit,
    skip,
    onPaginate,
}) => {
    const currentPage = React.useMemo(
        () => Math.ceil(skip / limit) + 1,
        [skip, limit]
    );
    const totalPage = React.useMemo(
        () => Math.ceil(total / limit),
        [total, limit]
    );

    const handleNext = React.useCallback(() => {
        onPaginate(skip + limit);
    }, [skip, limit]);

    const handlePrev = React.useCallback(() => {
        onPaginate(skip - limit);
    }, [skip, limit]);

    return (
        <div className="flex justify-end gap-3 items-center">
            <Button onClick={handlePrev} disabled={currentPage === 1}>
                Prev
            </Button>
            <p className="text-sm">
                Page {currentPage} of {totalPage}
            </p>
            <Button onClick={handleNext} disabled={currentPage === totalPage}>
                Next
            </Button>
        </div>
    );
};

export default Pagination;
