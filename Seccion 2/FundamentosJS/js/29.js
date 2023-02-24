// Fetch API

const url = 'https://jsonplaceholder.typicode.com/comments'

// cuando se usa .then() se esta usando Promises
const consultarAPI = () => {
    fetch(url)
    .then( respuesta => respuesta.json() )
    .then( resultado => {
        resultado.forEach(comentario => {
            console.log(comentario)
        });
    })
}

consultarAPI();