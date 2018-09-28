import React, { Component } from "react";
import { Helmet } from "react-helmet";

const title = "Water Sauce | About Us Page";
const description = "Water Sauce is an agency that helps every company become both a need and a want to its target audience.";

class WhoWeArePage extends Component {
    render() {
        return (
            <Helmet>
                <title>{title}</title>
                <link rel="canonical" href="https://www.watersauce.com/who-we-are" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
            </Helmet>
        );
    }
}

export default WhoWeArePage;
