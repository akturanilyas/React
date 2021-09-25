import React from "react";
import {Route,BrowserRouter as Router,  Switch} from "react-router-dom";
import Home from "./components/home/home";

const ROUTES = [
    { path: "/", key: "ROOT", exact: true, component: () => <h1>Log in</h1> },
    {
        path: "/home",
        key: "APP",
        component: RenderRoutes, // here's the update
        routes: [
            {
                path: "/home",
                key: "APP_ROOT",
                exact: true,
                component: () => <Home/>,
            },
            {
                path: "/app/page",
                key: "APP_PAGE",
                exact: true,
                component: () => <h1>App Page</h1>,
            },
        ],
    },
];

export default ROUTES;

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={props => <route.component {...props} routes={route.routes} />}
        />
    );
}

export function RenderRoutes({ routes }) {
    return (
        <Router>
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes key={route.key} {...route} />;
            })}
            <Route component={() => <h1>Not Found!</h1>} />
        </Switch>
        </Router>
    );
}