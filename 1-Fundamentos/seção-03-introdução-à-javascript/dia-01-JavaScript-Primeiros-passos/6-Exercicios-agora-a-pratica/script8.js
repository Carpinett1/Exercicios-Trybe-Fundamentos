let num1 = 3;
let num2 = 13;
let num3 = 15;

let existePar = num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0;

if (existePar) {
  console.log("Há um par entre nós");
} else {
  console.log("Não há par entre nós");
}