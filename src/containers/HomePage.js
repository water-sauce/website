import React, { Component, Fragment } from "react";
import m1 from "../images/backgrounds/m1.png";
import m2 from "../images/backgrounds/m2.png";
import m3 from "../images/backgrounds/m3.png";

class HomePage extends Component {
    render(props) {
        return (
        	<div id="home-wrapper">
	        	<div id="home-banner">
	        		<ul>
	            	<li><div id="sky"></div></li>
	            	<li><div id="m1"></div></li>
	            	</ul>
	            	<img src={m2} alt="mountains" id="m2" className="mountain-range"/>
	            	<img src={m3} alt="mountains" id="m3" className="mountain-range"/>
	                <p>this is the home page</p>
	            </div>
	        </div>
        );
    }
}

export default HomePage;
