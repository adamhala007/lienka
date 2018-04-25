import React, { Component } from 'react';
import Menu from "./Menu";
import '../css/EasyProg.css';
import { withRouter} from 'react-router-dom'
import ControlPanel from "./ControlPanel";
import SimulatorPanel from "./SimulatorPanel";
import CommandPanel from "./CommandPanel";
import {up, down, left, right, sound, light} from "./Blockly/Blockly";

import Blockly from 'node-blockly/browser';

import BlocklyDrawer, { Block, Category } from 'react-blockly-drawer';

const color1 = "#FF4900"; // title
const color2 = "#FF5A19"; // button color
const color3 = "#FFB79A"; // background color
const color4 = "#FFF6F3"; // hover
const color5 = "#FF8858"; //

const helloWorld =  {
    name: 'HelloWorld',
    category: 'Demo',
    block: {
        init: function () {
            this.jsonInit({
                message0: 'Hello %1',
                args0: [
                    {
                        type: 'field_input',
                        name: 'NAME',
                        check: 'String',
                    },
                ],
                output: 'String',
                colour: 160,
                tooltip: 'Says Hello',
            });
        },
    },
    generator: (block) => {
        const message = `'${block.getFieldValue('NAME')}'` || '\'\'';
        const code = `console.log('Hello ${message}')`;
        return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
};

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

export default withRouter(BlocklyProg);

