//exercícios de tipos (3,4,5)

let thing1 = prompt("Escreva qualquer coisa e verificarei se é um número:")

if (isNaN(thing1)) {
   alert("Não é um número")
} else {
   alert("É um número")
}

const thing2 = 45

if (typeof thing2 == 'string') {
   alert("É uma string")
} else {
   alert("Não é uma string")
}

const thing3 = false

if (typeof(thing3) == 'boolean') {
   alert("É um booleano")
} else {
   alert("Não é um booleano")
}