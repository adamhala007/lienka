import React, { Component } from 'react';
import "../css/SimulatorPanel.css"
import Square from "./Square";


class SimulatorPanel extends Component{

    constructor(props){
        super(props);
        this.state = {
            rows: this.props.rows,
            cols: this.props.cols,
            squares: [],
            degree: 0,
            ladyBugX: 4,
            ladyBugY: 4,
            index:0,
            intervalID: undefined,
        }

    }

    componentDidMount () {


    }

    timer = () => {

        var intervalId = setInterval(this.simulate, 1000);
        // store intervalId in the state so it can be accessed later:
        this.setState({intervalId: intervalId});
    }

    simulate = () =>{
        if (this.state.index === this.props.program.length){
            clearInterval(this.state.intervalId);
        }else{
            if(this.props.program[this.state.index] === "up" ){
                console.log("X: " + this.state.ladyBugX + " " + this.state.degree + " -" + Math.cos(this.state.degree));
                console.log("Y: " + this.state.ladyBugY + " " + this.state.degree + " +" + Math.sin(this.state.degree));
                this.setState({
                    ladyBugX: this.state.ladyBugX - Math.cos(this.state.degree*Math.PI/180),
                    ladyBugY: this.state.ladyBugY + Math.sin(this.state.degree*Math.PI/180),
                    index : this.state.index + 1,
                })

            }else if(this.props.program[this.state.index] === "down"){
                this.setState({
                    ladyBugX: this.state.ladyBugX + Math.cos(this.state.degree*Math.PI/180),
                    ladyBugY: this.state.ladyBugY - Math.sin(this.state.degree*Math.PI/180),
                    index : this.state.index + 1,
                })
            }else if(this.props.program[this.state.index] === "left"){
                this.setState({
                    degree: (this.state.degree - 90) % 360,
                    index : this.state.index + 1,
                })
            }else if(this.props.program[this.state.index] === "right"){
                this.setState({
                    degree: (this.state.degree + 90) % 360,
                    index : this.state.index + 1,
                })
            }else if(this.props.program[this.state.index] === "light"){
                console.log("Light");
                this.setState({
                    index : this.state.index + 1,
                })
            }else if(this.props.program[this.state.index] === "sound"){
                console.log("Sound");
                this.setState({
                    index : this.state.index + 1,
                })
            }


        }
    };


    render(){

        let w = 510;
        let h = 510;

        this.state.squares=[];

        for(let i=0; i<this.state.cols; i++){
            for(let j=0; j<this.state.rows; j++){
                let val1 = (i === this.state.ladyBugX);
                let val2 = (j === this.state.ladyBugY);

                if( val1 && val2){
                    if(this.state.degree === 0)
                        this.state.squares.push(<Square key={i*100+j} i={i} j={j} width={(w/this.state.cols)-2} height={(h/this.state.rows)-2} image={"ladyBug"}/>);
                    else if(this.state.degree === 90)
                        this.state.squares.push(<Square key={i*100+j} i={i} j={j} width={(w/this.state.cols)-2} height={(h/this.state.rows)-2} image={"ladyBug90"}/>);
                    else if(this.state.degree === 180)
                        this.state.squares.push(<Square key={i*100+j} i={i} j={j} width={(w/this.state.cols)-2} height={(h/this.state.rows)-2} image={"ladyBug180"}/>);
                    else if(this.state.degree === 270)
                        this.state.squares.push(<Square key={i*100+j} i={i} j={j} width={(w/this.state.cols)-2} height={(h/this.state.rows)-2} image={"ladyBug270"}/>);
                }else{

                    this.state.squares.push(<Square key={i*100+j} i={i} j={j} width={(w/this.state.cols)-2} height={(h/this.state.rows)-2} image={""}/>)
                }

            }

        }
        return(
            <div className="simulatorPanel-content"  >

                    <div className="flex-grid" ref={input => {this.myInput = input;}}>
                        {this.state.squares}

                    </div>


            </div>
        );
    }
}

export default SimulatorPanel;