import React from "react";
import {Route,BrowserRouter as Router,  Switch} from "react-router-dom";

import Home from "./components/home/home";
import Login from "./components/auth/login";
import SignUp from "./components/auth/signup";

const ROUTES = [
    { path: "/", key: "ROOT", exact: true, component: () => <Login/> },
    {
        path: "/home",
        key: "APP",
        component: RenderRoutes,
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
    {
        path: "/auth",
        key: "APP",
        component: RenderRoutes,
        routes: [
            {
                path: "/auth/login",
                key: "APP_PAGE",
                exact: true,
                component: () => <Login/>,
            },
            {
                path: "/auth/sign-up",
                key: "APP_PAGE",
                exact: true,
                component: () => <SignUp/>,
            },
            // {
            //     path: "/auth/sign-up/:userId", TODO dynamic routing like this
            //     key: "APP_PAGE",
            //     exact: true,
            //     component: () => <SignUp/>,
            // },

        ],

    },
];

export default ROUTES;

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
            <Route component={() =>
                <h1>Not Found!</h1>} />
        </Switch>
        </Router>
    );
}