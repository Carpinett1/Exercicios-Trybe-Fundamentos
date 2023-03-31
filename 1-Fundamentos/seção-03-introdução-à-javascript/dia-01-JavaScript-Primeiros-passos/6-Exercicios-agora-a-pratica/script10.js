let custo = 10;
let venda = 22;
let numeroDeVendas = 1000;

let lucro = (venda - custo) * numeroDeVendas;

if (lucro > 0) {
  console.log("Você faturou: R$ " + lucro);
} else if (lucro < 0) {
  console.log("Você teve prejuizo de: R$ " + lucro);
} else {
  console.log("Você não lucrou e nem perdeu!");
};