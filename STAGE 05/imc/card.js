import { inputWeight, inputHeight } from "./index.js"

export const cardResult = {
  text: document.querySelector('.screen2 h2'),
  card: document.querySelector('.card'),
  closeButton: document.querySelector('.close'),

  close() {
    cardResult.card.classList.add('hide')
  },
  open() {
    cardResult.card.classList.remove('hide')
  }
}
 
cardResult.closeButton.onclick = () => {
  cardResult.close()

  inputWeight.value = ""
  inputHeight.value = ""
}

window.addEventListener('keydown', esc)

function esc(event) {
  if(event.key == 'Escape') {
    cardResult.close()

    inputWeight.value = ""
    inputHeight.value = ""
  }
}