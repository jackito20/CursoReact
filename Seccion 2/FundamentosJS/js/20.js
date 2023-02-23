
const autenticado = true

autenticado ? 
    console.log('usuario autenticado') : 
    console.log('no, autenticado, dirigir al login')

// Doble ternario
const saldo = 600
const pagar = 500
const tarjeta = false
    
saldo > pagar ? 
    console.log('Puedes pagar con saldo') : 
    tarjeta ? 
        console.log('Puedes pagar con tarjeta') : 
        console.log('No puedes pagar')