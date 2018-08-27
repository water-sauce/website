import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./main.css";

import fontawesome from "@fortawesome/fontawesome";
import fa_brands from "@fortawesome/fontawesome-free-brands";
import fa_solids from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(fa_brands, fa_solids);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById("app")
);

// ReactDOMServer.renderToString(<Handler />);

registerServiceWorker();
