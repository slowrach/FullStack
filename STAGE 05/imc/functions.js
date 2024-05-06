export function imc(weight, height) {
   return (weight / (height / 100) ** 2).toFixed(1);  
}

export function isNaNError(value) {
  return isNaN(value)
}

export function emptyError(value) {
  return value == ""
}