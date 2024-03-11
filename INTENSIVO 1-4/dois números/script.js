//exercícios com números (1,2,6,7,8,9,10):

alert("Operações Matemáticas!")

let number1 = eval(prompt("Digite o primeiro número:"))
let number2 = eval(prompt("Digite o segundo número:"))

let sum = number1 + number2
let sub = number1 - number2
let mult = number1 * number2
let div = (number1 / number2).toFixed(1) 

if (number1 % 2 == 0) {
   var typeN1 = "PAR"
} else {
   typeN1 = "ÍMPAR"
}

if (number2 % 2 == 0) {
   var typeN2 = "PAR"
} else {
   typeN2 = "ÍMPAR"
}

alert(`${number1} é um número ${typeN1}
${number2} é um número ${typeN2}`)

alert(`RESULTADOS
SOMA: ${number1} + ${number2} = ${sum}
SUBTRAÇÃO: ${number1} - ${number2} = ${sub}
MULTIPLICAÇÃO: ${number1} × ${number2} = ${mult}
DIVISÃO: ${number1} ÷ ${number2} = ${div} 
`)