import React, { Component } from "react";

class ScrollDown extends Component {
    componentDidUpdate() {
        console.log( window.pageYOffset );
        console.log( window.innerHeight );
    }

    scrollDown = e => {
        e.preventDefault();
        console.log( window.pageYOffset );
        console.log( window.innerHeight );
        window.scroll({
            top: window.innerHeight,
            behavior: "smooth"
        })
    }
    
    render(props) {
        return (
            <a href="#" className={`scroll-down ` + this.props.other_class} title="scroll down" onClick={this.scrollDown}>
                <p className="direction-down">{ '\u003e' }</p>
            </a>
        )
   }
} 

export default ScrollDown;