//Async - Await

//la funcion async nos premite simplificar los fetch 
//utilizamos await para hacer que espere, es decir hasta que no complete la funcion, no seguira a la siguiente linea de codigo
//el unico detalle es que para poder corroborrar de que esta todo correcto como el metodo .then y el .catch 
//tenemos que usar el metodo "try{}" y el metodo "catch{}" dentro del try va nuestro cuerpo, nuestro codigo
//dentro del catch nuestro error por asi decirlo 
//append nos permite meter etiquetas html 

const getImagen = async() => {
    try{
    const apiKey = 'YxfLRWxoCVDfVTogWjUiU76BS6wC0dqY';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?apikey=${ apiKey }`);
    const { data } = await resp.json();
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
    }
    catch(error){
        console.error(error);

    }
    

    
}

getImagen();


    
  