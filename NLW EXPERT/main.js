const perguntas = [
   {
      pergunta: "Em que data o Vasco foi fundado?",
      respostas: [
         "1 de agosto de 1989",
         "21 de agosto de 1898",
         "31 de agosto de 1888"
      ],
      correta: 1
   },
   {
      pergunta: "O que significa a sigla CRVG?",
      respostas: [
         "Clube e Regatas Vasco da Gama",
         "Clube de Regatas VeGetti",
         "Clube de Regatas Vasco da Gama"
      ],
      correta: 2
   },
   {
      pergunta: "Qual o seu maior artilheiro pelo Campeonato Brasileiro?",
      respostas: [
         "Romário",
         "Roberto Dinamite",
         "Edmundo"
      ],
      correta: 1
   },
   {
      pergunta: "Complete um dos hinos da torcida: 'de todos os amores que eu tive, és o mais antigo. O Vasco é minha vida, minha história, ...':",
      respostas: [
         "meu primeiro amigo",
         "meu melhor amigo",
         "meu único amigo"
      ],
      correta: 0
   },
   {
      pergunta: "Como sabemos, a 'Cruz de Malta' é uma denominação errada para a cruz utilizada pelo time. Qual a denominação correta da cruz presente no seu brasão?",
      respostas: [
         "Cruz da Ordem de Cristo",
         "Cruz de Portugal",
         "Cruz Pátea"
      ],
      correta: 2
   },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

for(const item of perguntas) {
   const quizItem = template.content.cloneNode(true)

   quizItem.querySelector('h3').textContent = item.pergunta

   for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)

      dt.querySelector('span').textContent = resposta

      quizItem.querySelector('dl').appendChild(dt)
   }

   quizItem.querySelector('dl dt').remove()

   quiz.appendChild(quizItem)
}