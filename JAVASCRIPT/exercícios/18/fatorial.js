function fatorial(n) {
    let total = 1
    for(let cont = n; cont > 1; cont--) {
        total *= cont
    }
    return total
}

console.log(fatorial(5))

/*
ou (por recursividade):

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))
*/