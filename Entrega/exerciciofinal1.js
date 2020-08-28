// Crie uma função que receba uma temperatura em Celsius e chame uma função que converta para Fahrenheit. 

const readline = require('readline-sync')

var celsius = parseInt(readline.question("Digite a temperatura em graus Celsius: "))

function fahrenheit() {

return (celsius * 9 / 5) + 32

}

console.log(`Sua temperatura em Celsius é ${fahrenheit(celsius)}`)
