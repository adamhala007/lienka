import React, { Component } from 'react';
import "../css/ControlPanel.css"


class ControlPanel extends Component{
    constructor(props){
        super(props);

    }

    addCommand =(cmd) =>{

        this.props.program.push(cmd);
        console.log(this.props.program);
    }

    render(){
        return(
            <div className="controlPanel-content">
                <div className="controlPanel-upperControls">
                    <div className="flex-grid">
                        <div className="col">
                            <div id="controlPanel-sound" onClick={() => this.props.addCommand("sound")} />
                            <div id="controlPanel-left" onClick={() => this.props.addCommand("left")} />
                            <div id="controlPanel-blank" />
                        </div>
                        <div className="col">
                            <div id="controlPanel-up" onClick={() => this.props.addCommand("up")} />
                            <div id="controlPanel-delete" onClick={() => this.props.delete()}/>
                            <div id="controlPanel-down" onClick={() => this.props.addCommand("down")} />
                        </div>
                        <div className="col">
                            <div id="controlPanel-light" onClick={() => this.props.addCommand("light")} />
                            <div id="controlPanel-right" onClick={() => this.props.addCommand("right")} />
                            <div id="controlPanel-blank" />
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default ControlPanel;