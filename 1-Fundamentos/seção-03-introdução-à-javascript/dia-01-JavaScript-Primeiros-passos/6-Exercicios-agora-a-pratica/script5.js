let angleA = 100;
let angleB = 60;
let angleC = 20;

let somaDosAngulos = angleA + angleB + angleC;

let todosAngulosPositivos = angleA > 0 && angleB > 0 && angleC > 0;

if(todosAngulosPositivos) {
  if (somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log("Erro: ângulo inválido!");
}