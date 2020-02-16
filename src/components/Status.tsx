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
}

const Status = ({ orders }: Props) => {
    return (
        <div>
            <h1>Order management</h1>
            <p>Manage your orders here and get an overview of status</p>
            <div>
                <p>Total items in inventory</p>
                <div>
                    <span>1,508</span>
                    <span> items</span>
                </div>
                <div>
                    <div>Green, blue, red line</div>
                    <div>Completed 326</div>
                    <div>Pending 581</div>
                    <div>Cancelled 129</div>
                </div>
                <hr/>
                <table>
                    <thead>
                        <tr>
                            <th>Item Id</th>
                            <th>Address</th>
                            <th>Order time</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map(order =>
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.address}</td>
                                <td>{order.time}</td>
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