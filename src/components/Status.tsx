import React from "react";

interface Order {
    id: string
    address: string
    time: string
    accepted: boolean
    transit: boolean
    completed: boolean
    canceled: boolean
}

interface Props {
    orders: Order[]
    onChangeOrder(order: Order): void
}

const Status = ({ orders , onChangeOrder}: Props) => {
    const getActions = (order: Order, i: number) => {
        if(order.canceled) {
            return <span className="text-red-700">Cancelled</span>
        } else if (order.completed) {
            return <span>Completed</span>
        } else if (order.accepted) {
            return (
                <div>
                    <span>Accepted </span>
                    <span
                        onClick={updateOrder}
                        data-order-index={i}
                        data-action="complete"
                        className="ml-2 text-teal-700 underline">Mark as completed</span>
                </div>
            )
        } else if (order.transit) {
            return (
                <div>
                    <span>In transit </span>
                    <span
                        onClick={updateOrder}
                        data-order-index={i}
                        data-action="complete"
                        className="ml-2 text-teal-700 underline"
                    >Mark as completed</span>
                </div>
            )
        } else {
            return (
                <div>
                    <button
                        onClick={updateOrder}
                        data-order-index={i}
                        data-action="accept"
                        className="text-green-700 underline"
                    >Accept</button>
                    <button
                        onClick={updateOrder}
                        data-order-index={i}
                        data-action="cancel"
                        className="ml-2 text-red-700 underline"
                    >Cancel</button>
                </div>
            )
        }
    }

    const updateOrder = (e: any): void => {
        const orderIndex = e.target.dataset.orderIndex;
        const action:string = e.target.dataset.action;
        const order = orders[orderIndex];
        switch (action) {
            case 'cancel':
                order.canceled = true;
                break;
            case 'accept':
                order.accepted = true;
                break;
            case 'complete':
                order.completed = true;
                break;
        }
        onChangeOrder(order);
    }

    return (
        <div>
            <h1 className="uppercase text-xl mb-1">Order management</h1>
            <p className="text-sm mb-5">Manage your orders here and get an overview of status</p>
            <div>
                <p className="text-sm mb-3">Total items in inventory</p>
                <div className="mb-4">
                    <span className="text-teal-500 text-lg">{orders.length}</span>
                    <span className="text-xs text-gray-500"> items</span>
                </div>
                {/*TODO: show chart*/}
                {/*<div*/}
                {/*    style={{ width: '100px' }}*/}
                {/*    className="bg-gray-400 h-2 block rounded">*/}
                {/*    <div*/}
                {/*        style={{ width: (326/1508)+'%' }}*/}
                {/*        className="bg-pink-600 h-2 block rounded">*/}
                {/*    </div>*/}
                {/*    </div>*/}
                {/*    <div>Completed 326</div>*/}
                {/*    <div>Pending 581</div>*/}
                {/*    <div>Cancelled 129</div>*/}
                <hr/>
                <table className="w-full text-sm text-gray-800">
                    <thead>
                        <tr className="border-t border-b bg-gray-200">
                            <th className="text-left font-normal px-3 py-1">Item Id</th>
                            <th className="text-left font-normal px-3 py-1">Address</th>
                            <th className="text-left font-normal px-3 py-1">Order time</th>
                            <th className="text-left font-normal px-3 py-1">Status / Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map((order, i) =>
                            <tr key={i} className={i % 2 ? "bg-gray-100" : "bg-white"}>
                                <td className="px-3 py-1">{order.id}</td>
                                <td className="px-3 py-1">{order.address}</td>
                                <td className="px-3 py-1">{order.time}</td>
                                <td className="px-3 py-1">{getActions(order, i)}</td>

                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Status;