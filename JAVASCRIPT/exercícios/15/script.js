function compra() {
var instrumentos = window.document.getElementsByName('instrumento')
var saida = window.document.querySelector('div#saida')

instrumentos.forEach(instrumento => {
    if (instrumento.checked) {
        var name = instrumento.nextElementSibling.innerText
        if (saida.innerHTML == '') {
            var text = document.createElement('p')
            text.setAttribute('id', 'mensagem')
            text.innerHTML = `Você selecionou o instrumento "${name}"`
            var img = document.createElement('img')
            img.setAttribute('src', `imagens/${instrumento.getAttribute('id')}.jpg`)
            img.setAttribute('id', 'foto')
            saida.appendChild(text)
            saida.appendChild(img)
        } else {
            document.getElementById('mensagem').innerText = `Você selecionou o instrumento "${name}"`
            document.getElementById('foto').setAttribute('src', `imagens/${instrumento.getAttribute('id')}.jpg`)
        }
    }
})
}