import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Status from "./components/Status";
import Dashboard from "./components/Dashboard";
import NewOrder from "./components/NewOrder";

const dashboardData = {
    "status": {
        "total": 150,
        "delivered": 120,
        "pending": 30
    },
    "sales": {
        "total": 14543,
        "currency": "USD"
    },
    "history": {
        "labels": [
            "",
            "08 AM",
            "11 AM",
            "01 PM",
            "03 PM",
            "04 PM",
            "06 PM",
            "08PM",
            "10 PM",
            ""
        ],
        "data": [25, 20, 30, 25, 35, 20, 30, 25, 35, 30]
    },
    "report": {
        "ontime": "+29.7%",
        "late": "53.4%",
        "performance": "+0.05%"
    }
}

const ordersData = {
    "orders": [
        {
            "id": "AB75231",
            "address": "4107 Clearview Drive, BURKET, Indiana",
            "time": "5 minutes ago",
            "accepted": false,
            "transit": false,
            "completed": false,
            "canceled": false
        },
        {
            "id": "HF54D25",
            "address": "7 Randall Mill Street Somerset, NJ 08873",
            "time": "10 minutes ago",
            "accepted": true,
            "transit": false,
            "completed": false,
            "canceled": false
        },
        {
            "id": "AB75232",
            "address": "900 Talbot Ave. Mason, OH 45040",
            "time": "30 minutes ago",
            "accepted": false,
            "transit": true,
            "completed": false,
            "canceled": false
        },
        {
            "id": "HF54D26",
            "address": "7 Randall Mill Street Somerset, NJ 08873",
            "time": "1 hour ago",
            "accepted": false,
            "transit": false,
            "completed": true,
            "canceled": false
        },
        {
            "id": "AB75233",
            "address": "4107 Clearview Drive, BURKET, Indiana",
            "time": "2 hours ago",
            "accepted": false,
            "transit": false,
            "completed": false,
            "canceled": true
        },
        {
            "id": "HF54D27",
            "address": "7 Randall Mill Street Somerset, NJ 08873",
            "time": "2 hours ago",
            "accepted": false,
            "transit": false,
            "completed": true,
            "canceled": false
        },
        {
            "id": "AB75234",
            "address": "4107 Clearview Drive, BURKET, Indiana",
            "time": "4 hours ago",
            "accepted": false,
            "transit": false,
            "completed": true,
            "canceled": false
        },
        {
            "id": "HF54D28",
            "address": "7 Randall Mill Street Somerset, NJ 08873",
            "time": "6 hours ago",
            "accepted": false,
            "transit": false,
            "completed": true,
            "canceled": false
        },
        {
            "id": "HF54D29",
            "address": "4107 Clearview Drive, BURKET, Indiana",
            "time": "10 hours ago",
            "accepted": false,
            "transit": false,
            "completed": true,
            "canceled": false
        }
    ]
}

const orderOptionsData = {
    "sizes": [
        {
            "name": "Large",
            "price": 40.00,
            "id": 1
        },
        {
            "name": "Medium",
            "price": 30.00,
            "id": 2
        },
        {
            "name": "Small",
            "price": 20.00,
            "id": 3
        }

    ],
    "toppings": [
        {
            "name": "Bacon",
            "price": 3.50,
            "id": 1
        },
        {
            "name": "Pepperoni",
            "price": 2.50,
            "id": 2
        },
        {
            "name": "Mushroom",
            "price": 2.00,
            "id": 3
        },
        {
            "name": "Olive",
            "price": 4.50,
            "id": 4
        },
        {
            "name": "Basil",
            "price": 3.00,
            "id": 5
        },
        {
            "name": "Sweetcorn",
            "price": 2.50,
            "id": 6
        },
        {
            "name": "Onion",
            "price": 3.00,
            "id": 7
        },
        {
            "name": "Tomatoe",
            "price": 3.50,
            "id": 8
        }
    ]
}

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/new">New order</Link>
                    </li>
                    <li>
                        <Link to="/status">Status</Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/">
                        <Dashboard
                            status={dashboardData.status}
                            sales={dashboardData.sales}
                            history={dashboardData.history}
                            report={dashboardData.report} />
                    </Route>
                    <Route path="/new">
                        <NewOrder sizes={orderOptionsData.sizes} toppings={orderOptionsData.toppings}/>
                    </Route>
                    <Route path="/status">
                        <Status orders={ordersData.orders} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
