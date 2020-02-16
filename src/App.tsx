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
                        <Dashboard />
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
