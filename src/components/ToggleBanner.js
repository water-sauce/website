import React, { Component } from "react";
import HomeQuoteBanner from "../components/HomeQuoteBanner";

const section_sales = [
    {
        title: "Trusted By 40,000+ Sales And Marketing Professionals",
        rep_quote:
            "“Datanyze has dramatically impacted the quality of conversations our sales team has with prospects. We’re now setting 25% more demos per month and deals are closing almost 10 days faster as a result.”",
        quote_banner: "doubledutch-home",
        rep_quotee: "Russ Hearl",
        rep_title: "VP of Sales, Mid-Market",
        logo_img_src: require("../images/quote-banner/logos/doubledutch.png"),
        cta: "For Sales Leaders",
        cta_link: "/sales-solutions",
        quote_banner_class: "quote-banner-home",
        extraClass: "color-white",
        rep_img_id: "rep-home-1",
        rep_img_src: require("../images/quote-banner/reps/doubledutch-rep-home.png")
    }
];

const section_marketing = [
    {
        title: "Trusted By 40,000+ Sales And Marketing Professionals",
        rep_quote:
            "“Using Datanyze, New Relic can better understand the technology environment of our customers, which helps us create a highly informed, more personalized, and value-driven experience for them at every point of engagement.”",
        quote_banner: "newrelic-home",
        rep_quotee: "Isaac Wyatt",
        rep_title: "Director of Marketing Operations",
        logo_img_src: require("../images/quote-banner/logos/new-relic.png"),
        cta: "For Marketing Leaders",
        cta_link: "/marketing-solutions",
        quote_banner_class: "quote-banner-home",
        extraClass: "color-white",
        rep_img_id: "rep-home-2",
        rep_img_src: require("../images/quote-banner/reps/new-relic-rep-home.png")
    }
];

const section = {
    section_marketing,
    section_sales
};

class ToggleBanner extends Component {
    constructor() {
        super();
        this.state = { section: "section_sales" };
        this.toggle_section = this.toggle_section.bind(this);
    }

    toggle_section(section) {
        this.setState({
            section: `section_${section}`
        });
    }

    render() {
        return (
            <div>
                <center className="toggle toggle-home-section">
                    <a
                        className={`${
                            this.state.section === "section_sales"
                                ? "toggle-button active"
                                : "toggle-button"
                        }`}
                        onClick={() => this.toggle_section("sales")}
                    >
                        For Sales Leaders
                    </a>
                    <a
                        className={`${
                            this.state.section === "section_marketing"
                                ? "toggle-button active"
                                : "toggle-button"
                        }`}
                        onClick={() => this.toggle_section("marketing")}
                    >
                        For Marketing Leaders
                    </a>
                </center>
                <HomeQuoteBanner section={section[this.state.section]} />
            </div>
        );
    }
}

export default ToggleBanner;
