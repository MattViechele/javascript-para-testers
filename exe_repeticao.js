// Exercício 1 - Estrutura de repetição

// Percorrer uma lista de nomes, contendo os nomes:
// Eduardo, Maria, Fernando, João e Francisco
// Número da execução, começando em 1
// O nome que está sendo executado
// Separadores

// Exemplo: 
// Execução: 1
// Nome: Eduardo
// ---------------------

const nomes = ['Eduardo', 'Maria', 'Fernando', 'João', 'Francisco']

nomes.forEach((nome, execucao) => {
    execucao+=1;
    console.log('Execução: ' + execucao)
    console.log('Nome: ' + nome)
    console.log('-----------------------------')
})

// for (let execucao = 1; execucao <= nomes.length; execucao++) {
//     console.log('Execução: ' + execucao)
//     console.log('Nome: ' + nomes[execucao - 1])
//     console.log('---------------------')
// }