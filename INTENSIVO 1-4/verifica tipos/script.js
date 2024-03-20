//exercícios de tipos (3,4,5)

let thing1 = prompt("Escreva qualquer coisa e verificarei se é um número:")

if (isNaN(thing1)) {
   alert("Não é um número")
} else {
   alert("É um número")
}

let thing2 = prompt("Escreva qualquer coisa e verificarei se é uma string:")

if (typeof thing2 === 'string') {
   alert("É uma string")
} else {
   alert("Não é uma string")
}

let thing3 = prompt("Escreva qualquer coisa e verificarei se é um valor booleano:")

if (typeof thing3 === 'boolean') {
   alert("É um booleano")
} else {
   alert("Não é um booleano")
}

//pois o prompt sempre retorna um dado do tipo  STRING