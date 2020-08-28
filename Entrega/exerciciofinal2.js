// Agora faça o contrário, uma função que receba uma temperatura em Fahrenheit e chame uma função que converta para Celsius.

const readline = require('readline-sync')

var fahrenheit = parseInt(readline.question("Digite a temperatura em graus Celsius: "))

function celsius() {

return (fahrenheit * 9 / 5) + 32

}

console.log(`Sua temperatura em Fahrenheit é ${celsius(fahrenheit)}`)