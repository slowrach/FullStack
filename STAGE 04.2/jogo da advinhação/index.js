alert("JOGO DA ADVINHAÇÃO - TENTE ADVINHAR O NÚMERO!");

let number = Number(prompt("Digite um número de 1 a 10:"));

const randomNumber = Math.ceil(Math.random() * 10);

let attempts = 1;

while (number != randomNumber) {
  number = prompt("Errou! Tente novamente: ")
  attempts++
}

const message = `Parabéns, era o número ${randomNumber} mesmo! Você acertou após ${attempts} tentativa`

if (attempts == 1) {
  alert(message)
} else {
  alert(message + 's')
}