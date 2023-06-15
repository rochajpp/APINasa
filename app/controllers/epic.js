module.exports.index = (app, req, res) => {

    const axios = require('axios');

    const api_key = "kTUPqeT0gfqVM08scuGqthHLQyAaLqOjioMagEHq";

    axios.get("https://epic.gsfc.nasa.gov/api/natural/all")
        .then(response => {
            res.render("epic/epic", {info: response.data})
        })
        .catch(error => {
            res.render("error/error", {info: error});
        });
}

module.exports.infos = (app, req, res) => {
    const data = req.body.date;

    const axios = require('axios');

    const api_key = "kTUPqeT0gfqVM08scuGqthHLQyAaLqOjioMagEHq";

    const elements = data.split("-");
    let date = "";
    
    for(var i = 0; i < elements.length; i ++){
        date = date + elements[i];
    }

    axios.get("https://api.nasa.gov/EPIC/api/natural/" + data + "?api_key=" + api_key)
        .then(response => {
            res.render("epic/infos", {data: response.data, dateImg: data});
        })
        .catch(error => {
            res.render("error/error", {info: error});
        });
//https://api.nasa.gov/EPIC/archive/natural/" + elements[0] + "/" + elements[1] + "/" + elements[2] + "/png/" + response.data[0].image + ".png?api_key=" + api_key

};  