import React, { useLayoutEffect, useRef, useState } from 'react'
import useCounter from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    //console.log(state);
    //console.log(loading);

    const { quote } = !!data && data[0];
    //console.log(data);
    console.log( quote );

    const pTag = useRef();
    const [boxzise, setBoxzise] = useState({});

    useLayoutEffect ( () => {

        //console.log(pTag.current.getBoundingClientRect());
        setBoxzise(pTag.current.getBoundingClientRect());
    },[quote])

    return (
        <div>
            <h1> Layout Effect </h1>
            <hr />


            <blockquote className='blockquote text-end'>
                <p 
                    className='mb-0'
                    ref={ pTag }
                    > {quote} 
                </p>
            </blockquote>

            <pre>
                { JSON.stringify(boxzise, null, 3)}
            </pre>


            <button
                className='btn btn-primary'
                onClick={increment}
            >
                Siguiente Quote
            </button>


        </div>
    )
}

export default Layout;