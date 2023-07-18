"use client";
import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Select from "@/components/molecules/select";
import useDashboard, { EAnalyticType, EChartType } from "@/hooks/useDashboard";
import ChartController from "@/components/templates/chart/ChartController";
Chart.register(CategoryScale);

const Dashboard = () => {
    const {
        chartData,
        handleSelect,
        listAnalytic,
        listChartType,
        handleSelectChart,
        charType,
    } = useDashboard();
    return (
        <div className="py-10 flex flex-col gap-10">
            <h1 className="text-2xl font-bold">Analytic Dashboard</h1>
            <section className="flex flex-col sm:flex-row gap-2">
                <div className="w-full sm:w-80 relative z-10">
                    <Select
                        options={listAnalytic}
                        placeholder="Select Analytic"
                        onSelect={handleSelect}
                        defaultValue={EAnalyticType.PRODUCT_PER_CATEGORY}
                    />
                </div>
                <div className="w-full sm:w-80">
                    <Select
                        options={listChartType}
                        placeholder="Select Chart"
                        onSelect={handleSelectChart}
                        defaultValue={EChartType.BAR}
                    />
                </div>
            </section>
            <section>
                <ChartController data={chartData} type={charType} />
            </section>
        </div>
    );
};

export default Dashboard;
