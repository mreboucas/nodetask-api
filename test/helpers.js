/**
 * @ARQUIVO_PARA_AGILIZAR_A_EXECUÇÃO_DOS_TESTES
 * 
 * Agilizar a execução dos testes, afinal, cada um carregaria esses módulos e,
 * se centralizarmos tudo isso em um único arquivo, economizaríamos alguns milissegundos de execução dos testes.  
 */
import supertest from "supertest";
import chai from "chai";
import app from "../index.js"

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;