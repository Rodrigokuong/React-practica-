//Function Component
import React from 'react';

const primersaludo = () => {
const saludo = 'Hola Mundo';

    return(
        <>
            <h1>{ saludo }</h1> {/* esto nos permite imprimir cualquier exprecion de javascript */}
            <p>Mi primera app</p>
        </>
    );
    //esto es jsx 
    }
    export default primersaludo;


//nombrar archivos con las primeras letras en mayusculas
//nos da una idea de que es un componente de React 
//como usamos jsx debemos importar react para que pueda funcionar correctamente 
//ya que no puede retornar 2 objetos a la vez es decir 
//retrun <h1>hola mundo</h1>
//<p>mi primera aplicacion</p>
//no puede retornarlo porque no lo sabe, entonces podemos solucionarlo de la siguiente manera
//podemos agregarle un div para que quede todo en conjunto y asi poder retornar todo
/*const PrimeraApp = () => {

    //javascript solo puede retornar 1 solo objeto 
    return (
        <div>
            <h1>Hola Mundo</h1>
            <p>Mi primera aplicacion</p>
        </div>
    
    );//esto es jsx 

} */

//podemos usar un "Fragment", para ello debemos de importar el fragment
//import React, {Fragment} from 'react'; asi puede funcionar 
/*const PrimeraApp = () => {

    //javascript solo puede retornar 1 solo objeto 
    return (
        <Fragment>
            <h1>Hola Mundo</h1>
            <p>Mi primera aplicacion</p>
        </Fragment>
    
    );//esto es jsx 

} */
//sino tambien se puede resolver de esta manera
//de esta forma no tenemos que importar nada mas que react 
    