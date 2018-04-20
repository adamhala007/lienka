import React, { Component } from 'react';
import '../css/TextField.css';


class TextField extends Component{
    constructor(props){
        super(props);
        this.state = {
            errorMessage: this.props.errorMessage,
            inputValue : ""
        }
        this.displayMsg = React.createRef();
        this.inputMsg = React.createRef();

    }

    setErrorMessage = (msg) => {
        console.log("MSG: " + msg);
        this.setState({
            errorMessage: msg,
        });
        if(msg === undefined){
            this.displayMsg.classname = "correctMessage";
        }else{
            this.displayMsg.classname = "incorrectMessage";
        }

    };

    getValue = () =>{
        return this.state.inputValue;
    };

    render(){
        return(
            <div>
                <div className={"correctMessage"} ref={this.displayMsg} >{this.state.errorMessage===undefined?"Chybný vstup":this.state.errorMessage}</div>
                <input type="text" ref={this.inputMsg} className={"field"} onChange={this.props.onChange}/>
            </div>


        )
    }
}

export default TextField;