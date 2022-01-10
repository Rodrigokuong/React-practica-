import React from 'react';
import ReactDOM from 'react-dom'
//import PrimeraApp from './PrimeraApp';
import './index.css';
import Counter from './Counter-App';
import CounterApp from './Counter-App';

// esto ya es jsx y se utiliza react por eso debemos de importar react 


const divRoot = document.querySelector('#root');
//para poder renderizar el html tambien debemos de importar el reactdom 
//creamos una constante 'divRoot' que contiene a #root (se encunetra en el html)
//se escribe con '#root' porque lo buscamos por su " id "

ReactDOM.render( <CounterApp valor= {0}/> , divRoot );

//esto nos permite renderizar, mostrar algo en pantalla 
//primero va la variable que queremos mostrar y luego donde 
//es decir ('saludo'(variable), 'divroot'(donde))