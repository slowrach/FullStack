const guys = [
  {
    name: "Grad3y",
    age: 21,
    weight: 50,
    height: 201,
  },
  {
    name: "Tesouro",
    age: 25,
    weight: 200,
    height: 201,
  },
  {
    name: "seu Stingo",
    age: 72,
    weight: 108, //100kg só de músculos
    height: 187,
  },
  {
    name: "Relâmpago Markinho",
    age: 74,
    weight: 90, //de nariz
    height: 183,
  },
  {
    name: "Braiadas",
    age: 64,
    weight: 72,
    height: 172,
  },
  {
    name: "seu Zé Duplantier",
    age: 46,
    weight: 83,
    height: 190,
  },
  {
    name: "Jaimito Bonito",
    age: 23,
    weight: 104,
    height: 198,
  },
];

function imc(dude) {
  let imcCalc = (dude.weight / (dude.height / 100) ** 2).toFixed(1);

  if (imcCalc < 18.5) {
    var situation = "BAIXO PESO";
  } else if (imcCalc >= 18.5 && imcCalc <= 24.9) {
    situation = "PESO NORMAL";
  } else if (imcCalc >= 25 && imcCalc <= 29.9) {
    situation = "SOBREPESO";
  } else if (imcCalc >= 30 && imcCalc <= 34.9) {
    situation = "OBESIDADE GRAU I";
  } else if (imcCalc >= 35 && imcCalc <= 39.9) {
    situation = "OBESIDADE GRAU II";
  } else {
    situation = "OBESIDADE GRAU III";
  }

  return `O ${dude.name}, de ${dude.age} anos, tem IMC igual a ${imcCalc}, logo está com ${situation}`;
}

let position;

while (true) {
  position = prompt(
    `Digite o número correspondente ao nome de quem você deseja calcular o IMC: ${guys.reduce(
      (total, current, position) =>
        total + `\n  ${position + 1}) ${current.name}`,
      ""
    )}`
  );

  if (!position) break;

  if (isNaN(position)) {
    alert("Apenas números são respostas válidas!");
    continue;
  }

  alert(imc(guys[position - 1]));
    continue;
}