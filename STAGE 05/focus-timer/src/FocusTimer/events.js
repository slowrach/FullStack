import * as actions from './actions.js'

export const [controlButtons] = document.getElementsByClassName('controls')
export const soundButtons = document.getElementById('sounds')

export function control() {
   for (const soundButton of soundButtons.children) {
      soundButton.addEventListener('click', () => {
         const action = soundButton.dataset.action

         if (actions[action]) actions[action]()
      })
   }

   for (const controlButton of controlButtons.children) {
      controlButton.addEventListener('click', () => {
         const controlAction = controlButton.dataset.action
         
         if (actions[controlAction]) actions[controlAction]()
      })
   }
}



