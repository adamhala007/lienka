import React, { Component } from 'react';
import "../css/SimulatorPanel.css"
import Square from "./Square";


class SimulatorPanel extends Component{

    constructor(props){
        super(props);
        this.state = {
            rows: this.props.rows,
            cols: this.props.cols,
            squares: []
        }

    }

    componentDidMount () {


    }


    render(){

        let w = 510;
        let h = 510;

        for(let i=0; i<this.state.cols; i++){
            for(let j=0; j<this.state.rows; j++){
                let val1 = (i === Math.floor(this.state.cols/2));
                let val2 = (j === Math.floor(this.state.rows/2));

                if( val1 && val2){
                    console.log(i + " " + j);
                    this.state.squares.push(<Square key={i*100+j} i={i} j={j} width={(w/this.state.cols)-2} height={(h/this.state.rows)-2} ladyBug={true}/>)
                }else{

                    this.state.squares.push(<Square key={i*100+j} i={i} j={j} width={(w/this.state.cols)-2} height={(h/this.state.rows)-2} ladyBug={false}/>)
                }

            }

        }
        return(
            <div className="simulatorPanel-content"  >

                    <div className="flex-grid" ref={input => {this.myInput = input;}}>
                        {this.state.squares}

                        <div className="col">

                        </div>
                        <div className="col">

                        </div>
                    </div>


            </div>
        );
    }
}

export default SimulatorPanel;