# Conceito e funcioinalides da API - Node-Task-Api

• Listagem de tarefas do usuário;<br>
• Consulta, cadastro, exclusão e alteração de uma tarefa do usuário; <br>
• Consulta, cadastro e exclusão de um usuário; <br>
• Autenticação de usuário; <br>
• Página de documentação da API. <br>

# Frameworks - Libraries

> Node <br>

> Express <br>
    • Routing robusto; <br>
    • Facilmente integrável com os principais Template Engines; <br>
    • Código minimalista; <br>
    • Trabalha com conceito de middlewares; <br>
    • Possui uma grande lista de middlewares 3rd-party; <br>
    • Content Negotiation; <br>
    • Adota padrões e boas práticas de serviços REST. <br>

> Sql-Like <br>

> Consign <br>

# Corrigir import js no node v8
 > npm install --save @std/esm
 > start -> adicionar o comando: "start": "node -r esm index.js" em scripts

# Starts a project
> npm install <br>
> npm start <br>

# Main commands node

<br> > npm init : exibe um miniquestionário para auxiliar na criação e descrição do package.json do seu projeto;

<br> > npm install nome_do_módulo : instala um módulo no projeto;
<br> > npm install -g nome_do_módulo : instala um módulo global;
<br> > npm install nome_do_módulo --save : instala o módulo e adiciona-o no arquivo package.json , dentro do atributo "dependencies" ;
<br> > npm install nome_do_módulo --save-dev : instala o módulo e adiciona-o no arquivo package.json , dentro do atributo "devDependencies" ;
<br> > npm list : lista todos os módulos que foram instalados no projeto;
<br> > npm list -g : lista todos os módulos globais que foram instalados;
<br> > npm remove nome_do_módulo : desinstala um módulo do projeto;
<br> > npm remove -g nome_do_módulo : desinstala um módulo global;
<br> > npm remove nome_do_módulo --save : desinstala um módulo do projeto, removendo também do atributo "dependencies" do package.json ;
<br> > npm remove nome_do_módulo --save-dev : desinstala um módulo do projeto, removendo também do atributo "devDependencies" do package.json ;
<br> > npm update nome_do_módulo : atualiza a versão de um módulo do projeto;
<br> > npm update -g nome_do_módulo : atualiza a versão de um módulo global;
<br> > npm -v : exibe a versão atual do NPM;
<br> > npm adduser nome_do_usuário : cria um usuário no site https://npmjs.org;
<br> >  npm whoami : exibe detalhes do seu perfil público NPM do usuário (é necessário criar um usuário com o comando anterior);
<br> > npm publish : publica um módulo no https://npmjs.org (é necessário ter uma conta ativa primeiro);
<br> > npm help : exibe em detalhes todos os comandos.
<br> > npm shrinkwrap: controle rigoroso para dependências (PRODUTION ENVIROMENT)

# JSON format response
> app.set("json spaces", 4); <br>

# Organizar as rotas - padrão
> MVR (Model-View-Router) <br>
> npm install consign --save <br>

# STUDY STOP
6.9 Capítulo 6. Implementando CRUD dos recursos da API Implementando rotas para gestão de usuários