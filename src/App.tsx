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
            <div className="bg-blue-900 text-white h-screen">
                <div className="container mx-auto px-8">
                    <header className="py-4">
                        <Link className="text-2xl" to="/">Pizza Manager</Link>
                    </header>
                    <div className="flex justify-between">
                        <ul className="w-1/6">
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
                        <div className="text-black bg-white rounded-lg w-5/6 px-12 py-12">
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
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
