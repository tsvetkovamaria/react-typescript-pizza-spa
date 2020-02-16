import React from "react";

interface Status{
    total: number
    delivered: number
    pending: number
}
interface Sales {
    total: number,
    currency: string
}
interface History {
    labels: string[],
    data: number[]
}
interface Report {
    ontime: string
    late: string
    performance: string
}
interface Props {
    status: Status
    sales: Sales
    history: History
    report: Report
}

const Dashboard = ({ status, sales, history, report }: Props) => {
    return (
        <div>
            <div>
                <h1>Delivery status</h1>
                <div>
                    <h3>Total orders</h3>
                    <span>{status.total}</span>
                </div>
                <div>
                    <h3>Orders delivered</h3>
                    <span>{status.delivered}</span>
                </div>
                <div>
                    <h3>Pending delivery</h3>
                    <span>{status.pending}</span>
                </div>
            </div>
            <div>
                <h2>Total sales</h2>
                <span>{sales.currency}</span>
                <div>{sales.total}</div>
            </div>
            <div>
                <h3>Report</h3>
                <div>
                    <h4>Ontime delivery</h4>
                    <span>{report.ontime}</span>
                </div>
                <div>
                    <h4>Late deliveries</h4>
                    <span>{report.late}</span>
                </div>
                <div>
                    <h4>Performance</h4>
                    <span>{report.performance}</span>
                </div>
            </div>
            <div>
                <h3>Order history</h3>
                <div>{history.labels.join(' ')}</div>
                <div>{history.data.join(' ')}</div>
            </div>
        </div>
    );
}

export default Dashboard;