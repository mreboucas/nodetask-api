/**
 • database – define o nome da base de dados;
 • username – informa o nome de usuário de acesso;
 • password – informa a senha do usuário;
 • params.dialect – informa qual é o banco de dados a ser usado;
 • params.storage – é um atributo específico para o SQLite3, sendo que nele é informado o diretório que será gravado o arquivo da base de dados;
 • params.define.underscored – padroniza o nome dos campos da tabela em minúsculo usando underscore no lugar dos espaços em branco.
 */

module.exports = {
    database: "ntask",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "ntask.sqlite",
        define: {
            underscored: true
        }
    }
};