import React from "react";
import { useState } from "react";
import Colors from "@/_mockup/chart_color.json";
import Product from "@/_mockup/product.json";
import { TProduct } from "@/redux/services/productApi";
export type TCategoryTotal = {
    category: string;
    total: number;
};

export enum EAnalyticType {
    PRODUCT_STOCK = "Product Stock",
    PRODUCT_PER_CATEGORY = "Product per Category",
}

export enum EChartType {
    BAR = "bar",
    LINE = "line",
    PIE = "pie",
}

const listAnalytic = [
    EAnalyticType.PRODUCT_PER_CATEGORY,
    EAnalyticType.PRODUCT_STOCK,
];

const listChartType = [EChartType.BAR, EChartType.LINE, EChartType.PIE];

const useDashboard = () => {
    const Data: TProduct[] = Product.products;
    const ProductPerCategory: TCategoryTotal[] = Data.reduce(
        (acc: TCategoryTotal[], item: TProduct) => {
            const existingCategory = acc.find(
                (category: TCategoryTotal) =>
                    category.category === item.category
            );
            if (existingCategory) {
                existingCategory.total++;
            } else {
                acc.push({ category: item.category, total: 1 });
            }
            return acc;
        },
        []
    );

    const [productStock] = useState({
        labels: Data.map(data => data.title),
        datasets: [
            {
                label: EAnalyticType.PRODUCT_STOCK,
                data: Data.map(data => data.stock),
                backgroundColor: Colors,
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    const [productPerCategory] = useState({
        labels: ProductPerCategory.map(data => data.category),
        datasets: [
            {
                label: EAnalyticType.PRODUCT_PER_CATEGORY,
                data: ProductPerCategory.map(data => data.total),
                backgroundColor: Colors,
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    const analyticData = React.useMemo(
        () => ({
            "Product Stock": productStock,
            "Product per Category": productPerCategory,
        }),
        [productStock, productPerCategory]
    );

    const [chartData, setChartData] = useState(
        analyticData[EAnalyticType.PRODUCT_PER_CATEGORY]
    );

    const [charType, setCharType] = useState<EChartType>(EChartType.BAR);

    const handleSelect = (value: string) => {
        // @ts-ignore
        setChartData(analyticData[value]);
    };

    const handleSelectChart = (value: string) => {
        // @ts-ignore
        setCharType(value);
    };

    return {
        chartData,
        handleSelect,
        listAnalytic,
        listChartType,
        handleSelectChart,
        charType,
    };
};

export default useDashboard;
