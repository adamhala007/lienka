import React, { Component } from 'react';
import Menu from "./Menu";
import '../css/EasyProg.css';
import { withRouter} from 'react-router-dom'
import ControlPanel from "./ControlPanel";
import SimulatorPanel from "./SimulatorPanel";
import CommandPanel from "./CommandPanel";
import {loadBlocklyProgram, saveBlocklyProgram} from "../firebase/client";
import Blockly from "node-blockly/browser";

import {saveEasyProgram, loadEasyProgram} from '../firebase/client';

const color1 = "#FF4900"; // title
const color2 = "#FF5A19"; // button color
const color3 = "#FFB79A"; // background color
const color4 = "#FFF6F3"; // hover
const color5 = "#FF8858"; //

class EasyProg extends Component {

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
        document.getElementById("controlPanel-go").disabled = true;
        this.simulator.current.timer();
    }

    save = () => {

        let programName = prompt("Please enter the name of the program:" , "");
        if (programName === null || programName === "") {

        } else {
            saveEasyProgram(localStorage.getItem("user"), programName, this.state.program);
        }

    }

    load = async() => {
        let programName = prompt("Please enter the name of the program:" , "");
        if (programName === null || programName === "") {

        } else {
            let prog = await loadEasyProgram(localStorage.getItem("user"));
            this.setState({
                program: prog[programName]['program']
            })
        }

    }

    render (){
        if(localStorage.getItem("user") === null){
            this.props.history.push('/');
        }
        return(
            <div className={"Home"}>
                <Menu history={this.props.history}/>
                <div className={"content"}>

                    <div className="controls">
                        <ControlPanel addCommand={this.addCommand} delete={this.delete} simulate={this.simulate} save={this.save} load={this.load}/>
                    </div>

                    <div className="simulator">
                        <SimulatorPanel rows={8} cols={8} program={this.state.program} ref={this.simulator}/>
                    </div>

                    <div className="commands">
                        <CommandPanel rows={2} cols={15} program={this.state.program} lastClicked={this.lastClicked} />

                    </div>

                </div>
                <footer>
                    <p>© 2018 Adam Halász.  All rights reserved.</p>
                </footer>
            </div>

        )
    }
}

export default withRouter(EasyProg);

