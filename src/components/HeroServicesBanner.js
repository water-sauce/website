import React, { Component, Text } from "react";
import { Grid, Row } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import { Transition, CSSTransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ContactModal from "../components/ContactModal";


class HeroServicesBanner extends Component {
	render(props) {
		return (
			<section className={this.props.cta_banner + " banner-service"} key="example">
				<CSSTransitionGroup
			      transitionName="bannerTransition"
			      transitionAppear={true}
			      transitionAppearTimeout={500}
			      transitionEnter={false}
			      transitionLeave={false}>
					<Grid className="position-relative">
						<Link className="topic topic-left" to={this.props.prev_link}>
							<span className="direction direction-left">{ '\u003e' }</span>
					        {this.props.prev_topic}
						</Link>
						<Link className="topic topic-right" to={this.props.next_link}>{this.props.next_topic}
							<span className="direction direction-right">{ '\u003e' }</span>
						</Link>
						<div className="cta-wrapper">
							<h2 className="current-topic">{this.props.topic}</h2>
							<h4>{this.props.title}</h4>
							<p>{this.props.subtitle}</p>
							<div className="cta-information">
								<a class="button button-blue" href="mailto:info@watersauce.com?Subject=Hello%20Water%20Sauce">{this.props.cta}</a>
							</div>
						</div>
						<img src={this.props.img_src_1} alt={this.props.img_alt_1} id={this.props.img_id_1}/>
					</Grid>
				</CSSTransitionGroup>
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