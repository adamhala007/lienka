import React, { Component } from 'react';
//import Toolbar from "../css/Toolbar";
import Menu from "./Menu";
import '../css/Home.css';
import Article from "./Article";

const color1 = "#FF4900"; // title
const color2 = "#FF5A19"; // button color
const color3 = "#FFB79A"; // background color
const color4 = "#FFF6F3"; // hover
const color5 = "#FF8858"; //

export default class Home extends Component {
    render (){
        return(
            <div className={"Home"}>
                <Menu/>
                <div className={"content"}>
                    <div className="page">
                        <div className="blocklyImage" />
                        <div className="blocklyText" >
                            <p>sdfsdfsdfsfdsdsff</p>
                        </div>

                    </div>
                    <div style={{clear: "both"}}></div>
                    <div className="page">
                        <div className="blocklyImage" />
                        <div className="blocklyText" >
                            <p>sdfsdfsdfsfdsdsff</p>
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

