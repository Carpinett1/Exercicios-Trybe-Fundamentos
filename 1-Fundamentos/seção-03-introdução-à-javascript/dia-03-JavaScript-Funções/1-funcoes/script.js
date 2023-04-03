let saldoBanco = 2000;

function add(valor) {
  saldoBanco = saldoBanco + valor;
  return "Seu novo saldo é de: R$ " + saldoBanco;
}

function minus(valor) {
  saldoBanco = saldoBanco - valor;
  return "Seu novo saldo é de: R$ " + saldoBanco;
}

function mult(taxa) {
  saldoBanco = saldoBanco * taxa;
  return "seu novo saldo é de: R$ " + saldoBanco;
}

function div(taxa) {
  saldoBanco = saldoBanco / taxa;
  return "seu novo saldo é de: R$ " + saldoBanco;
}
