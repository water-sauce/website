import React, { Component } from "react";

class AboutHeroBanner extends Component {
    render(props) {
        return (
            <div className={this.props.banner_class + " about-banner"} >
                <div className="grid-container">
                    <div className="content-wrapper content-wrapper-2">
                        <img src={this.props.src} alt={this.props.alt} id={this.props.img_id} />
                    </div>
                    <div className="content-wrapper content-wrapper-1">
                        <div className="content content-dictionary">
                            <h1>{this.props.title}</h1>
                            {this.props.description}
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default AboutHeroBanner;