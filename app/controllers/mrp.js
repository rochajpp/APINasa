module.exports.index = (app, req, res) => {

    const axios = require('axios');
    
    axios.get("http://api.open-notify.org/iss-now.json")
        .then(response => {
            console.log(response.data.message);
            res.render("mrp/mrp", {coord: response.data.iss_position})
        })
        .catch(error => {
            res.render("error/error", {info: error});
        });

};