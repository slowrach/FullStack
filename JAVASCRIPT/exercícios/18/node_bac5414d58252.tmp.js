function fatorial(n) {
    for (let cont = n; cont > 1; cont--) {
        cont *= (cont-1)
    }
    return cont
}

console.log(fatorial(5))