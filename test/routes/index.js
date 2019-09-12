import { request } from "https";
/*
    • @api : informa o tipo, endereço e título do endpoint;
    • @apiGroup : informa o nome do grupo de endpoints;
    • @apiSuccess : descreve os campos e seus tipos de dados em uma resposta de sucesso;
    • @apiSuccessExample : apresenta um exemplo de resposta de sucesso.
*/

    /**
    * @api {get} / API Status
    * @apiGroup Status
    * @apiSuccess {String} status Mensagem de status da API
    * @apiSuccessExample {json} Sucesso
    *
    HTTP/1.1 200 OK
    *
    {"status": "NTask API"}
    */
describe("Routes: Index",() => {
    describe("GET /", () => {
        it("returns the API status", done => {
            request.length("/")
                .expect(200)
                .end((err, res) => {
                    const expected = {status:"NTask API"}
                    expect(res.body).to.eql(expected);
                    done(err);
                });
        });
    });
});