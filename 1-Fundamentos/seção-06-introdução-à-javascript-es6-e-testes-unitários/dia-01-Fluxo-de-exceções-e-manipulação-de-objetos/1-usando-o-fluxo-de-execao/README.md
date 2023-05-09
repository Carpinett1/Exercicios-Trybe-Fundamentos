Aprofundando um pouco mais
E aí, você ainda tem dúvidas sobre fluxo de exceções? Mantenha a calma e veja um novo exemplo.

Imagine que a Trybe Sporting Goods, loja de artigos esportivos da Trybe, contratou você para desenvolver uma aplicação em que uma pessoa informa o próprio nome e um número de 1 a 10. Esse sistema deve verificar o número informado e associar a ele uma promoção do dia, entre dez promoções cadastradas, e mostrar à pessoa uma mensagem contendo essa promoção.

Crie o arquivo index.html e insira o código a seguir:

Copiar
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Trybe Sporting Goods</title>
</head>
<body>
  <h2>Trybe Sporting Goods</h2>
  <div>
    <label for="name-id">Digite seu nome: </label>
    <input type="text" id="name-id">
  </div>

  <div>
    <label for="number-id">Digite um número para receber sua promo do dia: </label>
    <input type="text" id="number-id">
  </div>

  <button id="send-button">Enviar</button>

  <p id="text-initial"></p>
  <p id="text-final"></p>
</body>
  <script src="./script.js"></script>
</html>
Se preferir, crie o arquivo style.css e adicione o seguinte código:

Copiar
* {
  margin: 0;
}

body { 
  width: 80%;
  background-color: #065220;
  color: #ffffff;
  padding: 50px;
  font-family: Helvetica, sans-serif;
}

h2, input, button {
  margin-bottom: 20px;
}

div {
  display: flex;
  flex-direction: column;
}

input {
  border-radius: 5px;
  height: 30px;
  font-size: 25px;
}

#name-id {
  width: 50%;
}

#number-id {
  width: 50px;
}

p {
  font-size: 20px;
  margin-bottom: 10px;
}
Muito bem! Agora, rode o live server e observe o resultado. Note que foram criados dois inputs do tipo text e um botão. Além disso, ainda não visíveis, há dois parágrafos que receberão textos conforme os dados forem inseridos nos inputs e o botão for clicado. O primeiro mostrará uma mensagem de boas-vindas na página e o outro apresentará a promoção.

Agora, é momento de colocar o JavaScript em ação!

Crie o arquivo script.js e adicione o código a seguir:

Copiar
// Primeira parte
const promo = [
  {product: 'bola de beach tennis', price: 29.99},
  {product: 'mochila de trilha 20 litros', price: 120.99},
  {product: 'capacete de ciclista', price: 180.59},
  {product: 'toalha compacta de secagem', price: 39.99},
  {product: 'kit 5 camisetas Dry Fit', price: 99.99},
  {product: 'caneleiras de peso - 3kg (par)', price: 44.99},
  {product: 'bola de ginástica e pilates', price: 149.59},
  {product: 'óculos de natação', price: 18.99},
  {product: 'capa protetora de prancha de surf', price: 89.59},
  {product: 'bola de basquete', price: 39.99},
];
Com base no que você já aprendeu até aqui, o código para resolver esse problema ficaria desta forma (ou similar):

Copiar
const button = document.querySelector('#send-button');

button.addEventListener('click', () => {
  const name = document.querySelector('#name-id').value;
  const number = document.querySelector('#number-id').value;

  showPromo(name, number);
});

const showPromo = (name, number) => {
  const firstText = document.querySelector('#text-initial');
  const secondText = document.querySelector('#text-final');
  const productObject = checkNumber(parseInt(number));

  firstText.innerHTML = `Boas-vindas, ${name}!`;
  secondText.innerHTML = `A promoção do dia é: 
    ${productObject.product} no valor de R$ ${productObject.price}`;
}

// Segunda parte
const checkNumber = (number) => {
  return promo[number - 1];
}
Até aqui, nenhuma novidade, não é mesmo? Você capturou o botão, adicionou um evento de click nele, chamou a função showPromo, que é responsável por inserir as mensagens de boas-vindas e da promo na página, e, ainda, dentro dessa função, chamou uma função checkNumber, que verifica se o valor inserido no input é do tipo number.

Faça o teste inserindo um nome e um número nos campos de input.

Tudo funcionando corretamente! Porém, é preciso considerar que os valores inseridos podem não ser os esperados, por exemplo:

O input de nome pode estar recebendo:
um valor diferente de uma string;
nenhum valor.
O input de número pode estar recebendo:
um valor diferente de um number;
um valor abaixo de 1 ou acima de 10;
um valor não inteiro;
nenhum valor.
Neste momento, você provavelmente está pensando que pode resolver todos esses problemas com estruturas condicionais, como o IF ou SWITCH CASE. 😎

E você tem razão! É mesmo possível solucionar dessa maneira. Entretanto, observe que esses são problemas previsíveis. Como você resolveria problemas imprevisíveis? Observe este exemplo:

os objetos que contêm as promoções estão armazenados em um banco de dados que não está disponível no momento;
o servidor que faz conexão com seu computador (local) está fora do ar e, por isso, não consegue interpretar quais valores você informou nos inputs da página.
Nesses casos, e também em muitos outros, como seria possível prever o tipo de erro para poder tratá-lo e também devolver uma mensagem para a pessoa que quer consultar a promo?

O fluxo de exceção ajuda a tratar erros previsíveis e imprevisíveis.

