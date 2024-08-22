import * as songs from './songs.js'
import state from './state.js'
import * as timer from './timer.js'

export const minutes = document.getElementById('minutes')
export const seconds = document.getElementById('seconds')

export function florestaSound() {
   songs.floresta.play()

   if (state.sound == songs.floresta) {
      state.sound.pause()
      state.sound = null
      return
   }

   if (state.sound != null) {
      state.sound.pause()
   }

   state.sound = songs.floresta
}

export function chuvaSound() {
   songs.chuva.play()

   if (state.sound == songs.chuva) {
      state.sound.pause()
      state.sound = null
      return
   }

   if (state.sound != null) {
      state.sound.pause()
   }

   state.sound = songs.chuva
}

export function lareiraSound() {
   songs.lareira.play()

   if (state.sound == songs.lareira) {
      state.sound.pause()
      state.sound = null
      return
   }
   
   if (state.sound != null) {
      state.sound.pause()
   }

   state.sound = songs.lareira
}

export function cafeteriaSound() {
   songs.cafeteria.play()

   if (state.sound == songs.cafeteria) {
      state.sound.pause()
      state.sound = null
      return
   }

   if (state.sound != null) {
      state.sound.pause()
   }

   state.sound = songs.cafeteria
}

export function play() {
   state.run = true
   
   timer.countdown()
}

export function pause() {
   state.run = false
}

export function increase() {
   timer.increaseSec()
}

export function decrease() {
   timer.decreaseSec()
}