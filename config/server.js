const express = require('express');
const app = express();

const consign = require('consign');
const bodyParser = require('body-parser')


app.set("views", "./app/views");
app.set("view engine", "ejs");

app.use(express.static("./app/public"));
app.use(bodyParser.urlencoded({extended: true}));


consign()
    .include("./app/routes")
    .then("./app/controllers")
    .into(app);


module.exports = app;