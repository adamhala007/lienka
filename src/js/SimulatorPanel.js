import React, { Component } from 'react';
import "../css/SimulatorPanel.css"


class SimulatorPanel extends Component{

    constructor(props){
        super(props);
        this.state = {
            rows: this.props.rows,
            cols: this.props.cols,
        }

    }

    render(){
        return(
            <div className="simulatorPanel-content">
                <div className="controlPanel-upperControls">
                    <div className="flex-grid">
                        <div className="col">
                            <div id="controlPanel-sound"/>
                            <div id="controlPanel-left"/>
                            <div id="controlPanel-blank"/>
                        </div>
                        <div className="col">
                            <div id="controlPanel-up"/>
                            <div id="controlPanel-go"/>
                            <div id="controlPanel-down"/>
                        </div>
                        <div className="col">
                            <div id="controlPanel-light"/>
                            <div id="controlPanel-right"/>
                            <div id="controlPanel-blank"/>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default SimulatorPanel;