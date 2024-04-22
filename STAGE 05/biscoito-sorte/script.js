const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

const discoverTeam = document.querySelector('#discover-team');
const drawAnother = document.querySelector('#draw-another');

const teams = ['Tommy Rachs', 'Monkey Beat', 'Beast Classics', 'Nova Keys', 'Millions Balls', 'Clear Cashs', 'Ollie Master', 'In Pixels', 'PopCorn 53', 'Chicken Best', 'All Heaven', 'Book Nina', 'Charcoal Horses', 'Wales Wheels', 'Denis Pool', 'Onion Trufa', 'Dom News', 'Myles Team', 'Layla Clicks', 'Draw Mechanics', 'Pony Solo', 'Larry Layer', 'No Promises', 'Some Kids', 'Gary Worlds', 'House Rock', 'Ultimate Joke', 'More Glitter', 'Some Shock', 'Three Bees'];

let indexTeam = Math.round(Math.random() * 30); //número entre 0 e 29 (index dos objetos do array)

discoverTeam.addEventListener('click', discover);
drawAnother.addEventListener('click', draw);
document.addEventListener('keydown', enter);

function discover() {
   changeScreen()

   screen2.querySelector('p').innerText = teams[indexTeam]
}

function draw() {
   changeScreen()

   indexTeam = Math.round(Math.random() * 30);
}

function changeScreen() {
   screen1.classList.toggle('hide')
   screen2.classList.toggle('hide')
}

function enter(event) {
   if(event.key == 'Enter' && screen1.classList.contains('hide')) {
      draw()
   }
}