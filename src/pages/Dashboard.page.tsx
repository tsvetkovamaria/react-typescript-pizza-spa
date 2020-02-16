import React, { useState, useEffect } from "react";
import { getStats } from "../api/api";
import Dashboard from "../components/Dashboard";

const DashboardPage = () => {
    const initialState = {
        status: null,
        sales: null,
        history: null,
        report: null
    }
    const [dashboardData, setDashboardData] = useState(initialState);

    async function fetchData() {
        getStats()
            .then(res => setDashboardData(res))
    }

    useEffect(() => {
        fetchData();
    }, []);

    return <Dashboard
        status={dashboardData.status}
        sales={dashboardData.sales}
        history={dashboardData.history}
        report={dashboardData.report} />
}

export default DashboardPage;