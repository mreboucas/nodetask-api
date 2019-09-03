module.exports = app => {
    
    const Tasks = app.db.models.Tasks;

    // app.get("/tasks", (req, res) => {
    //     Tasks.findAll({}).then((tasks) => {
    //         res.json({tasks: tasks});
    //     });
    // });
/**
 * 
 * #Next() -> Para finalizar o middleware, avisando-o que deve executar uma função
            respectiva a um método do HTTP, basta incluir no final do callback a função next() para 
            ele avisar ao roteador do Express que ele pode executar a próxima função da rota ou 
            um próximo middleware abaixo.
    #412 - Precondition Failed
 */
    app.route("/tasks")
    /**
     * Foi para o arquivo middleware.js
     */
        // .all((req, res) => {
        //     delete req.boby.id;
        //     next()
        // })
        .all(app.auth.authenticate())
        .get((req, res) => {
            Tasks.findAll({
                where: {user_id:req.user.id}
            })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg:error.message});
            });
        })
        .post((req, res) => {
            req.body.user_id = req.user.id;
            Tasks.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });

        });

    app.route("/tasks/:id")
    /**
     * Foi para o arquivo middleware.js
     */
        // .all((req, res, next) => {
        //     delete req.boby.id;
        //     next()
        // })
        .all(app.auth.authenticate())
        .get((req, res) => {
            Tasks.findOne({where: {
                id: req.params.id,
                user_id: req.user.id
            }})
            .then(result => {
                if (result) {
                    res.json(result)
                } else {
                    res.sendStatus(404);
                }
            })
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        })
        .put((req, res) => {
            Tasks.update(req.body, {where: {
                id: req.params.id,
                user_id: req.user.id
            }})
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        })
        .delete((req, res) => {
            Tasks.destroy({where: {
                id: req.params.id,
                user_id: req.user.id
            }})
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        });
    
}