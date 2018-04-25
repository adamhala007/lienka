import React, { Component } from 'react';
import Menu from "./Menu";
import '../css/Home.css';
import { Link, withRouter} from 'react-router-dom'

const color1 = "#FF4900"; // title
const color2 = "#FF5A19"; // button color
const color3 = "#FFB79A"; // background color
const color4 = "#FFF6F3"; // hover
const color5 = "#FF8858"; //

class Home extends Component {
    constructor(props){
        super(props);
    }

    callEasyprog =() =>{
        this.props.history.push("/easyprog");
    };

    callBlocklyprog =() =>{
        this.props.history.push("/blocklyprog");
    };

    render (){
        return(
            <div className={"Home"}>
                <Menu/>
                <div className={"content"}>

                    <div className="page">
                        <div className="easyProgrammingImage" onClick={this.callEasyprog}/>
                        <div className="easyProgrammingText" >
                            <h2>Pre deti</h2>
                            <p>Vyklikaním postupností jednoduchých príkazov (šípka hore, dole, vľavo, vpravo, zvukový signál, svetelný signál, atď.) sa dajú vyskladať jednoduché programi.</p>
                        </div>

                    </div>

                    <div className="page">
                        <div className="blocklyImage" onClick={this.callBlocklyprog} />
                        <div className="blocklyText" >
                            <h2>Pre mladých študentov programovania</h2>
                            <p>Pomocou Blockly vedia vyskladať jednoduché programy ťahaním blokov, ako napríklad cykly (for, while), podmienené príkazy (if), atď.</p>
                        </div>

                    </div>
                </div>
                <footer>
                    <p>© 2018 Adam Halász.  All rights reserved.</p>
                </footer>
            </div>

        )
    }
}

export default (Home);

