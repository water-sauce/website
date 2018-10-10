import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// NAVLINKS
import HomePage from "../containers/HomePage";

//  Services / SOLUTIONS
import Services from "../containers/Services";
import Resources from "../containers/Resources";


//  ABOUT
import About from "../containers/About";

//  CONTACT
// import ContactPage from "../containers/Contact";

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
        path: "/web-design",
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
        path: "/email-campaigns",
        component: Services,
    },
    {
        path: "/ux-design",
        component: Services,
    },
    {
        path: "/what-is-seo-auditing",
        component: Resources,
    },
    {
        path: "/who-we-are",
        component: About,
    },
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
