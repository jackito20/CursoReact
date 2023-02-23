
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 20, 30]

let nuevoArray;

nuevoArray = tecnologias.filter( tech => tech !== 'HTML' )

// Comprobar si un elemento existe en el Array
//const resultado = tecnologias.includes('GraphQL')

//Some - Devuelve si al menos 1 cumple la condicion
//const resultado = numeros.some( numero => numero > 15)

// Find - Devuelve el primer elemento que cumple la condicion
//const resultado = numeros.find( numero => numero > 5 )

// Every - Retorna true o false si todos cumplen la condicion
//const resultado = numeros.every( numero => numero > 15 )

// Reduce  - Acumulando el total
//const resultado = numeros.reduce( (total, numero) => numero + total, 0 )

// Filter - Crea un nuevo array en base a una condicion
//const resultado = tecnologias.filter( tech => tech === 'Node.js')
//const resultado = numeros. filter( numero => numero !== 10 )

//console.log(resultado)

const arrayForeach = tecnologias.forEach( (tech, index) => console.log(index) )

// Crear un nuevo arreglo
const arrayMap = tecnologias.map(  tech => tech )
console.log(arrayMap)

//https://doesitmutate.xyz/

