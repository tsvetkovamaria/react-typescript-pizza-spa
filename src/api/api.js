const BASE_URL = "http://localhost:5000/api/";

const routes = {
    orders: BASE_URL + 'orders',
    dashboard: BASE_URL + 'dashboard',
    prices: BASE_URL + 'prices'
}

export const getOrders = async () => {
    const res = await fetch(routes.orders);
    return await res.json();
}

export const getStats = async () => {
    const res = await fetch(routes.dashboard);
    return await res.json();
}

export const getPrices = async () => {
    const res = await fetch(routes.prices);
    return await res.json();
}