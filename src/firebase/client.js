import axios from 'axios';
import React, { Component } from 'react';


export const saveBlocklyProgram = (user, programName, program) =>{
    let data = {
        user: user,
        programName: programName,
        program: program,
    }
    axios.post('/saveBlocklyProgram', data )
        .then(res => {
            console.log("RES: " + res.data);
            //console.log("RES DATA: " +res.data.email);


        })

}


