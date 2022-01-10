//Comunicacion entre componentes-props 
import React from 'react';

//utilizamos desestructuracion para que sea mucho mas limpio y mas facil de mantener 
const PrimeraApp = ( { saludo = 'Hola Mundo' } ) => {

    return (
        <div>
            <h1>{saludo}</h1>
            <p>Mi primera app</p>
        </div>
    )
}

export default PrimeraApp





//este metodo ya no se utiliza si bien funciona, ya no es muy utilizado
/* const PrimeraApp = (props) => {

    return (
        <div>
            <h1>{props.saludo}</h1>
            <p>Mi primera app</p>
        </div>
    )
}

export default PrimeraApp*/