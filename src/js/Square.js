import React, {Component} from 'react';
import "../css/SimulatorPanel.css";

let squareStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: "#fff",
    border: "1px solid #000",
    color: 'black'
};

let textStyle = {
    color: '#000'
};



class Square extends Component {
    constructor(props){
        super(props);
        this.imageUrl =  '../images/ladybird.png';
        this.state = {
            i: this.props.i,
            j: this.props.j,
            width: this.props.width,
            height: this.props.height,
            ladyBug: this.props.ladyBug,

            squareStyle: {
                width: Math.floor(Math.min(this.props.width, this.props.height)) + "px",
                height: Math.floor(Math.min(this.props.width, this.props.height)) + "px",
                backgroundColor: "#fff",
                backgroundImage: 'url(' + this.imageUrl + ')',
                border: "1px solid #000",
                color: 'black',
            },

            ladyBugStyle: {
                width: Math.min(this.props.width, this.props.height) + "px",
                height: Math.min(this.props.width, this.props.height) + "px",
                backgroundImage: 'url(${imageUrl})',
                backgroundSize: "contain"
            },

        };
    }

    render(){

        return(
            <div>
                {!this.state.ladyBug && <div style={this.state.squareStyle} />}
                {this.state.ladyBug && <div className={"ladyBug"} />}
            </div>

        )
    }
}

export default Square;