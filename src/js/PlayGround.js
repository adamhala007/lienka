import React, { Component } from 'react';
import Menu from "./Menu";
import '../css/EasyProg.css';
import { withRouter} from 'react-router-dom'
import ControlPanel from "./ControlPanelPlayground";
import SimulatorPanel from "./SimulatorPanel";
import CommandPanel from "./CommandPanel";
import {loadBlocklyProgram, saveBlocklyProgram} from "../firebase/client";
import Blockly from "node-blockly/browser";

import {saveEasyProgram, loadEasyProgram} from '../firebase/client';
import ProgramChooser from "./ProgramChooser";

const color1 = "#FF4900"; // title
const color2 = "#FF5A19"; // button color
const color3 = "#FFB79A"; // background color
const color4 = "#FFF6F3"; // hover
const color5 = "#FF8858"; //

var host = "lienka.local"; //"192.168.0.106
//const host = "192.168.0.106"; //"192.168.0.106
//const host = "192.168.0.113"; //"192.168.0.106
const wsUri = "ws://" + (localStorage.getItem("ipAddress")!=null?localStorage.getItem("ipAddress"): host) + "/websocket/ws.cgi";

class PlayGround extends Component {

    constructor(props) {
        super(props);
        this.state = {
            program: [],
            lastClicked: undefined
        };
        this.simulator = React.createRef();
    }
    componentDidMount(){
        // this is an "echo" websocket service
        this.connection = new WebSocket(wsUri);
        // listen to onmessage event
        this.connection.onmessage = evt => {
            // add the new message to state
            this.setState({
                messages : this.state.messages.concat([ evt.data ])
            })
        };

        this.connection.onopen = evt =>{
            console.log("CONNECTED");
            this.doSend("WebSocket rocks");
        };

        this.connection.onclose = evt =>{
            console.log("CONNECTED");
            this.doSend("WebSocket rocks");
        };

        this.connection.onmessage = evt =>{
            console.log("RECIEVED: " + evt.data);
        };

        this.connection.onerror = evt =>{
            console.log("ERROR: " + evt.data);
        };

    }
    lastClicked=(clicked)=>{
        this.setState({
            lastClicked: clicked,
        })
    };

    doSend=(message)=>{
        console.log("SENT: " + message);
        console.log("ReadyState: " + this.connection.readyState);
        this.connection.send(message);
    };

    addCommand=(cmd)=>{

        switch (cmd) {
            case "up":
                this.doSend("18");
                break;
            case "down":
                this.doSend("12");
                break;
            case "left":
                this.doSend("14");
                break;
            case "right":
                this.doSend("16");
                break;
            default:
                this.doSend("10");

        }

        /*let joined = this.state.program.concat(cmd);
        this.setState({ program: joined });
        console.log("PROGRAM: " + this.state.program);
        console.log("PROGRAM: " + this.convertProgramToString());*/
    };

    delete=()=>{
        /*if(this.state.lastClicked === undefined){
            let array = this.state.program;
            array.splice(array.length-1, 1);
            this.setState({program: array });
        }else{
            let array = this.state.program;
            array.splice(this.state.lastClicked, 1);
            this.setState({program: array });
            this.state.lastClicked = undefined;
        }*/
        this.doSend("10");
    };

    convertProgramToString=()=>{
        let program = "";
        for (let i = 0; i < this.state.program.length; i++) {
            switch (this.state.program[i]) {
                case "up":
                    program += "MF;";
                    break;
                case "down":
                    program += "MB;";
                    break;
                case "left":
                    program += "ML;";
                    break;
                case "right":
                    program += "MR;";
                    break;
                case "sound":
                    program += "SO;";
                    break;
            }
        }
        return program;
    };

    simulate = () =>{
        //document.getElementById("controlPanel-go").disabled = true;
        //this.simulator.current.timer();
        //this.doSend("00");
        this.doSend(this.convertProgramToString());
    };

    save = () => {

        let programName = prompt("Please enter the name of the program:" , "");
        if (programName === null || programName === "") {

        } else {
            saveEasyProgram(localStorage.getItem("user"), programName, this.state.program);
        }

    };

    load = async() => {
        let programName = prompt("Please enter the name of the program:" , "");
        if (programName === null || programName === "") {

        } else {
            let prog = await loadEasyProgram(localStorage.getItem("user"));
            this.setState({
                program: prog[programName]['program']
            })
        }

    };



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

                    <ProgramChooser/>

                </div>
                <footer>
                    <p>© 2018 Adam Halász.  All rights reserved.</p>
                </footer>
            </div>

        )
    }
}

export default withRouter(PlayGround);
