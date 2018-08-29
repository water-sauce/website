import React, { Component } from "react";
import { connect } from "react-redux";
import AppRouter from "./routers/AppRouter";

import PublicHeader from "./components/PublicHeader";
import PublicFooter from "./components/PublicFooter";
import ContactModal from "./components/ContactModal";

class App extends Component {
    render() {
        return (
            <div>
                <PublicHeader />
                <AppRouter />
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
