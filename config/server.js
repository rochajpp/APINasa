const express = require("express");
const app = express();

const consign = require("consign");


app.set("views", "./app/views");
app.set("view engine", "ejs");

app.use(express.static("./app/public"));


consign()
    .include("./app/routes")
    .then("./app/controllers")
    .into(app);


module.exports = app;