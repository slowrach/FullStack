import state from "./state.js"
import * as actions from "./actions.js"

export function countdown() {
   clearTimeout(state.count)

   if (!state.run) {
      return
   }

   let min = Number(actions.minutes.textContent)
   let sec = Number(actions.seconds.textContent)

   sec--

   if(sec < 0) {
      sec = 59
      min--
   }

   if(min < 0) {
      return
   }

   update(min, sec)

   state.count = setTimeout(() => countdown(), 1000)
}

export function increaseSec() {
   let min = Number(actions.minutes.textContent)
   let sec = Number(actions.seconds.textContent)
   let total = 60 * min + sec

   if (total <= 3594) {
      total = total + 5
   }
   
   let totalMin = Math.floor(total/60)
   let totalSec = total%60

   update(totalMin, totalSec)

}

export function decreaseSec() {
   let min = Number(actions.minutes.textContent)
   let sec = Number(actions.seconds.textContent)
   let total = 60 * min + sec

   if (total >= 5) {
      total = total - 5
   }
   
   let totalMin = Math.floor(total/60)
   let totalSec = total%60

   update(totalMin, totalSec)
}

export function update(minutes, seconds) {
   minutes = minutes ?? state.minutes
   seconds = seconds ?? state.seconds

   actions.minutes.textContent = String(minutes).padStart(2, "0")
   actions.seconds.textContent = String(seconds).padStart(2, "0")
}