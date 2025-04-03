var idade = 56
console.log(`Você tem ${idade} anos, logo:`)

if (idade < 16) {
    console.log(`VOCÊ NÃO VOTA`)
} else if (idade < 18 || idade > 65 ) {
    console.log(`SEU VOTO É OPCIONAL`)
} else {
    console.log(`SEU VOTO É OBRIGATÓRIO`)
}