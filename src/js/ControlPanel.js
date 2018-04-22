import React, { Component } from 'react';
import "../css/ControlPanel.css"


class ControlPanel extends Component{
    render(){
        return(
            <div className="controlPanel-content">
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

export default ControlPanel;