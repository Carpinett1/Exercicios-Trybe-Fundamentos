# Exercícios - agora, a prática
### Exercício - Aplicando o DOM
Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito em que a pessoa usuária pode escolher as configurações da página.

As pessoas devem ter o poder de alterar:

  * Cor de fundo da tela;
  * Cor do texto;
  * Tamanho da fonte;
  * Espaçamento entre as linhas do texto;
  * Tipo da fonte (Font family).
Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.

O conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.

Logo abaixo, estruturamos os arquivos HTML e CSS para você realizar o exercício.

index.html

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="style.css">
  <title>Leitor</title>
  <script src="./script.js"></script>
</head>
<body>
  <section class="preferences">
    <section id="background-color" class="options">
      <span>Cor de fundo</span>
      <button>white</button>
      <button>black</button>
      <button>green</button>
      <button>blue</button>
      <button>yellow</button>
    </section>
    <section id="font-color" class="options">
      <span>Cor da fonte</span>
      <button>black</button>
      <button>red</button>
      <button>white</button>
    </section>
    <section id="font-size" class="options">
      <span>Tamanho da fonte</span>
      <button>8pt</button>
      <button>10pt</button>
      <button>12pt</button>
      <button>14pt</button>
      <button>20pt</button>
    </section>
    <section id="line-height" class="options">
      <span>Espaçamento entre as linhas</span>
      <button>1</button>
      <button>normal</button>
      <button>1.5</button>
      <button>2.0</button>
      <button>3.0</button>
    </section>
    <section id="font-family" class="options">
      <span>Tipo da fonte</span>
      <button>Arial</button>
      <button>Times New Roman</button>
    </section>
  </section>
  <main>
    <section class="title">
      <h1>Lorem Ipsum</h1>
    </section>
    <section class="description">
      <h3>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h3>
    </section>
    <article class="content">
      <p class="paragraph">
      </p>
    </article>
  </main>  
</body>
</html>
```
style.css

```
body {
  margin: 10px;
}
.preferences {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid green;
}
.options {
  display: flex;
  flex-direction: column;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.description {
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px;
}
.paragraph {
  display: flex;
}
```
```
Bônus ⭐️: As propriedades descritas acima são obrigatórias, mas você é livre para adicionar qualquer outra propriedade que julgar válida e que tenha como objetivo melhorar a experiência da pessoa que lê em sua página.
```