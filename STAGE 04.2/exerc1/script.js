let n1 = Number(prompt('Digite o primeiro número'))
let n2 = Number(prompt('Digite o segundo número'))

const soma = n1 + n2
const mult = n1 * n2
const div = (n1 / n2).toFixed(1)
const sub = n1 - n2
const rest = n1 % n2

let message1 = `1° número: ${n1}
2° número: ${n2}`

if (n1 == n2) {
  alert(message1 + `
Os números são IGUAIS`
  )
} else {
  alert(message1 + `
Os números são DIFERENTES`
  )
}

let message2 = `A soma é igual a ${soma}`

if (soma % 2 === 0) {
  alert(message2 + `
A soma é um número PAR`)
} else {
  alert(message2 + `
A soma é um número ÍMPAR`)
}

alert(`A multiplicação é igual a ${mult}`)
alert(`A divisão é igual a ${div}`)
alert(`A subtração é igual a ${sub}`)
alert(`O resto da divisão é igual a ${rest}`)