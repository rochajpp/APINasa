module.exports = (app) => {
    app.get("/epic", (req, res) => {
        app.app.controllers.epic.index(app, req, res);
    });

    app.post("/epic/infos", (req, res) => {
        app.app.controllers.epic.infos(app, req, res);
    });
};