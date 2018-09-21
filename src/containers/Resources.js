import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import HeroBanner from "../components/HeroBanner";
import ContactBanner from "../components/ContactBanner";

import WhatIsSEOAuditingPage from "../containers/resources/WhatIsSEOAuditingPage"

class Resources extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/what-is-seo-auditing"
                        component={WhatIsSEOAuditingPage}
                    />
                </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(Resources);


// <Switch>
//     <Route
//         exact
//         path="/what-is-seo-auditing"
//         render={() => (
//             <HeroBanner
//                 title="SEO Auditing"
//                 description=""
//                 src=""
//             />
//         )}
//     />
// </Switch>