import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NewOrder from "./components/NewOrder";
import StatusPage from "./pages/Status.page";
import dashboardData from "./mock/dashboard.json"
import orderOptionsData from "./mock/prices.json"

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
                        <StatusPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
