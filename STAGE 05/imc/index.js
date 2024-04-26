const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');
const form = document.querySelector('form');

// const screen1 = document.querySelector('.screen1');
// const screen2 = document.querySelector('.screen2');
// const card = document.querySelector('.card');
// const screen3 = document.querySelector('.screen3');

// const calculateButton = document.querySelector('.calculate');
// const closeButton = document.querySelector('.close');
// const msgError = document.querySelector('.msg-error');

// calculateButton.addEventListener('click', imc);
// closeButton.addEventListener('click', close);

form.onsubmit = (event) => {
  event.preventDefalut()

  const weight = inputWeight.value
  const height = inputHeight.value
  
  console.log(weight, height)
}

// function imc() {
//   let imcCalc = (weight / (height / 100) ** 2).toFixed(1);

//   if (imcCalc < 18.5) {
//     var situation = "BAIXO PESO";
//   } else if (imcCalc >= 18.5 && imcCalc <= 24.9) {
//     situation = "PESO NORMAL";
//   } else if (imcCalc >= 25 && imcCalc <= 29.9) {
//     situation = "SOBREPESO";
//   } else if (imcCalc >= 30 && imcCalc <= 34.9) {
//     situation = "OBESIDADE GRAU I";
//   } else if (imcCalc >= 35 && imcCalc <= 39.9) {
//     situation = "OBESIDADE GRAU II";
//   } else {
//     situation = "OBESIDADE GRAU III";
//   }

//   changeScreen();

//   screen2.querySelector('h2').innerText = `Seu IMC é de ${imcCalc}, logo está com ${situation}`
// }

// function close() {
//   card.classList.toggle('hide')
// }

// function changeScreen() {
//   screen1.classList.toggle('hide')
//   card.classList.toggle('hide')
// }

// if (isNaN(position)) {
//   alert("Apenas números são respostas válidas!");
//   continue;
// }
