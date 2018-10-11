import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class NotFoundPage extends Component {
    render() {
        return (
            <section className="not-found-page">
                <div className="not-found-haiku">
                    <div className="">
                        <p>A haiku to guide you:</p>
                        <h4>
                            <Fragment>
                            Page not found,<br/>
                            but we hope you find<br/>
                            your true self
                            </Fragment>
                        </h4>
                        <Link to="/">Return Home</Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default NotFoundPage;
