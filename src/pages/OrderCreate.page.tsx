import React, { useState, useEffect } from "react";
import NewOrder from "../components/NewOrder";
import {getPrices, postOrder} from "../api/api";

const OrderCreatePage = () => {
    const initialState = {
        sizes: [],
        toppings: []
    };

    const [prices, setPrices] = useState(initialState);

    const fetchData = () => {
        getPrices()
            .then(res => setPrices(res))
    };

    const createOrder = (order: any):void => {
        console.log('from container', order)
        postOrder(order);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return <NewOrder
        sizes={prices.sizes}
        toppings={prices.toppings}
        onOrder={createOrder}/>
}

export default OrderCreatePage;