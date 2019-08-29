import bodyParser from "body-parser";

module.exports = app => {
    
    //const Tasks = app.db.models.Tasks;

    app.set("port", 3000)
    app.set("json spaces", 10);
    app.use(bodyParser.json());
    app.use(app.auth.initialize());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });
};