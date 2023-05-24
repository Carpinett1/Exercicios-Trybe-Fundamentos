let num1 = 5;
let num2 = 12;
let num3 = 14;

let existeImpar = num1 % 2 === 1 || num2 % 2 === 1 || num3 % 2 === 1;

if (existeImpar) {
  console.log("Há um Impar entre nós");
} else {
  console.log("Não há Impar entre nós");
}