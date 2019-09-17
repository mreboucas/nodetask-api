/**
 * @INFO Para garantir que os clusters trabalhem de forma distribuída e organizada, é necessário que exista um processo pai, mais 
 * conhecido como cluster master. Ele é o responsável por balancear a carga de processamento entre os demais 
 * clusters, distribuindo-a para os processos filhos, que são chamados de cluster slave.
 * 
 * Outra vantagem é que os clusters são independentes uns dos outros. Ou seja, caso um cluster saia do ar, os demais continuarão servindo a aplicação
 * mantendo o sistema no ar. Porém, é necessário gerenciar as instâncias e encerramento desses clusters manualmente para garantir o retorno do cluster.
 */

import cluster from "cluster";
import os from "os";

cons CUPS = os.cpus();
if (cluster.isMaster) {
    
}