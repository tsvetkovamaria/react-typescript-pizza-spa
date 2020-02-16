const BASE_URL = "http://localhost:5000/api/";

const routes = {
    orders: BASE_URL + 'orders'
}

export const getOrders = async () => {
    const res = await fetch(routes.orders);
    return await res.json();
}