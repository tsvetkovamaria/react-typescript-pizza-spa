const BASE_URL = "http://localhost:5000/api/";

const routes = {
    orders: BASE_URL + 'orders',
    createOrder: BASE_URL + '/orders/add',
    patchOrder: BASE_URL + '/orders/update',
    dashboard: BASE_URL + 'dashboard',
    prices: BASE_URL + 'prices',
}

export const getOrders = async () => {
    const res = await fetch(routes.orders);
    return await res.json();
}

export const postOrder = async (order) => {
    const res = await fetch(routes.createOrder, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });
    return await res.json();
}

export const updateOrder = async (order) => {
    const res = await fetch(routes.patchOrder+'/'+order.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });
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