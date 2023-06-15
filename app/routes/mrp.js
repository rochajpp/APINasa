module.exports = (app) => {
    app.get("/mrp", (req, res) => {
        app.app.controllers.mrp.index(app, req, res);
    });
}