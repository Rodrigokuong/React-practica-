import React from 'react'
import useCounter from '../../hooks/useCounter';
import './counter.css';

const CounterWithCustomHook = () => {

const {state, increment, decrement, reset} = useCounter ( 100 ) ;

    return (
        <div>
            <h1>Counter With Hook {state}</h1>
            <hr />

            <button onClick = { () => increment(2) }className='btn btn-primary'> +1 </button>
            <button onClick = { () => decrement(2) }className='btn btn-primary'> -1 </button>
            <button onClick = { reset }className='btn btn-primary'> reset </button>
        </div>
    )
}

export default CounterWithCustomHook