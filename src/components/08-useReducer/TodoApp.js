import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';


import './styles.css';
import useForm from '../../hooks/useForm';


/* const init = () => {

  return JSON.parse(localStorage.getItem('todos')) || [];

  /*  return [{
     id: new Date().getTime(),
     desc: 'Aprender React',
     done: false
   }]; 
}*/

const initialState = [{
  id: new Date().getTime(),
  desc:'Aprender React',
  done:false
}];

const handleSumbit = (e) => {
  e.preventDefault();
}
export const TodoApp = () => {

  const [todos] = useReducer(todoReducer, initialState);

  console.log(todos);

  return (
    <div>
      <h1> TodoApp ( {todos.length} ) </h1>
      <hr />

      <div className='row'>

        <div className='col-7'>
          <ol className='list-group list-group-flush'>
            {
              todos.map((todo, i) => {
                <li
                  key={todo.id}
                  className='list-group-item'>
                  <p className='text-center'> {i + 1}. {todo.desc}</p>
                  <button className='btn btn-danger'> Borrar </button>
                </li>
              })
            }
          </ol>
        </div>

        <div className='col-5'> 
          <h4> Agregar Todo </h4> 
          <hr />
            <form onSubmit={ handleSumbit }>

              <input 
                type='text'
                name='description'
                placeholder='Aprender...'
                autoComplete='off'
                className='form-control'/>

                <button 
                  className='btn btn-outline-primary mt-1 btn-block'
                  type='submit'> 
                    Agregar 
                </button>
            </form>
        </div>
      </div>
    </div>
  )

}

