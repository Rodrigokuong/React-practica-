//Fetch API 

//lo que estamos haciendo es llamar una llave desde la pagina giphy
const apiKey = 'YxfLRWxoCVDfVTogWjUiU76BS6wC0dqY';

//fetch se maneja como si fuera una funcion de promesa, asique para obtener los datos lo hacemos del a siguente manera
//usamos "${apikey}" porque ya contiene la url de nuestra app en giphy 
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apikey=${ apiKey }`);

//creamos una variable llamada "peticion" y usamos el ".then" que es el inicio de todo 
//tambien usamos el .catch que es nuestro error, por si llegara a no funcionar
/* peticion.then( ( resp ) => {
    console.log( resp );
})
.catch( console.warn ); 
esta es una forma de hacerlo, pero no podemos sacar toda la data 
*/

/* peticion.then( ( resp ) => {
    resp.json().then( data =>{
        console.log( data );
    })
})
.catch( console.warn ); 
asi tambien se podria trabajar pero es dificil de mantener
*/ 

peticion
    .then ( resp => resp.json() )
    .then ( ({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })  
    .catch( console.warn);
    
  