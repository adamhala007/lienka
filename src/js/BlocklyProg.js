import React, { Component } from 'react';
import Menu from "./Menu";
import '../css/EasyProg.css';
import { withRouter} from 'react-router-dom'
import ControlPanel from "./ControlPanel";
import SimulatorPanel from "./SimulatorPanel";
import CommandPanel from "./CommandPanel";
import {up, down, left, right, sound, light} from "./Blockly/Blockly";

import Blockly from 'node-blockly/browser';
import Workspace from 'node-blockly/browser';

import BlocklyDrawer, { Block, Category } from 'react-blockly-drawer';
import {saveBlocklyProgram} from '../firebase/client'
import axios from 'axios';

const color1 = "#FF4900"; // title
const color2 = "#FF5A19"; // button color
const color3 = "#FFB79A"; // background color
const color4 = "#FFF6F3"; // hover
const color5 = "#FF8858"; //


class BlocklyProg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            program: [],
            lastClicked: undefined,
        }
        this.simulator = React.createRef();
    }

    lastClicked=(clicked)=>{
        this.setState({
            lastClicked: clicked,
        })
    };

    addCommand=(cmd)=>{
        let joined = this.state.program.concat(cmd);
        this.setState({ program: joined })
    };

    delete=()=>{
        if(this.state.lastClicked === undefined){
            let array = this.state.program;
            array.splice(array.length-1, 1);
            this.setState({program: array });
        }else{
            let array = this.state.program;
            array.splice(this.state.lastClicked, 1);
            this.setState({program: array });
            this.state.lastClicked = undefined;
        }
    };

    simulate = () =>{
        this.simulator.current.timer();
    }

    load = (xml_text) => {
        let xml = Blockly.Xml.textToDom(xml_text);
        Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());
    };


    save=()=>{
        //console.log(workspace);
        let xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());

        let xml_text = Blockly.Xml.domToText(xml);
        console.log(xml);
        let programName = prompt("Please enter the name of the program:" , "");
        if (programName === null || programName === "") {

        } else {
            saveBlocklyProgram("adamhala007", programName, xml_text);
        }

        console.log(xml_text);
    }

    render (){
        return(
            <div className={"Home"}>
                <Menu/>
                <div className={"content"}>
                    <BlocklyDrawer
                        tools={[up, down, left, right, sound, light]}
                        onChange={(code, workspace) => {
                            console.log(code, workspace);
                        }}
                    >

                        <Category name="Movement" colour="200" >
                            <Block type="forward" tools={[up]}/>
                            <Block type="backward"/>
                            <Block type="left" />
                            <Block type="right" />
                        </Category>

                        <Category name="Cycles" colour="200">
                            <Block type="controls_if" />
                            <Block type="controls_whileUntil"/>
                            <Block type="controls_repeat" />
                            <Block type="controls_for" />
                        </Category>

                        <Category name="Operators" colour="240">
                            <Block type="logic_compare" />
                            <Block type="logic_operation" />
                            <Block type="logic_boolean" />

                            <Block type="math_arithmetic"/>
                        </Category>

                        <Category name="Variables" custom="VARIABLE" />
                        <Category name="Values">
                            <Block type="math_number" />
                            <Block type="text" />
                            <Block type="move_forward"/>
                            <Block type="move_backward"/>

                        </Category>
                    </BlocklyDrawer>



                    <div className="simulator">
                        <SimulatorPanel rows={8} cols={8} program={this.state.program} ref={this.simulator}/>
                    </div>

                    <div className="commands">
                        <button onClick={this.save}>Save</button>
                    </div>

                </div>
                <footer>
                    <p>© 2018 Adam Halász.  All rights reserved.</p>
                </footer>
            </div>

        )
    }
}

export default withRouter(BlocklyProg);

