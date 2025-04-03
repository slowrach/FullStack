function tabuada() {
    let num = window.document.getElementById('inum')
    let tabuada = window.document.getElementById('itab')

    if (num.value.length == 0) {
        saida.innerHTML = 'Escolha um número'
    } else {
        let n = Number(num.value)
        tabuada.innerHTML = ''
        for (let cont = 0; cont <= 10; cont ++) {
            let item = document.createElement('option')
            item.text += `${n} x ${cont} = ${n * cont}`
            item.value = `tabuada${cont}`
            tabuada.appendChild(item)
        }
    }
}