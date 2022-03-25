import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/effects.css';
import Showincrement from './Showincrement';


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    /* const increment = () => {
        setCounter(counter + 1);
    }*/

    const increment = useCallback((num) => {
        setCounter(c => c + num);
    }, [ setCounter ]);

    useEffect( () => {

    },[increment]);

    return (
        <div>

            <h1>useCallback hook: {counter}</h1>
            <hr />

            <Showincrement increment={increment} />

        </div>
    )
}
