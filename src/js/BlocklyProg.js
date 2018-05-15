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
import {saveBlocklyProgram, loadBlocklyProgram} from '../firebase/client';
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
        document.getElementById("bSimulate").disabled = true;
        let xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
        let elements = xml.getElementsByTagName("block");
        //console.log(elements)

        while(this.state.program.length > 0) {
            this.state.program.pop();
        }
        this.interpret(elements.item(0));

        this.simulator.current.setState({
            index: 0,
            intervalId: null,
        })
        this.simulator.current.timer();
    }

    load = async() => {

        let programName = prompt("Please enter the name of the program:" , "");
        if (programName === null || programName === "") {

        } else {
            let loadedValue = await loadBlocklyProgram(localStorage.getItem("user"));
            let xml = Blockly.Xml.textToDom(loadedValue[programName]['program']);

            Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());
        }
        //console.log(loadedValue['aa']['program']);
        //console.log("LoadedValue: ");
        //console.log(loadedValue);
        /*let arr = [];
        Object.keys(loadedValue).forEach(function(key) {
            arr.push(key);
        });*/
        //console.log(arr);


    };


    save=()=>{
        //console.log(workspace);
        let xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());

        let xml_text = Blockly.Xml.domToText(xml);
        console.log(xml);
        let programName = prompt("Please enter the name of the program:" , "");
        if (programName === null || programName === "") {

        } else {
            saveBlocklyProgram(localStorage.getItem("user"), programName, xml_text);
        }

        console.log(xml_text);
    }

    run=()=>{
        let xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
        let elements = xml.getElementsByTagName("block");
        //console.log(elements)

        while(this.state.program.length > 0) {
            this.state.program.pop();
        }
        this.interpret(elements.item(0));
        //console.log(this.state.program)

        /*for (let i = 0; i< elements.length; i++){
            console.log(elements.item(i))
            console.log(elements.item(i).childNodes)
            //console.log(elements.item(i).childNodes.keys())
            //console.log(xml.getElementsByTagName("block")[i])
        }*/

        //console.log(xml.getElementsByTagName("block"))
       // console.log(xml.getElementsByTagName("block")[0])

        //console.log(xml.getElementsByTagName("block")[0].getAttribute("type"))

    }

    interpret=(block)=>{
        //console.log(block.getAttribute("type"))

        try {
           switch (block.getAttribute("type")){
               case "forward":
                   for (let i = 0; i< block.getElementsByTagName("value").item(0).childNodes.item(0).childNodes.item(0).textContent ; i++){
                       this.state.program.push("up");
                   }
                   break;

               case "backward":
                   for (let i = 0; i< block.getElementsByTagName("value").item(0).childNodes.item(0).childNodes.item(0).textContent ; i++){
                       this.state.program.push("down");
                   }
                   break;

               case "left":
                   for (let i = 0; i< block.getElementsByTagName("value").item(0).childNodes.item(0).childNodes.item(0).textContent / 90 ; i++){
                       this.state.program.push("left");
                   }
                   break;

               case "right":
                   for (let i = 0; i< block.getElementsByTagName("value").item(0).childNodes.item(0).childNodes.item(0).textContent / 90 ; i++){
                       this.state.program.push("right");
                   }
                   break;

               case "light":
                   this.state.program.push("light");
                   break;

               case "sound":
                   this.state.program.push("sound");
                   break;
           }
        }catch (err){
            console.log("block value error");
        }

        /*if (block.getAttribute("type") === "forward"){
            //block.childNodes['value']
            try {
                for (let i = 0; i< block.getElementsByTagName("value").item(0).childNodes.item(0).childNodes.item(0).textContent ; i++){
                    this.state.program.push("up");
                }
            }catch (err) {
                console.log("block value error")
            }
        }else if (block.getAttribute("type") === "backward"){
            //block.childNodes['value']
            try {
                for (let i = 0; i< block.getElementsByTagName("value").item(0).childNodes.item(0).childNodes.item(0).textContent ; i++){
                    this.state.program.push("down");
                }
            }catch (err) {
                console.log("block value error")
            }
        }*/

        try {
            let nextBlock = block.getElementsByTagName("next").item(0).getElementsByTagName("block").item(0);
            //console.log("nextBlock", nextBlock.item(0).getElementsByTagName("block").item(0))
            if (nextBlock !== null){
                this.interpret(nextBlock);
            }
        }catch (err){
            console.log("there is no other next block")
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
                    <BlocklyDrawer
                        tools={[up, down, left, right, sound, light]}
                        onChange={(code, workspace) => {
                            //console.log(code, workspace);
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
                        <button onClick={this.load}>Load</button>
                        <button id="bSimulate" onClick={this.simulate}>Run</button>
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

