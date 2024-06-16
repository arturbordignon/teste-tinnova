// Este código funciona tanto com input do usuário, quanto respostas fixas (deixei este por padrão), a parte de input do usuário está comentada pois requer NodeJS.

// const readline = require("readline");

// const readl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

let contasBancarias = [
  {
    numero: 1,
    nome: "Artur",
    saldo: 100,
  },
  {
    numero: 2,
    nome: "Cynthia",
    saldo: 40,
  },
];

function buscarConta(numeroDaConta) {
  for (let conta of contasBancarias) {
    if (conta.numero === numeroDaConta) {
      return conta;
    }
  }
  return null;
}

function depositarNaConta(numeroDaConta, valor) {
  const conta = buscarConta(numeroDaConta);
  if (conta) {
    conta.saldo += valor;
    console.log(
      `Depósito de R$ ${valor} realizado com sucesso na conta de número ${numeroDaConta}, de ${conta.nome}. Saldo atual: R$ ${conta.saldo}.`
    );
  } else {
    console.error(`Conta ${numeroDaConta} não encontrada.`);
  }
}

function sacarDaConta(numeroDaConta, valor) {
  const conta = buscarConta(numeroDaConta);
  if (conta) {
    if (conta.saldo >= valor) {
      conta.saldo -= valor;
      console.log(
        `Saque de R$ ${valor} realizado com sucesso na conta de número ${numeroDaConta}, de ${conta.nome}. Saldo atual: R$ ${conta.saldo}.`
      );
    } else {
      console.error(
        `Saldo insuficiente na conta de número ${numeroDaConta}. Para saque de R$ ${valor}!`
      );
    }
  } else {
    console.error(`Conta ${numeroDaConta} não encontrada.`);
  }
}

function exibirSaldoDaConta(numeroDaConta) {
  const conta = buscarConta(numeroDaConta);
  if (conta) {
    console.log(
      `Saldo da conta de número ${numeroDaConta}, de ${conta.nome} é de R$ ${conta.saldo}`
    );
  }
}

function transferirSaldo(numeroContaDeOrigem, numeroContaDeDestino, valor) {
  const contaDeOrigemDoSaldo = buscarConta(numeroContaDeOrigem);
  const contaDeDestinoDoSaldo = buscarConta(numeroContaDeDestino);

  if (contaDeOrigemDoSaldo && contaDeDestinoDoSaldo) {
    if (contaDeOrigemDoSaldo.saldo >= valor) {
      contaDeOrigemDoSaldo.saldo -= valor;
      contaDeDestinoDoSaldo.saldo += valor;
      console.log(
        `Transferência de R$ ${valor} realizada com sucesso da conta de ${contaDeOrigemDoSaldo.nome} para a conta de ${contaDeDestinoDoSaldo.nome}`
      );
    } else {
      console.error(
        `Saldo insuficiente na conta de origem de ${contaDeOrigemDoSaldo.nome}. Para transferência de R$ ${valor}!`
      );
    }
  } else {
    console.error(
      `Conta de origem de número ${numeroContaDeOrigem} ou conta de destino de número ${numeroContaDeDestino} não encontrada!`
    );
  }
}

depositarNaConta(1, 20);
console.log(contasBancarias);

sacarDaConta(2, 10);
console.log(contasBancarias);

exibirSaldoDaConta(1);
console.log(contasBancarias);

transferirSaldo(1, 2, 30);
console.log(contasBancarias);

// function iniciarPrograma() {
//   readl.question(
//     "Escolha a operação:\n1- Depósito\n2- Saque\n3- Exibir Saldo\n4- Transferência\n5- Sair\n",
//     (operacaoBancaria) => {
//       if (operacaoBancaria === "1") {
//         readl.question("Número da conta para efetuar o depósito: ", (numeroDaConta) => {
//           readl.question("Valor do depósito em R$: ", (valor) => {
//             depositarNaConta(parseInt(numeroDaConta), parseFloat(valor));
//             // Deixei o console.log para poder visualizar o resultado no array
//             console.log(contasBancarias);

//             iniciarPrograma();
//           });
//         });
//       } else if (operacaoBancaria === "2") {
//         readl.question("Número da conta para efetuar o saque: ", (numeroDaConta) => {
//           readl.question("Valor do saque em R$: ", (valor) => {
//             sacarDaConta(parseInt(numeroDaConta), parseFloat(valor));
//             // Deixei o console.log para poder visualizar o resultado no array
//             console.log(contasBancarias);

//             iniciarPrograma();
//           });
//         });
//       } else if (operacaoBancaria === "3") {
//         readl.question("Número da conta para exibir saldo: ", (numeroDaConta) => {
//           exibirSaldoDaConta(parseInt(numeroDaConta));
//           // Deixei o console.log para poder visualizar o resultado no array
//           console.log(contasBancarias);

//           iniciarPrograma();
//         });
//       } else if (operacaoBancaria === "4") {
//         readl.question("Número da conta de origem: ", (numeroContaDeOrigem) => {
//           readl.question("Número da conta de destino: ", (numeroContaDeDestino) => {
//             readl.question("Valor da transferência em R$: ", (valor) => {
//               transferirSaldo(
//                 parseInt(numeroContaDeOrigem),
//                 parseInt(numeroContaDeDestino),
//                 parseFloat(valor)
//               );
//               // Deixei o console.log para poder visualizar o resultado no array
//               console.log(contasBancarias);

//               iniciarPrograma();
//             });
//           });
//         });
//       } else if (operacaoBancaria === "5") {
//         console.log("Finalizando o programa...");
//         readl.close();
//       } else {
//         console.error("Operação inválida! Por favor tente novamente.");
//         iniciarPrograma();
//       }
//     }
//   );
// }

// iniciarPrograma();
