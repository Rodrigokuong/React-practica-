import React from 'react'
import PropTypes from 'prop-types'

const Counter = ({ valor }) => {
    
    const handelAdd = (e) => {
        //console.log(e);
        return () => console.log('hola mundo');
    }
    /* 
        estamos trabajando con eventos de click (onClick), hay varias formas de trabajar con esto
        tenemos una funcion, que tiene como objeto un "e"( event ), si lo dejamos asi podremos ver las 
        propiedades del evento, se puede trabajar este evento desde fuera de esta manera
        funciona de manera similar a las promesas ( new Promise ) de javascript, si este evento lo dejo de
        esta forma, el boton dejara de unfionar y en consola nos devuelve un undefine, por que? porque react
        entiende que es una funcion y lo renderiza asi y eso no nos sirve, y nos da un valor de undefine porque
        el evento e nos va a dar undefine, para que funcione deberiamos usar un return 
        
        const handelAdd = (e) => {
            return = () => { console.log('hola mundo') } 
        }
            return (
        <>
            <button onClick={ handelAdd() } >+1</button>
            esto se da porque la constatne handelAdd esta con parentecis, entonces para que funcione usaremos el
            return arriba, sino, es elimiar estos parentecis y, eliminamos el return de la constante
            y usamos solamente el console.log
            
            sino lo usariamos de esta mandera
            console.log('hola mundo')  esto iria dentro de la variable handelAdd 
            <button onClick={ handelAdd } >+1</button> esto iria dentro del return 
            
        </>
    )
    */
    
    return (
        <>
            <h1>Counter-App</h1>
            <h2>{valor}</h2>
            <button onClick={ handelAdd() } >+1</button>
            
        </>
    )
}

Counter.propTypes = {
    valor: PropTypes.number.isRequired
}

export default Counter;
