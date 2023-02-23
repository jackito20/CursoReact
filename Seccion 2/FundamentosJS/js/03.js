//Tipos de datos

//Undefined
let cliente
console.log(cliente)
console.log(typeof cliente)

//Boleean
const descuento = true
console.log(descuento)
console.log(typeof descuento)

//Number
const numero1 = 20.20
const numero2 = 30
const numero3 = -100
console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

//Strings o Cadenas de Texto
const alumno = "Juan"
let producto = 'Monitor 20 pulgadas'

const numero = "30"
const numero4 = 30
console.log(typeof numero)
console.log(typeof numero4)

//BigInt
const numeroGrande = BigInt(9526324156461321354531321324)
console.log(typeof numeroGrande)

const numero5 = 30
const numero6 = 30
console.log(numero6 + Number(numeroGrande))

console.log(typeof String(numero4))
console.log(typeof Number(numero))
console.log(numero + numero4)

//Symbol
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)
console.log(primerSymbol === segundoSymbol)
console.log(primerSymbol.valueOf())
console.log(segundoSymbol.valueOf())

// Null
const descuento1 = null
console.log(typeof descuento1)