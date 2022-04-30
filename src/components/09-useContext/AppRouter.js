import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';


export const AppRouter = () => {
  return (
    <Router >
        <div>

            <NavBar />

          <div className='conteiner'>
            
            <Routes >

                <Route exact path='/about' element={ <AboutScreen />} />

                <Route exact path='/login' element={ <LoginScreen /> } />

                <Route exact path='/' element={ <HomeScreen /> } />
                
                <Route to='/' />

{/* Formas de solucionar la busqueda de un url si no existe la ruta <Route component={ HomeScreen } /> 
    Una seria dejar que evalue todas las posibilidades, en caso contrario que se direccione a un componente
  HomeScreen, caso contrario podriamos usar otro componente del DOM <Redirect to= '/' />* esto nos permite redireccionar al slash */}

            </Routes>
          </div>
        </div>
    </Router>
  )
}
