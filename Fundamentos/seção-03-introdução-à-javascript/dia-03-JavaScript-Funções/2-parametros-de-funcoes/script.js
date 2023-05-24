let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionar(cliente) {
  if (typeof cliente === 'string') {
    clientesTrybeBank.push(cliente);
    return "O cliente " + cliente + " foi adicionado a lista de clientes da TrybeBank";
  } else {
    return "Erro. insira um nome válido!";
  }
}

console.log(adicionar("Thiago"));
console.log(clientesTrybeBank);

function remover(cliente) {
  if (typeof cliente === 'string') {
    if (clientesTrybeBank.includes(cliente)) {
      let index = clientesTrybeBank.indexOf(cliente);
      clientesTrybeBank.splice(index, 1);
      return "O cliente " + cliente + " foi removido da lista de clientes da TrybeBank";
    } else {
      return "Esse cliente não pode ser encontrado na lista de clientes da TrybeBank";
    }
  } else {
    return "Erro. insira um nome válido!";
  }  
}

console.log(remover("Gus"));
console.log(clientesTrybeBank);