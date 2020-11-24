const express = require("express");
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password: 'password',
    database: 'Sign-Me-On'
});

app.listen(3001, () => {
    console.log("running on port 3001");
});

app.get("/", (req,res) => {
    res.send("hello wolrd");
});

