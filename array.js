const paises = ['Brasil', 'Polônia', 'Itália']; // Lista de dados

console.log('Acessando o país: ' + paises[0]); // Acessando uma posição edo array
console.log('Tamanho do array: ' + paises.length);

// Operações com o Array

paises.push('Estados Unidos') // Adiciona no final do array
paises.pop(); // Remove o último elemento
paises.unshift('Espanha'); // Para adicionar no início do array
paises.shift(); // Para remover o primeiro elemento do array

console.log(paises);