module.exports.index = (app, req, res) => {

    const api_key = "kTUPqeT0gfqVM08scuGqthHLQyAaLqOjioMagEHq";

    const axios = require("axios");

    const timeout = 1000;

    axios.get("https://api.nasa.gov/planetary/apod?api_key=" + api_key)
    .then(response => {
        res.render("apod/apod.ejs", {files: response.data});
    })
    .catch(error => {
        res.render("error/error", {info: error});
    });
}