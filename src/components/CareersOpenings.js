import React, { Component } from "react";
import { connect } from "react-redux";

class CareersOpenings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            html: ""
        };
    }

    async componentDidMount() {
        try {
            let result = await fetch(
                "https://angel.co/job_profiles/embed?startup=datanyze"
            );
            result = await result.text();
            this.setState({
                isLoaded: true,
                html: result
            });
        } catch (e) {
            this.setState({
                isLoaded: true,
                error: e,
                html: ""
            });
        }
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
            );
        }
        return <div>Loading...</div>;
    }
}

const mapStateToProps = state => {
    return {};
};
const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CareersOpenings);
