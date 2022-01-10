import React, { useState } from 'react'
import PropTypes from 'prop-types'




const CounterApp = ({ valor = 0 }) => {
    
    const [ counter, setcounter ]= useState( valor );
 
    const handelAdd = () => setcounter(counter + 1);

    const handelSubs = () => setcounter(counter - 1);

    const handelReset = () => setcounter(valor);

    return (
        <>
            <h1>Counter-App</h1>
            <h2> { counter } </h2>
            <button onClick = { handelAdd } >+1</button>
            <button onClick = { handelSubs } >-1</button>
            <button onClick = { handelReset } >Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    valor: PropTypes.number
}

export default CounterApp;
