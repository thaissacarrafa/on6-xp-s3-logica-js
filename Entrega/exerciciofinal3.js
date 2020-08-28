//Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros. //



const readline = require('readline-sync')

var metros = parseInt(readline.question("Digite a altura em metros que deseja converter para milimetros: "))

function milimetros() {

return (metros * 1000) 

}

console.log(`A altura em milimetros é igual a ${milimetros(metros)}`)