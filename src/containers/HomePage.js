import React, { ReactDOM, Component, Fragment } from "react";
import Parallax from 'parallax-js';

import m1 from "../images/backgrounds/m1b.png";
import m2 from "../images/backgrounds/m2b.png";
import m3 from "../images/backgrounds/m3b.png";
import goat from "../images/backgrounds/mountain-goat.png";
import elk from "../images/backgrounds/elk.png";


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
							data-scalar-y="15"
						>
							<li className="layer" data-depth="0.10">
								<div id="main-bg"></div>
							</li>
							<li className="layer" data-depth="0.20">
								<img src={elk} alt="elk" id="elk" />
							</li>
							<li className="layer" datadepth="0.30" id="m3-layer">
								<img src={m3} className="mountain-range" id="m3" />
							</li>
							<li className="layer" data-depth="0.40">
								<img src={m2} className="mountain-range" id="m2" />
							</li>
							<li className="layer" data-depth="0.50">
								<img src={goat} alt="mountain goat" id="mountain-goat" />
							</li>
							
							<li className="layer" data-depth="0.60">
								<img src={m1} className="mountain-range" id="m1" />
							</li>
						</ul>
					</div>
					<div id="messaging">
						<h1>We do <br /> epic shit.</h1>
					</div>
				</div>
				<div>
					This the new shit.
				</div>

			</div>
		)
	}
}

export default HomePage;
