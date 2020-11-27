const express = require("express");
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { urlencoded } = require("body-parser");
const cors = require('cors');


const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password: 'password',
    database: 'Sign-Me-On'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/get',(req,res)=>{
    const sqlSelect = "SELECT * FROM coursAlphabet";
    db.query(sqlSelect,(err, result)=> {
        res.send(result);
    });
});



app.post("/api/insert", (req,res) => {

    const coursDescription = req.body.coursDescription;
    const coursVideo = req.body.coursVideo;

    const sqlInsert = "INSERT INTO coursAlphabet (coursAlphabetText, coursAlphabImg) VALUES (?,?)";
    db.query(sqlInsert,[coursDescription,coursVideo], (err, result)=> {
        console.log(result);
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});