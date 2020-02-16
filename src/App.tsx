import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import StatusPage from "./pages/Status.page";
import DashboardPage from "./pages/Dashboard.page";
import OrderCreatePage from "./pages/OrderCreate.page";

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
                        <DashboardPage />
                    </Route>
                    <Route path="/new">
                        <OrderCreatePage />
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
