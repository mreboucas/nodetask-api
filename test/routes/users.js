import jwt from "jwt-simple";
import { request } from "https";
describe("Routes: Tasks", () => {
    const Users = app.db.models.Users;
    const jwtSecret = app.libs.config.jwtSecret;
    let token;
    beforeEach(done => {
        Users
            .destroy({ where: {} })
            .then(() => Users.create({
                name: "John",
                email: "john@mail.net",
                password: "12345"
            }))
            .then(user => {
                token = jwt.encode({ id: user.id }, jwtSecret);
                done();
            })

        describe("GET /user", () => {
            describe("status 200", () => {
                it("returns an authenticated user", done => {
                    //Código de teste
                    request.get("/user")
                        .set("Authorization", `JWT ${token}`)
                        .expect(200)
                        .end((err, res) => {
                            expect(res.body.name).to.eql("John");
                            expect(res.body.email).to.eql("john@mail.net");
                            done(err);
                        })
                });
            });
        });
        describe("DELETE /users", () => {
            describe("status 200", () => {
                it("deletes an autenticated user", done => {
                    //Código de teste
                    request.delete("/user")
                        .set("Authorization", `JWT ${token}`)
                        .expect(204)
                        .end((err, res) => done(err));
                });
            });
        });
        describe("POST /users", () => {
            describe("status 200", () => {
                it("creates a new user", done => {
                    //Código de teste
                    resquest.post("/users")
                    .send({
                        name: "Mary",
                        email: "mary@mail.net",
                        password: "12345"
                    })
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body.name).to.eql("Mary");
                        expect(res.body.email).to.eql("mary@mail.net");
                        done(err);
                    });
                });
            });
        });
    });
});