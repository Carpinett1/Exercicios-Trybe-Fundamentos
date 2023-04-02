let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;
let maiorNumero = 0;
let menorNumero = numbers[0]
let numerosImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
  sum = sum + numbers[index];
  media = sum / numbers.length;
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
  if (numbers[index] % 2 === 1) {
    numerosImpares = numerosImpares + 1;
  }
  if (numbers[index] < menorNumero) {
    menorNumero = numbers[index];
  }
}

console.log("Sua soma é: " + sum);
console.log("A media é de: " + media);

if (media > 20) {
  console.log("Valor maior que 20");
} else if (media <= 20) {
  console.log("Valor menor ou igual a 20");
}

console.log("O maior número é: " + maiorNumero);

if (numerosImpares > 0) {
  console.log("A quantidade de números ímpares é: " + numerosImpares);
} else {
  console.log("Nenhum valor ímpar encontrado");
}

console.log("O menor número é : " + menorNumero);

let umAVinteCinco = []

for (let index = 1; index <= 25; index += 1) {
  umAVinteCinco.push(index);
  console.log(umAVinteCinco[index - 1]);
}

for (let index = 0; index < umAVinteCinco.length; index += 1) {
  let divisao = umAVinteCinco[index] / 2;
  console.log(divisao);
}

console.log("10 fatorial = " + (10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1));

let word = 'tryber';
let reversedWord = ""
for (let index = 0; index < word.length; index += 1) {
  reversedWord += word[word.length - 1 - index];
}

console.log(reversedWord);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = ""
let menorPalavra = array[0]
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  }
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }
}

console.log("A maior palavra é: " + maiorPalavra);
console.log("A menor palavra é: " + menorPalavra);