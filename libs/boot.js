module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`Node task API - porta ${app.get("port")}`);
    });
}