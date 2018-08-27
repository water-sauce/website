import React from "react";
import ReactDOM from "react-dom";
import arrow from "../images/icons/down-arrow.png";
class ScrollButton extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {zip:''};

    //     this.handleChange = this.handleChange.bind(this);
    // }

    // getInitialState() {
    //     return { state: 0 };
    // }

    handleScrollToElement() {
        console.log("working");
        // window.scrollTop(  76 );
    }

    render() {
        return (
            <img
                onClick={this.handleScrollToElement}
                className="down-arrow m-t-1"
                src={arrow}
                alt="scroll button"
                // id={this.state.height}
            />
        );
    }
}

export default ScrollButton;
