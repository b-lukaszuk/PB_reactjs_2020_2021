import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./conteners/landingPage/LandingPage";
import TodosPage from "./conteners/todosPage/TodosPage";
import ProtectedRoute from "./conteners/todosPage/ProtectedRoute";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage}>
                </Route>
                <Route exact path="/login" component={LandingPage}>
                </Route>
                <ProtectedRoute exact path="/todos" component={TodosPage}>
                </ProtectedRoute>
                <Route path="*" component={() => "404 NOT FOUND"}>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
