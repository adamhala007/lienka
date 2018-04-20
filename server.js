let express = require("express");
let app =  express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
let result = {};
const firebase = require('./src/firebase/firebase');

app.listen(3001,() =>  console.log("Running on localhost:3001"));

app.post('/getlogged', async (req,res) => {
    const all = req.body;
    result = await firebase.readUserData("id");
    res.status(200).json(result);
});

app.post('/register',  async (req,res) => {
    const all = req.body;

    if (await firebase.existsUser(all.username)){
        result = {
            errorCode: "1",
            errorMessage: "userExists"
        };
    }else{
        firebase.writeUserData(all.username, all.password, all.email, all.salt);
        result = {
            errorCode: "0",
            errorMessage: "OK"
        };
    }

    res.status(200).json(result);
});
