module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log(`Node task API - porta ${app.get("port")}`);
        });
    });
}