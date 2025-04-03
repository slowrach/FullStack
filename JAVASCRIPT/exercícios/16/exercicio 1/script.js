function contar() {
    let inicio = window.document.getElementById('icomeco')
    let fim = window.document.getElementById('ifim')
    let passo = window.document.getElementById('ipasso')
    let saida = window.document.querySelector('div#saida')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        saida.innerHTML = 'Dados insuficientes. Preencha todos os valores.'
    } else {
        saida.innerHTML = 'Resultado: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            saida.innerHTML = 'Passo inválido. Considerando "Passo = 1" <br>'
            p = 1
        }

        if (i < f) {
            for (let cont = i; cont <= f; cont += p) {
                saida.innerHTML += ` ${cont} → `
            }
        } else {
            for (let cont = i; cont >= f; cont -= p) {
                saida.innerHTML += ` ${cont} → `
            }
        }
        saida.innerHTML += `\u{1F3C1}`
    }
}