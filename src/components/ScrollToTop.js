import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }
    render() {
        return this.props.children;
    }
}

const mapStateToProps = state => {
    return {};
};
const mapDispatchToProps = dispatch => {
    return {};
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ScrollToTop)
);
