import express from "express";
import consign from "consign";

const PORT = 3000;

const app = express();

//Format JSON response
/**
 * Não vi diferença com essa versão do NODE com express, dessa formatação. Mas adiante...
 */
app.set("json spaces", 10);

app.set("port", 3000)

/**
 * include("models") -> é o diretório chamado: models
 */

consign()
.include("libs/config.js")
.then("db.js")
//.then("models")
.then("libs/middlewares.js")
.then("routes")
.then("libs/boot.js")
.into(app);

//app.get("/", (req, res) => res.json({status: "NTask API"}));

/**
 * 
 app.get("/tasks", (req, res) => {
     res.json({
         tasks: [
             {title:"Fazer compras"},
             {title:"Consertar o pc"},
            ]
        });
});
*/

//app.listen(PORT, () => console.log(`Node task API - porta ${PORT}`));