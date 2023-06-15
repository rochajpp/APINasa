module.exports = (app) => {
    app.get("/apod", (req, res) => {
        app.app.controllers.apod.index(app, req, res);
    });
};