import React, { useState, useEffect } from "react";
import Status from "../components/Status";
import { getOrders } from "../api/api";

const StatusPage = () => {
    const initialState = {orders: []}
    const [orders, setOrders] = useState(initialState);

    async function fetchData() {
        getOrders()
            .then(res => setOrders(res))
    }

    useEffect(() => {
        fetchData();
    }, []);

    return <Status orders={orders.orders} />
}

export default StatusPage;