/**
 * @INFO Para garantir que os clusters trabalhem de forma distribuída e organizada, é necessário que exista um processo pai, mais 
 * conhecido como cluster master. Ele é o responsável por balancear a carga de processamento entre os demais 
 * clusters, distribuindo-a para os processos filhos, que são chamados de cluster slave.
 * 
 * Outra vantagem é que os clusters são independentes uns dos outros. Ou seja, caso um cluster saia do ar, os demais continuarão servindo a aplicação
 * mantendo o sistema no ar. Porém, é necessário gerenciar as instâncias e encerramento desses clusters manualmente para garantir o retorno do cluster.
 */
/**
 * Para concluir a configuração dos clusters deve ser colocado o script no arquivo package.js: 'clusters'
 * 
 * Para maores informações: Mas, caso tenha a necessidade de implementar mais deta-
 *   lhes que explorem ao máximo os clusters, recomendo que leia a documentação (https://nodejs.org/api/cluster.html)
 */
import cluster from "cluster";
import os from "os";

const CUPS = os.cpus();
if (cluster.isMaster) {
    /**
     Um loop cujas iterações são baseadas no total de núcleos de processamento (CPUs) que ocorrem por meio do trecho CPUS.forEach(),
     que retorna o total de núcleos do servidor.

    • listening : acontece quando um cluster está escutando uma porta do
     servidor. Neste caso, a nossa aplicação está escutando a porta 3000;
    • disconnect : executa seu callback quando um cluster se desconectada rede;
    • exit : ocorre quando um processo filho é fechado no sistema operacional.
     */

    CPUS.forEach(() => cluster.fork());
    cluster.on("listening", worker => {
        console("conectado", worker);
    });
    cluster.on("disconnect", worker => {
        console("desconectado", worker);
    })
    cluster.on("exit", worker => {
        console.log("Cluster %d  saiu do ar",  worker.process.pid);
        // Inicia novo cluster quando um cluster sai do ar
        cluster.fork(); //Inicia um novo cluster slave
    })
} else {
    require("./index.js")
}

function console(msg, worker) {
    console.log("Cluster %d " + msg,  worker.process.pid);
}