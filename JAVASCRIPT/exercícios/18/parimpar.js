function verificar(n) {
    if (n%2 == 0) {
        return `O número ${n} é PAR`
    } else {
        return `O número ${n} é ÍMPAR`
    } 
}

console.log(verificar(9))