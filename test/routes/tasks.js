import jwt from "jwt-simple";
describe("Routes: Tasks", () => {

    const Users = app.db.models.Users;
    const Tasks = app.db.models.Tasks;
    const jwtSecret = app.libs.config.jwtSecret;
    let token;
    let fakeToken;

    beforeEach(done => {

    });

    describe("GET /tasks/", () => {
        describe("status 200", () => {
            it("returns a list of tasks", done => {
                //Código de testes
            });
        });
    });

    describe("POST /tasks/", () => {
        describe("status 200", () => {
            it("creates a new task", done => {
                //Código de testes
            });
        })
    });
    describe("GET /tasks/:id", () => {
        describe("status 200", () => {
            it("returns one task", done => {
                // Código de testes
            });
        });
        describe("status 404", () => {
            it("throws error when task not exist", done => {
                // Código de testes
            });
        });
    });
    describe("PUT /tasks/:id", () => {
        describe("status 204", () => {
            it("updates a task", done => {
                // Código de testes
            });
        });
    });
    describe("DELETE /tasks/:id", () => {
        describe("status 204", () => {
            it("removes a task", done => {
                // Código de testes
            });
        });
    });
});