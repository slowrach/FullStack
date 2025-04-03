let pessoa = {
nome: 'Mark',
peso: 85.4,
emagrecer(p=0){
    this.peso -= p
}
}

console.log(`${pessoa.nome} tinha ${pessoa.peso} kg`)
pessoa.emagrecer(2)
console.log(`Agora, depois da academia, ${pessoa.nome} passou a pesar ${pessoa.peso} kg!`)