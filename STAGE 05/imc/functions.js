export function imc(weight, height) {
   return (weight / (height / 100) ** 2).toFixed(1);  
}

export function alertError(value) {
  return isNaN(value) || value == ""
}