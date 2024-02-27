let option = Number(prompt(`Olá, usuário! Digite o número da opção desejada:

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa`))

let items = [];

while (option != 3) {
   option = Number(prompt(`Olá, usuário! Digite o número da opção desejada:

   1. Cadastrar um item na lista
   2. Mostrar itens cadastrados
   3. Sair do programa`))

   if (option == 1) {
      newItem = prompt("Digite o item que deseja cadastrar")

      items.push(newItem)
   } else if (option == 2) {
      if (items.length == 0) {
         alert("Ainda não há itens cadastrados")
      } else {
         alert(items)
      }
   } else {
      alert("Você saiu do programa")
   }
}

alert(items)