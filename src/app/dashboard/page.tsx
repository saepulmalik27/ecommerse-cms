"use client";
import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import BarChart from "@/components/templates/chart/BarChart";

import Select from "@/components/molecules/select";
import useDashboard, { EAnalyticType } from "@/hooks/useDashboard";
Chart.register(CategoryScale);

const Dashboard = () => {
    const { chartData, handleSelect } = useDashboard();
    return (
        <div>
            <div className="w-full sm:w-80">
                <Select
                    options={[
                        EAnalyticType.PRODUCT_PER_CATEGORY,
                        EAnalyticType.PRODUCT_STOCK,
                    ]}
                    placeholder="Select Analytic"
                    onSelect={handleSelect}
                    defaultValue={EAnalyticType.PRODUCT_PER_CATEGORY}
                />
            </div>
            <BarChart data={chartData} type="bar" />
        </div>
    );
};

export default Dashboard;
