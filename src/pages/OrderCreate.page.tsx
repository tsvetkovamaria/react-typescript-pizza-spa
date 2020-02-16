import React, { useState, useEffect } from "react";
import NewOrder from "../components/NewOrder";
import {getPrices} from "../api/api";

const OrderCreatePage = () => {
    const initialState = {
        sizes: [],
        toppings: []
    }
    const [prices, setPrices] = useState(initialState);

    async function fetchData() {
        getPrices()
            .then(res => setPrices(res))
    }

    useEffect(() => {
        fetchData();
    }, []);

    return <NewOrder sizes={prices.sizes} toppings={prices.toppings}/>
}

export default OrderCreatePage;