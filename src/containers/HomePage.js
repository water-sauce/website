import React, { ReactDOM, Component, Fragment } from "react";
import Parallax from 'parallax-js';


class HomePage extends Component {
	componentDidMount() {
		this.parallax = new Parallax(this.scene)
	}

	componentWillUnmount() {
		this.parallax.disable()
	}

	render() {
		return (
			<div id="ultimate-wrapper" className="clearfix">
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
						<li className="layer" datadepth="0.20">
							<div id="m3"></div>
						</li>
						<li className="layer" data-depth="0.30">
							<div id="m2"></div>
						</li>
						<li className="layer" data-depth="0.40">
							<div id="m1"></div>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default HomePage;
