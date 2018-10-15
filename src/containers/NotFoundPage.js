import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const title = "Water Sauce | Page Not Found - 404 Error";
const description = "404 Page";

class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <link rel="canonical" href="https://www.watersauce.com/ux-design" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                    <meta property="og:url" content="https://www.watersauce.com/ux-design" />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                </Helmet>
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
            </div>
        );
    }
}

export default NotFoundPage;
