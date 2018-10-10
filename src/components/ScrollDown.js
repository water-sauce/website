import React, { Component } from "react";
import { connect } from "react-redux";


class ScrollDown extends Component {
    componentDidUpdate() {
        console.log( window.pageYOffset );
        console.log( window.innerHeight );
    }

    constructor() {
        super();
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

// /** React components for scrolling back to the top of the page **/
// class ColoredContainer extends React.Component {
//   render () {
//     let containerStyle = {
//       backgroundColor: this.props.color
//     }
//     return <div className="container" style={containerStyle}></div>
//   }
// }

// class ScrollButton extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//         intervalId: 0
//     };
//   }
  
//   scrollStep() {
//     if (window.pageYOffset === 0) {
//         clearInterval(this.state.intervalId);
//     }
//     window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
//   }
  
//   scrollToTop() {
//     let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
//     this.setState({ intervalId: intervalId });
//   }
  
//   render () {
//       return <button title='Back to top' className='scroll' 
//                onClick={ () => { this.scrollToTop(); }}>
//                 <span className='arrow-up glyphicon glyphicon-chevron-up'></span>
//               </button>;
//    }
// } 

// class ScrollApp extends React.Component {
//   constructor() {
//     super();
    
//     this.state = {
//       colors: ["#044747", "#079191", "#38adad", "#90e3e3", "#d5f7f7"]
//     }
//   }
  
//   render () {
//     return <div className="long">
//               {
//                 this.state.colors.map(function(color) {
//                     return <ColoredContainer color={color}/>
//                 })
//               }
//               <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
//            </div>
//   }
// }
// /*
//  * Render the ScrollApp component into the div with the id 'app'
//  */
// React.render(<ScrollApp/>, document.getElementById('app'));