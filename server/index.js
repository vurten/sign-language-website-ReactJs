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

app.delete("/api/delete/:coursDescription", (req,res) => {

    const titreCours = req.params.coursDescription;

    const sqlDelete = "DELETE FROM coursAlphabet WHERE coursAlphabetText = ?";

    db.query(sqlDelete,titreCours, (err, result)=> {
        if(err) console.log(err);
    });
});

app.put("/api/update", (req,res) => {

    const titreCours = req.body.coursDescription;
    const video = req.body.coursVideo;

    const sqlUpdate = "UPDATE coursAlphabet SET coursAlphabImg = ? WHERE coursAlphabetText = ?";

    db.query(sqlUpdate,[video, titreCours], (err, result)=> {
        if(err) console.log(err);
    });
});

app.post("/register", (req,res) => {

    const email = req.body.mail;
    const password = req.body.password;
    const profileType = req.body.profile;

    db.query("INSERT INTO users (useremail, userpassword, usertype) VALUES (?,?,?)",
        [email, password, profileType], (err, result)=>{
            console.log(err);
        
        }
    );
});

app.listen(3001, () => {
    console.log("running on port 3001");
});


