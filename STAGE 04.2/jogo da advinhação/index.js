const pg1 = document.querySelector(".pg-1")
const pg2 = document.querySelector(".pg-2")

const attemptButton = document.querySelector("#attemptButton")
const tryAgainButton = document.querySelector("#tryAgainButton")

let randomNumber = Math.ceil(Math.random() * 10);

let totalAttempts = 1;

attemptButton.addEventListener('click', attempt)
tryAgainButton.addEventListener('click', tryAgain)

function attempt(event) {
  event.preventDefault()

  const kick = document.querySelector("#kick")
  
  if (Number(kick.value) == randomNumber) {
    changePage()

    const message = `Acertou em ${totalAttempts} tentativa`

    if (totalAttempts == 1) {
      pg2.querySelector(".h2").innerText = message
    } else {
      pg2.querySelector("h2").innerText = message + 's'
    }
  }

  kick.value = ""

  totalAttempts++
}

function tryAgain() {
  changePage()

  totalAttempts = 1;

  randomNumber = Math.ceil(Math.random() * 10);
}

function changePage() {
  pg1.classList.toggle("hide")
  pg2.classList.toggle("hide")
}

//ANOTAÇÕES:
// 'event.preventDefault()' : para não fazer o padrão que é 'enviar formulário', já que o botão foi criado dentro de um form
// 'addEventListener': criou os eventos
// as funções 'attempt()' e 'tryAgain()' são callbacks, pois são chamadas, em algum momento, dentro dos respectivos eventos