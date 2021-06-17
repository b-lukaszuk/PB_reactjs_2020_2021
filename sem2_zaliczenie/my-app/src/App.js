import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import LandingPage from "./conteners/landingPage/LandingPage";
import TodosPage from "./conteners/todosPage/TodosPage";
import TodoItem from "./conteners/lists/TodoItem";
import { authContext, AuthProvider } from "./components/AuthProvider";

export const UserContext = React.createContext({});

function App(props) {

    const ProtectedRoute = ({ children }) => {
        const { isAuthenticated } = React.useContext(authContext);
        if (isAuthenticated) {
            return children;
        }
        return <Redirect to={{ pathname: "/login" }} />;
    };

    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route exact path="/login">
                        <LandingPage />
                    </Route>
                    <Route exact path="/todos">
                        <ProtectedRoute>
                            <TodosPage />
                        </ProtectedRoute>
                    </Route>
                    <Route exact path="/todos/:id">
                        <ProtectedRoute>
                            <TodoItem />
                        </ProtectedRoute>
                    </Route>
                    <Route path="*">{() => "404 NOT FOUND"}</Route>
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;
