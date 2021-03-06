import React, { Component } from "react";
import { connect } from "react-redux";
import AppRouter from "./routers/AppRouter";

import ScrollToTop from "./components/ScrollToTop";
import PublicHeader from "./components/PublicHeader";
import HeaderOffset from "./components/HeaderOffset";
import PublicFooter from "./components/PublicFooter";

class App extends Component {
    render() {
        return (
            <div>
                <PublicHeader />
                <HeaderOffset />
                <ScrollToTop>
                    <AppRouter />
                </ScrollToTop>
                <PublicFooter />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};
const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
