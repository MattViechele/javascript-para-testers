// Funções
// Precisa chamar
// Pode ou não receber parâmetros
// Pode ou não retornar dados

// function gerarNome(nome, sobrenome, idade) {
//     console.log('Nome: ', nome + sobrenome)
//     console.log('Idade: ', idade)
// }

function gerarNome(nome, sobrenome) {
    return('Nome: ' + nome + sobrenome)
}

// console.log(gerarNome('Mateus', ' Viechele'));

const nomeGerado = gerarNome('Pedro', ' Carvalho')
console.log(nomeGerado);
