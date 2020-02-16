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
                        <NewOrder />
                    </Route>
                    <Route path="/status">
                        <Status />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
