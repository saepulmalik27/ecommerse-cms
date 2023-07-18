"use client";
import React from "react";
import Product from "@/_mockup/product.json";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import BarChart from "@/components/templates/chart/BarChart";
import Colors from "@/_mockup/chart_color.json";
import { TProduct } from "@/redux/services/productApi";
Chart.register(CategoryScale);

type TCategoryTotal = {
    category: string;
    total: number;
};

const Dashboard = () => {
    const Data: TProduct[] = Product.products;

    const [chartData, setChartData] = useState({
        labels: Data.map(data => data.title),
        datasets: [
            {
                label: "Product Stock",
                data: Data.map(data => data.stock),
                backgroundColor: Colors,
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

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

    const [chartData2, setChartData2] = useState({
        labels: ProductPerCategory.map(data => data.category),
        datasets: [
            {
                label: "Product per Category",
                data: ProductPerCategory.map(data => data.total),
                backgroundColor: Colors,
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    return (
        <div>
            <BarChart data={chartData} type="bar" />
            <BarChart data={chartData2} type="bar" />
        </div>
    );
};

export default Dashboard;
