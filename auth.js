
import passport from "passport";
import { Strategy } from "passport-jwt";
/**
 * @INFO
 * A função done() envia os dados de usuário autenticado e as rotas autenticada recebem esses dados através do objeto req.user. 
 * No nosso caso, esse objeto terá apenas os atributos: id e email .
 */
/*
module.exports = app => {
    const Users = app.db.models.Users;
    const cfg = app.libs.config;
    var opts = {
        secretOrKey: cfg.jwtSecret
    };
    const strategy = new Strategy(opts,
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
}; */

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
import config from "../config/database"
import User from "../models/users";
module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts,function(jwt_payload,done){//here it points for error
        User.getUserById(jwt_payload._id, function(err,user){
            if(err){
                return done(err, false);
            }

            if(user){
                return done(null, user);
            }
            else{
                return done(null, false);
            }
        });
    }));
}      