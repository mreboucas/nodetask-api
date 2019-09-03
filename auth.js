import passport from "passport";
import { Strategy } from "passport-jwt";
/**
 * @INFO
 * A função done() envia os dados de usuário autenticado e as rotas autenticada recebem esses dados através do objeto req.user. 
 * No nosso caso, esse objeto terá apenas os atributos: id e email .
 */
module.exports = app => {
    const Users = app.db.models.Users;
    const cfg = app.libs.config;
    const strategy = new Strategy({ secrectOrKey: cfg.jwtSecret },
        (payload, done) => {
            Users.findById(payload.id)
                .then(user => {
                    if (user) {
                        return done(null, {
                            id: user.id,
                            email: user.email
                        });
                    }
                    return done(null, false);
                }).catch(error => done(error, null));
        });
    passport.use(strategy);
    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate("jwt", cfg.jwtSession)
        }
    };
};