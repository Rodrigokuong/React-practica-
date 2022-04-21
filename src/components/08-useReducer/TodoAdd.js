import React from 'react'
import useForm from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleChange, reset] = useForm({
        description: ''
      }); 

    const handleSumbit = (e) => {

        e.preventDefault();

        if( description.trim().length <= 1){
            return;
        }
        
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
          }
        
        handleAddTodo( newTodo );
        reset();
    }

    return (
        <>
            <h4> Agregar Todo </h4>
            <hr />
            <form onSubmit={handleSumbit}>

                <input
                    type='text'
                    name='description'
                    placeholder='Aprender...'
                    autoComplete='off'
                    className='form-control'
                    value={description}
                    onChange={handleChange}
                />

                <button
                    className='btn btn-outline-primary mt-1 w-100'
                    type='submit'>
                    Agregar
                </button>
            </form>
        </>
    )
}
