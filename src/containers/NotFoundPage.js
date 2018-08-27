import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <h4>
                    Looks like you're lost! Try tracking{" "}
                    <Link to="/">home</Link>
                </h4>
            </div>
        );
    }
}

export default NotFoundPage;
