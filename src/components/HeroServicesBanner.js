import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { CSSTransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ScrollDown from "../components/ScrollDown";


class HeroServicesBanner extends Component {

	componentDidMount(){
		window.addEventListener( 'keydown', this.changeTopic, false);
	}

	changeTopic(e) {
		e = e || window.event
		if (e.keyCode === 37) {
			document.querySelector( '.direction-left' ).click()
		}
		if (e.keyCode === 39) {
			document.querySelector( '.direction-right' ).click()
		}
	}

	render(props) {
		return (
			<section className={this.props.cta_banner + " banner-service"} key="example">
				{ this.props.links === false ? '' :  
				<span>
					<Link ref={this.prevTopic} className="topic-left topic-wrapper" to={this.props.prev_link}>
						<p className="direction direction-left">{ '\u003e' }</p>
				        <p className="topic">{this.props.prev_topic}</p>
					</Link>
					<Link ref={this.nextTopic} className="topic-right topic-wrapper" to={this.props.next_link}>
						<p className="topic">{this.props.next_topic}</p>
						<p className="direction direction-right">{ '\u003e' }</p>
					</Link>
				</span> }
				<CSSTransitionGroup
			      transitionName="bannerTransition"
			      transitionAppear={true}
			      transitionAppearTimeout={500}
			      transitionEnter={false}
			      transitionLeave={false}>
					<Grid className="position-relative">
						<div className="cta-wrapper">
							<hgroup>
								<h2 className="current-topic">{this.props.topic}</h2>
								<h4>{this.props.title}</h4>
							</hgroup>
							<p>{this.props.subtitle}</p>
							{ this.props.links === false ? 
								<div className="cta-information">
									<a className="button button-orange" href={this.props.href} target="_blank">
									See Product
									</a>
								</div>
							 : 
							<div className="cta-information">
								<a className="button button-blue" href="mailto:info@watersauce.com?Subject=Hello%20Water%20Sauce">{this.props.cta}</a>
							</div>
							}
						</div>
						<img src={this.props.img_src_1} alt={this.props.img_alt_1} id={this.props.img_id_1}/>
					</Grid>
				</CSSTransitionGroup>
				<ScrollDown other_class="services" />
			</section>
		);
	}
}

HeroServicesBanner.propTypes = {
	cta: PropTypes.string
};

export default HeroServicesBanner;


// <ContactModal
//     cta={this.props.cta}
//     class={this.props.cta_contact_us_class}
// />