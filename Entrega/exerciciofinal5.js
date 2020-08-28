/* Crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, 
a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5. */ 

const readline = require('readline-sync');


let num = parseInt(readline.question("Digite um valor para realizar a soma progressiva: "))
let resultado = 0;
function soma(num){
for (i = 1 ; i <= num ; i++) {

  resultado +=i;
}
console.log(resultado);
}
soma(num)