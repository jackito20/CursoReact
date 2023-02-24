//Imports y Exports

/*import comoquieras from './funciones.js'      //Cuando exportas una sola funcion puedes renombrar la funcion en el import 
const resultado = comoquieras(20,30)*/

import { sumar as suma} from './funciones.js'
const resultado = suma(20,30)

console.log(resultado)