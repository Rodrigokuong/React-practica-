import React, { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import './effects.css';


const FormWithCustomHook = () => {

    const [formvalues, handleChange] = useForm({
        name:'',
        email:'',
        password:''
    }) 

    const { name, email, password } = formvalues;

    useEffect( () => {
      console.log('email cambio')
    }, [ email ]);

    const handleSumbit = (e) => {
        e.preventDefault();
    }
    

  return (
    <form onSubmit={ handleSumbit}>

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

    <br></br>

    <div className='form-group'>

        <input 
            type='password'
            name='password'
            className='form-control'
            placeholder='******'
            autoComplete='off'
            value={ password }
            onChange={handleChange}
        />

    </div>

    <button 
        type='submit'
        className='btn btn-primary'>
            Guardar
    </button>
    
    </form>
  )
}

export default FormWithCustomHook;