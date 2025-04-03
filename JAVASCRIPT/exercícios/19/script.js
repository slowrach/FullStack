let num = window.document.getElementById('inum')
let saida = window.document.getElementById('isaida')
let res = window.document.getElementById('resultado')
let vetor = []

function Numero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function Lista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function calculo() {
    if (Numero(num.value) && !Lista(num.value, vetor)) {
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text += `valor ${num.value} adicionado`
        saida.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function resultado() {
    if (vetor.length == 0) {
        window.alert('Adicione, pelo menos, um número antes de finalizar!')
    } else {
        let total = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        for(let proximo in vetor) {
            soma += vetor[proximo]
            if (vetor[proximo] > maior)
                maior = vetor[proximo]
            if (vetor[proximo] < menor)
                menor = vetor[proximo]
        }
        let media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Temos um total de <strong>${total}</strong> números adicionados, sendo:</p>
        <p><strong>${maior}</strong> o maior número</p>
        <p><strong>${menor}</strong> o menor número</p>
        <p>A soma de todos os números igual a <strong>${soma}</strong></p>
        <p>E a média de todos os números igual a <strong>${media}</strong>`
    }
}

// esse ! antes de analisar a 'Lista', significa "se não estiver em Lista" 