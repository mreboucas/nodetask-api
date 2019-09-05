module.exports = app => {
    /**
     * App não deve ser inicida duas vezes and estiver em ambiente de teste, pois ela
     * também será iniciada pelo 'supertest'
     */
    if (process.env.NODE_ENV !== "test") {
        app.db.sequelize.sync().done(() => {
            app.listen(app.get("port"), () => {
                console.log(`Node task API - porta ${app.get("port")}`);
            });
        });
    }
}