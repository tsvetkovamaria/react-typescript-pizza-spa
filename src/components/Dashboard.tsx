import React from "react";
import HistoryChart from "./HistoryChart";
import DeliveryChart from "./DeliveryChart";

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

type Nullable<T> = {[k in keyof T]: T[k] | null}
type NullableProps = Nullable<Props>

const Dashboard = ({ status, sales, history, report }: NullableProps) => {
    return (
        <div>
            <div className="flex justify-between mb-20">
                { status &&<div className="w-3/5 text-center">
                    <h1 className="text-2xl uppercase mb-2 font-bold">Delivery status</h1>
                    <div>
                        <h3 className="text-xl leading-tight">Total Orders</h3>
                        <span  className="text-2xl font-bold mb-2 leading-tight">{status.total}</span>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <DeliveryChart
                                data={ [{value: status.delivered, label: 'Delivered'},{value: status.pending, label: 'Pending'}] }
                                color="#55D1C5"
                            />
                            <span className="text-lg text-gray-800 font-bold">{status.delivered}</span>
                            <h3 className="text-sm text-gray-500 font-bold">Orders delivered</h3>
                        </div>
                        <div className="ml-10">
                            <DeliveryChart
                                data={ [{value: status.pending, label: 'Pending'},{value: status.delivered, label: 'Delivered'}] }
                                color="#D54A8B"
                            />
                            <span className="text-lg text-gray-800 font-bold">{status.pending}</span>
                            <h3 className="text-sm text-gray-500 font-bold">Pending delivery</h3>
                        </div>
                    </div>
                </div>
                }
                {sales && <div className="w-2/5 text-center border-l flex">
                    <div className="m-auto">
                        <h2 className="text-2xl uppercase mb-2">Total sales</h2>
                        <span className="text-sm">{sales.currency}</span>
                        <div className="text-3xl mt-2 font-bold">{Number((sales.total).toFixed(1)).toLocaleString()}</div>
                    </div>

                </div>
                }
            </div>
            <div className="flex justify-between">
                {history && <div>
                    <h3 className="uppercase text-center">Order history</h3>
                    <HistoryChart data={history} />
                </div>
                }
                {report && <div className="w-full border-l border-gray-300">
                    <h3 className="uppercase text-center">Report</h3>
                    <div className="p-8 flex">
                        <div className="w-1/2">
                            <h4 className="text-sm text-gray-500">Ontime delivery</h4>
                            <span className="block text-3xl text-gray-700 mb-2">{report.ontime}</span>
                            <span
                                style={{ width: '100px' }}
                                className="bg-gray-400 h-2 block rounded">
                                <span
                                    style={{ width: parseInt(report.ontime)+'px' }}
                                    className="bg-teal-400 h-2 block rounded">
                                </span>
                            </span>
                        </div>
                        <div className="w-1/2">
                            <h4 className="text-sm text-gray-500">Late deliveries</h4>
                            <span className="block text-3xl text-gray-700 mb-2">{report.late}</span>
                            <span
                                style={{ width: '100px' }}
                                className="bg-gray-400 h-2 block rounded">
                                <span
                                    style={{ width: parseInt(report.late)+'px' }}
                                    className="bg-pink-600 h-2 block rounded">
                                </span>
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className="p-8">
                        <h4 className="text-sm text-gray-500">Performance</h4>
                        <span className="text-lg font-bold text-teal-500">{report.performance}</span>
                    </div>
                </div>
                }
            </div>
        </div>
    );
}

export default Dashboard;