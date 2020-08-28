
const readline = require("readline-sync")
const p1 = parseFloat(readline.question("Digite o valor 1?"))
const p2 = parseFloat(readline.question("Digite o valor 2?"))
const p3 = parseFloat(readline.question("Digite o valor 3?"))
const resultado = somandoParametros(p1,p2,p3)
console.log(resultado)

// Primeiro o sem parâmetro para não dar erro // 
function somandoParametros(p1,p2,p3){
if (!p1 && !p2 && !p3){
return( "Não recebeu parâmetro") }

// se inserir os três parâmetros devo somar os 2 primeiros e dividir pelo terceiro. 
else if (p1 && p2 && p3) {
 let calculo = ( p1 + p2) / p3
    return(calculo)
}

// se não colocar o 1 somar os outros dois
else if ( !p1 && p2 && p3) {
    let calculo1 = p2 + p3
    return(calculo1)
}


else if ( p1 && !p2 && p3) {
    let calculo2 = p1 + p3
    return(calculo2)
}

else if ( p1 && p2 && !p3) {
    let calculo3 = p1 + p2
    return(calculo3)
}
}

somandoParametros(p1,p2,p3)


/* pra mim esse exercicio foi mega dificil.. meu cérebro quase explodiu e eu pulei super de alegria agora 
que deu certo */