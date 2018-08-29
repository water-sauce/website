import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// NAVLINKS
import HomePage from "../containers/HomePage";

//  Services / SOLUTIONS
import Services from "../containers/Services";
import Resources from "../containers/Resources";


//  ABOUT
import About from "../containers/About";

//  OTHER PAGES
import NotFoundPage from "../containers/NotFoundPage.js";

const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/all-Services",
        component: Services,
    },
    {
        path: "/seo",
        component: Services,
    },
    {
        path: "/fundraising-materials",
        component: Services,
    },
    {
        path: "/branding",
        component: Services,
    },
    {
        path: "/what-is-seo-auditing",
        component: Resources,
    },
    {
        path: "/business-intelligence",
        component: Resources,
    },
    {
        path: "/careers",
        component: About,
    },
    {
        path: "/our-team",
        component: About,
    }
];

class AppRouter extends Component {
    render() {
        const routeComponents = routes.map(
            ({ path, component }, key) => (
                <Route
                    exact
                    path={path}
                    component={component}
                    key={key}
                />
            )
        );
        return (
            <div>
                <Switch>
                    {routeComponents}
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        );
    }
}

export default AppRouter;
