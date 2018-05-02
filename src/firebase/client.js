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

export const loadBlocklyProgram = async (user) =>{
    let data = {
        user: user,
    };
    let result;
    await axios.post('/loadBlocklyProgram', data )
        .then(res => {


            result = res.data;
            //console.log("RES DATA: " +res.data.email);


        });
    /*console.log("LOAD: ");
    console.log( result);*/
    return result;
};

export const logIn = async(user) => {
    const now = Date.now();
    let data = {
        user: user,
        timeStamp: now,
        log_in_out: true,
    };

    axios.post('/logInOut', data )
        .then(res => {
            console.log("RES: " + res.data);


        })
};

export const logOut = async(user) => {
    const now = Date.now();
    let data = {
        user: user,
        timeStamp: now,
        log_in_out: false,
    };

    axios.post('/logInOut', data )
        .then(res => {
            console.log("RES: " + res.data);


        })
};


export const getLogs = async (user) =>{
    let data = {
        user: user,
    };
    let result;
    await axios.post('/getLogs', data )
        .then(res => {


            result = res.data;


        });
    /*console.log("LOAD: ");
    console.log( result);*/
    return result;
};


export const saveEasyProgram = (user, programName, program) =>{
    let data = {
        user: user,
        programName: programName,
        program: program,
    }
    axios.post('/saveEasyProgram', data )
        .then(res => {
            console.log("RES: " + res.data);
            //console.log("RES DATA: " +res.data.email);


        })

}

export const loadEasyProgram = async (user) =>{
    let data = {
        user: user,
    };
    let result;
    await axios.post('/loadEasyProgram', data )
        .then(res => {


            result = res.data;
            //console.log("RES DATA: " +res.data.email);


        });
    /*console.log("LOAD: ");
    console.log( result);*/
    return result;
};


