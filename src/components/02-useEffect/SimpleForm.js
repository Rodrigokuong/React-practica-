import React, { useEffect, useState } from 'react';
import './effects.css';
import Message from './Message';

const SimpleForm = () => {

    const [form, setForm] = useState({
        name:'',
        email:''
    }) 

    const { name, email } = form;

    useEffect( () => { 
        //console.log('hey');
    }, [] );

    useEffect( () => { 
        //console.log('form cambio');
    }, [form] );

    useEffect( () => { 
        //console.log('email cambio');
    }, [email] );

    const handleChange = ({target}) => {
        console.log(target.name);
        setForm({
            ...form,
            [ target.name ]: target.value
        })
    }

  return (
    <>
    <h1>UseEffect</h1>
    <hr />

    <div className='form-group'>

        <input 
            type='text'
            name='name'
            className='form-control'
            placeholder='tu nombre'
            autoComplete='off'
            value={ name }
            onChange={handleChange}
        />

    </div>
    <br></br>
    <div className='form-group'>

        <input 
            type='text'
            name='email'
            className='form-control'
            placeholder='email@gmail.com'
            autoComplete='off'
            value={ email }
            onChange={handleChange}
        />

    </div>

    {( name === '123' )&& <Message />}
    </>
  )
}

export default SimpleForm