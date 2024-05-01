import { cardResult } from "./card.js";

export const inputWeight = document.querySelector('#weight');
export const inputHeight = document.querySelector('#height');
const form = document.querySelector('form');
const msgError = document.querySelector('.msg-error');

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
  const imcCalc = imc(weight, height)

  if (imcCalc < 18.5) {
    var situation = "BAIXO PESO";
  } else if (imcCalc >= 18.5 && imcCalc <= 24.9) {
    situation = "PESO NORMAL";
  } else if (imcCalc >= 25 && imcCalc <= 29.9) {
    situation = "SOBREPESO";
  } else if (imcCalc >= 30 && imcCalc <= 34.9) {
    situation = "OBESIDADE GRAU I";
  } else if (imcCalc >= 35 && imcCalc <= 39.9) {
    situation = "OBESIDADE GRAU II";
  } else {
    situation = "OBESIDADE GRAU III";
  }

  cardResult.text.innerText = `Seu IMC é de ${imcCalc}, logo está com ${situation}`

  cardResult.open()
}

function imc(weight, height) {
   return (weight / (height / 100) ** 2).toFixed(1);  
}

// function alertError() {
//   if (isNaN(weight) || isNaN(height)) {
//     msgError.classList.remove('hide')
//   }
// }