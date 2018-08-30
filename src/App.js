import React, { Component } from "react";
import { connect } from "react-redux";
import AppRouter from "./routers/AppRouter";

import ScrollToTop from "./components/ScrollToTop";
import PublicHeader from "./components/PublicHeader";
import PublicFooter from "./components/PublicFooter";
// import ContactModal from "./components/ContactModal";

class App extends Component {
    render() {
        return (
            <div>
                <PublicHeader />
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
