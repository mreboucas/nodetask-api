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
    /**
    @INFO
    Para que seja possível visualizar a página de documentação, primeiro te-
    remos de habilitar o servidor de arquivos estáticos do Express, para que ele
    sirva todo o conteúdo estático existente na pasta public
     */
    app.use(express.static("public"))
};