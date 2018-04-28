import React, { Component } from 'react';
import Menu from "./Menu";
import '../css/Statistics.css';
import { Link, withRouter} from 'react-router-dom'
import {getLogs} from '../firebase/client';

import ReactTable from "react-table";
import "react-table/react-table.css";

const color1 = "#FF4900"; // title
const color2 = "#FF5A19"; // button color
const color3 = "#FFB79A"; // background color
const color4 = "#FFF6F3"; // hover
const color5 = "#FF8858"; //

class Home extends Component {
    constructor(props){
        super(props);

        this.state={
            data:
            [
                {
                    username: '',
                    date: '',
                    time: '',
                    action: '',
                },
            ]
        }
        this.columns = [{
            Header: 'Meno',
            accessor: 'username' // String-based value accessors!
        }, {
            Header: 'Dátum',
            accessor: 'date',
            //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        }, {
            //id: 'friendName', // Required because our accessor is not a string
            Header: 'Čas',
            accessor: 'time',
            //accessor: d => d.friend.name // Custom value accessors!
        }, {
            Header: props => <span>Akcia</span>, // Custom header components!
            accessor: 'action'
        }]

    }

    setData = async() => {
        let user = localStorage.getItem("user")
        let json = await getLogs(user);
        let res = new Array(0);
        Object.keys(json).forEach(function(key) {
            let date = new Date(parseInt(key))

            let data = {
                username: user,
                date: date.toLocaleDateString(),
                time: date.toLocaleTimeString(),
                action: json[key].logInOut===true?"login":"logout",
            }
            res.push(data);
        });
        return res;
    }

    componentWillMount() {

        Promise.all([this.setData()]).then(data=>{
            this.setState({
                data:data[0]
            })
            this.state.data = data[0];
            console.log(data[0])
        });
    }

    render (){
        if(localStorage.getItem("user") === null){
            this.props.history.push('/');
        }
        return(
            <div className={"Statistics"}>
                <Menu history={this.props.history}/>
                <div className={"content"}>
                    <ReactTable
                        data={this.state.data}
                        columns={this.columns}
                    />

                </div>
                <footer>
                    <p>© 2018 Adam Halász.  All rights reserved.</p>
                </footer>
            </div>

        )
    }
}

export default (Home);

