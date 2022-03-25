import React, { useState } from 'react'
import MultipleCustomHook from '../03-examples/MultipleCustomHook';
import '../02-useEffect/effects.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show); //esto significa que es el valor opuesto a show
    }


    return (
        <div>
            <h1> Real Example Ref</h1>
            <hr></hr>

            {/* si show esta en true, entonces muestra el componente, caso contrario lo oculta */}
            {show && <MultipleCustomHook />}

            <button
                className='btn btn-primary mt-5'
                onClick={handleClick}
            >
                Show/Hide
            </button>
        </div>
    )
}
