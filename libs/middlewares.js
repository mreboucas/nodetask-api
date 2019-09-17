import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import logger from "./logger";

/**
 * @INFO -> middlewares.js: configurações para o nosso servidor
 */
module.exports = app => {

    //const Tasks = app.db.models.Tasks;

    app.set("port", 3000)
    app.set("json spaces", 10);
    /**
     * @INFO  -> registar os logs das requisições feitas no servidor - Usaremos o MORGAN
     * Para enviarmos esses logs para o nosso módulo logger , basta adicionar
     * o atributo stream com uma função callback chamada write(message) e, em seguida, enviar a variável message para 
     * nossa função de log, a logger.info(message)
     */
    app.use(morgan("common", {
        stream: {
            write: (message) => {
                logger.info(message);
            }
        }
    }));
    /** Habilitando o cors*/
    app.use(cors({
        origin: ["http://localhost:3001"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    }));
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