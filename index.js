class Colors {
  constructor(Img, ResImg, altImg, altRes) {
    this.img = Img;
    this.res = ResImg;
    this.altImg = altImg;
    this.altRes = altRes;
  }
}
let selectedImage;
const button = document.getElementById("sort");
button.onclick = () => sortColor();

const images = [];

const imagesAlt = [
  "Círculo verde",
  "Círculo roxo",
  "Círculo laranja",
  "Quadrado verde",
  "Quadrado laranja",
  "Quadrado roxo",
  "Triangulo verde",
  "Triangulo laranja",
  "Triangulo roxo"
];

const resAlt = [
  "Círculo amarelo mais Círculo azul",
  "Círculo vermelhor mais Círculo azul",
  "Círculo vermelho mais Círculo amarelo",
  "Quadrado azul mais quadrado amarelo",
  "Quadrado vermelho mais quadrado amarelo",
  "Quadrado vermelho mais quadrado azul",
  "Triângulo amarelo mais Triângulo azul",
  "Triângulo vermelho mais Triângulo amarelo",
  "Triângulo vermelho mais Triângulo azul"
];

for (let i = 0; i < 9; i++) {
  images.push(
    new Colors(
      `./Images/${i}.png`,
      `./Images/resultado${i}.png`,
      imagesAlt[i],
      resAlt[i]
    )
  );
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortColor() {
  const colorIndex = getRandomIntInclusive(0, images.length);

  selectedImage = images[colorIndex];

  const span = document.getElementById("img");
  const spanRes = document.getElementById("res");
  spanRes.innerHTML = "";

  span.innerHTML = `<img alt=${selectedImage.altImg} width=300 height=200 src=${selectedImage.img}/>`;

  button.innerText = "Resultado";

  button.onclick = () => resultColor();

  button.id = "result";
}

function resultColor() {
  const button = document.getElementById("result");

  const span = document.getElementById("res");

  span.innerHTML = `<img alt=${selectedImage.altRes} width=300 height=200 src=${selectedImage.res} />`;

  button.innerText = "Sortear";

  button.onclick = () => sortColor();

  button.id = "sort";
}
