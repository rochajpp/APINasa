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
    const data = req.body;
    const axios = require('axios');

    const api_key = "kTUPqeT0gfqVM08scuGqthHLQyAaLqOjioMagEHq";

    axios.get("https://epic.gsfc.nasa.gov/api/" + data.type + "/date/" + data.date)
        .then(response => {
            res.render("epic/infos", {data: response.data, dateImg: data.date, type: data.type});
            
        })
        .catch(error => {
            res.render("error/error", {info: error});
        });
};  