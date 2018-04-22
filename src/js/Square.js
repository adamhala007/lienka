import React, {Component} from 'react';

class Square extends Component {
    constructor(props){
        super(props);
        this.state = {
            key: this.props.key,
        };

        style = {
            width: "50px",
            height: "50px",
            backgroundColor: "#fff",
            border: "1px solid #000",
        }
    }

    render(){
        return(
            <div style={this.style} />
        )
    }
}

export default Square;