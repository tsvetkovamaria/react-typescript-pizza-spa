import React, { useState, useEffect } from "react";
import Status from "../components/Status";
import { getOrders, updateOrder } from "../api/api";

const StatusPage = () => {
    const initialState = {orders: []}
    const [orders, setOrders] = useState(initialState);

    async function fetchData() {
        getOrders()
            .then(res => setOrders(res))
    }

    async function onChangeOrder(order: any) {
        updateOrder(order)
            .then(fetchData)
    }

    useEffect(() => {
        fetchData();
    }, []);

    return <Status orders={orders.orders} onChangeOrder={onChangeOrder}/>
}

export default StatusPage;