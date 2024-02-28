let option
let items = [];

while (option != 3) {
   option = Number(prompt(`Olá, usuário! Digite o número da opção desejada:

   1. Cadastrar um item na lista
   2. Mostrar itens cadastrados
   3. Sair do programa`))

   switch (option) {
   case 1:
      let newItem = prompt("Digite o item que deseja cadastrar")

      items.push(newItem)
      break;
   case 2:
      if (items.length == 0) {
         alert("Ainda não há itens cadastrados")
      } else {
         alert(items)
      }
      break;
   case 3:
      alert("Você saiu do programa")
      break;
   default: 
      alert("Essa opção não é válida")
   }
}