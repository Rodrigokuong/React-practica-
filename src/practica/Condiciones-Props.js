//PropTypes
import React from 'react';
import PropTypes from 'prop-types'

 //si ponemos este if, obliga a las personas a que tengan que usar la prop o componente de la manera en la que yo quiera
 //al poner if (!saludo) dice que si el saludo no existe, entonces que throw new Error(); que mande un error de y entre
 //parentecis escribir entre comillas simples lo que nosotros queremos
 //aunque este metodo consume mucha memoria 

const PrimeraApp = ( { saludo, subtitulo} ) => {

    return (
        <div>
            <h1>{saludo}</h1>
            <p>Mi primera app</p>
        </div>
    )
}

//lo que hacemos aca es que hacemos que las props tengan condiciones, es decir 
//que saludo: PropTypes.string, significa que saludo te pide que le den un valor tipo string(letra)
//pero no es obligatorio, al escribirle .isRequired, obliga al programador que tiene que se un tipo string
//puede ser cualquier tipo de condicion, number,null, etc etc
//para que esto funcione, debemos importarlo asi puede llegar a funcionar es decir
// import PropTypes from 'prop-types';
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

//esta es la forma mas practica para trabajar, en cualquier caso 
//nos podria llegar a permitir usar la prop subtitulo para otro fin 
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp





