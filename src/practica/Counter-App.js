import React from 'react'
import PropTypes from 'prop-types'

const Counter = ({ saludo, valor }) => {
    return (
        <>
            <h1>{saludo}</h1>
            <h2>{valor}</h2>
        </>
    )
}

Counter.propTypes = {
    valor: PropTypes.number.isRequired
}

Counter.defaultProps = {
    saludo: 'Counter-App',
    valor: 100
}

export default Counter;
