import React, { useState } from 'react'
import PropTypes from 'prop-types'


//trabajamos con hooks, los hooks no son mas que funciones
//cada hook hay que importarlo en react para que pueda funcionar
//en este caso usamos el useState, pero hay muchos y diversas formas de usarlos
//para incrementar el valor de counter, no podemos usarlo de la siguiente manrea
// let counter = counter +1; o counter ++; 
//porque no funciona asi react, nos sale un error al querer hacerlo funcionar asi
//al usar el useState, estariamos usando la desestructuracion
//entonces, creamos una constante que va a contener un arreglo es decir 2 objetos
//en este caso seria counter y setcounter, para poder incrementar su valor de forma numerica
//lo que debemos hacer es usar el setcounter(counter + 1); o en su defecto
// setcounter ( (c) => c + 1 ); puede manejar funciones de flecha 

const CounterApp = ({ valor }) => {
    
    const [ counter, setcounter ]= useState( 0 );
 
    const handelAdd = () => {
        // setcounter(counter + 1);
        setcounter( (c) =>  c + 1 );
    }
    return (
        <>
            <h1>Counter-App</h1>
            <h2> { counter } </h2>
            <button onClick = { handelAdd } >+1</button>
            
        </>
    )
}

CounterApp.propTypes = {
    valor: PropTypes.number.isRequired
}

export default CounterApp;
