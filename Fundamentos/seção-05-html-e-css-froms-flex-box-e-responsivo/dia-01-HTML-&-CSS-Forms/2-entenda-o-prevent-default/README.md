## Para fixar:
* Crie um arquivo HTML index.html.
* Crie um arquivo Javascript script.js.
* Em seu arquivo HTML:
  * Adicione o <script src="script.js"></script> no final do body do HTML.
  * Copie os três elementos abaixo (a, input type="text", checkbox) em sua página
* Em seu arquivo Javascript.
  * Adicione os seletores abaixo no começo do arquivo.
```
<!-- elemento para copiar -->
<a href="www.betrybe.com" target="_blank" id="href">TRYBE</a>
<input type="text" id="input-text"/>
<input type="checkbox" id="input-checkbox" />
```
```
// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");
```
* Adicione um evento click no elemento a que possui o id href. Na função do evento, implemente o método .preventDefault() para prevenir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.

* Adicione um evento click no elemento checkbox que possui o id input-checkbox. Na função do evento, implemente o método .preventDefault() para prevenir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.

* Adicione um evento keypress no elemento input type="text" que possui o id input-text. Na função do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra ‘a’ minúscula) possa ser digitado na caixinha. (dica: para capturar a tecla digitada, utilize o event.key)

Caso deseje entender melhor o comportamento do método .preventDefault(), acesse a documentação do MDN ou a página da w3schools.