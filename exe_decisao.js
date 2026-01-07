// Exercício 2 - Estrutura de decisão

// Percorrer uma lista de cidades
// Contendo: ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Porto Alegre']
// Para cada item, verificar se a cidade Florianópolis está presente na lista
// Printar nome da cidade
// Caso esteja, avisar
// Caso não seja o elemento procurado, avisar
// Número da execução

// Execução: 1
// Cidades: São Paulo
// Encontrado/Não encontrado
// ----------------------------

const cidades = ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Porto Alegre']

for (let indice = 0; indice < cidades.length; indice++) {
    console.log('Execução: ', indice + 1)
    console.log('Nome: ' + cidades[indice])

    if (cidades[indice] === 'Florianópolis') {
        console.log('Encontrado!')
    } else {
        console.log('Não encontrado!')
    }

    console.log('---------------------')
}