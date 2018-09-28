import React, { Component, Fragment } from "react";
import Parallax from 'parallax-js';
import { Helmet } from "react-helmet";
import HomeCards from "../components/HomeCards.js";
import HeroServicesBanner from "../components/HeroServicesBanner";

import m1 from "../images/backgrounds/m1e.png";
import m2 from "../images/backgrounds/m2d.png";
import m3 from "../images/backgrounds/m3d.png";
import eagle from "../images/backgrounds/eagle2.png";

const title = "Water Sauce is an digital design agency helping regular people do extraordinary web stuff";
const description = "Water Sauce helps companies of all sizes and industries improve their web presence through strategic web design & development, SEO, branding, email campaigns, fundraising campaigns, and UX design.";

const service_types = [
    {
        title: "Web Design",
        description: (
            <Fragment></Fragment>
        ),
        src: require("../images/banner/butterfly-2.png"),
        link: "/web-design"
    },
    {
        title: "SEO",
        description: (
            <Fragment></Fragment>
        ),
        src: require("../images/banner/parrot-6.png"),
        link: "/seo"
    },
    {
        title: "Branding",
        description: (
            <Fragment></Fragment>
        ),
        src: require("../images/banner/lion.png"),
        link: "/branding"
    },
    {
        title: "Fundraising Materials",
        description: (
            <Fragment></Fragment>
        ),
        src: require("../images/banner/shark-2.png"),
        link: "/fundraising-materials"
    },
    {
        title: "Email Campaigns",
        description: (
            <Fragment></Fragment>
        ),
        src: require("../images/banner/snail-4.png"),
        link: "/email-campaigns"
    },
    {
        title: "UX Design",
        description: (
            <Fragment></Fragment>
        ),
        src: require("../images/banner/face-2.png"),
        link: "/ux-design"
    },
];


class HomePage extends Component {
	componentDidMount() {
		this.parallax = new Parallax(this.scene)
	}

	componentWillUnmount() {
		this.parallax.disable()
	}

	render() {
		return (
			<div>
                <Helmet>
                    <title>{title}</title>
                    <link rel="canonical" href="https://www.watersauce.com/" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                </Helmet>

				<div id="ultimate-wrapper" className="clearfix" >
					<div id="home-wrapper">
						<ul 
							ref={el => this.scene = el}
							id="scene"
							className="scene"
							data-relative-input="true"
							data-hover-only="true"
							data-friction-x="0.1"
							data-friction-y="0.1"
							data-scalar-x="10"
							data-scalar-y="7"
						>
							<li className="layer" data-depth="0.10">
								<div id="main-bg"></div>
							</li>
							<li className="layer" data-depth="0.20">
								<img src={eagle} id="eagle" alt="Water Sauce Eagle" />
							</li>
							<li className="layer" datadepth="0.30" id="m3-layer">
								<img src={m3} className="mountain-range" id="m3" alt="Water Sauce Mountain Range background" />
							</li>
							<li className="layer" data-depth="0.40">
								<img src={m2} className="mountain-range" id="m2" alt="Water Sauce Mountain Range middle layer" />
							</li>
							<li className="layer" data-depth="0.60">
								<img src={m1} className="mountain-range" id="m1" alt="Water Sauce Mountain Range foreground" />
							</li>
						</ul>
					</div>
					<div id="messaging">
						<h1>We. Move.<br /><b>Mountains.</b></h1>
					</div>
				</div>
                
				<HomeCards services={service_types} />
			</div>
		)
	}
}

export default HomePage;
