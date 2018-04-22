import React, { Component } from 'react';
import Menu from "./Menu";
import '../css/EasyProg.css';
import { withRouter} from 'react-router-dom'
import ControlPanel from "./ControlPanel";
import SimulatorPanel from "./SimulatorPanel";

const color1 = "#FF4900"; // title
const color2 = "#FF5A19"; // button color
const color3 = "#FFB79A"; // background color
const color4 = "#FFF6F3"; // hover
const color5 = "#FF8858"; //

class EasyProg extends Component {
    render (){
        return(
            <div className={"Home"}>
                <Menu/>
                <div className={"content"}>

                    <div className="controls">
                        <ControlPanel/>
                    </div>

                    <div className="simulator">
                        <SimulatorPanel rows={10} cols={10} />
                    </div>

                    <div className="commands">
                        Commands
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

