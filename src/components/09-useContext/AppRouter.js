import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

  import { NavBar } from './NavBar';
  import { HomeScreen } from './HomeScreen';
  import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <div className="container">

                    {/* Esto es con react-router-dom v5, esto no funciona para la 6 */}
                    <Switch>
                        <Route exact path="/" component ={ HomeScreen }/>{/*Si una ruta es así con puro "/", te lleva al que cumpla ya que no es exacta la expresion regular, poner el exact para corregir eso */}

                        <Route exact path="/about" component ={ AboutScreen }/>{/*Disparamos el AboutScreen si el url termina con /about */ }
                        <Route exact path="/login" component ={ LoginScreen }/>
                        
                        {/*El Switch funciona como el condicional que conocemos, solo que los cases son el path del Router,
                        y cuando tenemos un caso que no coincide con ninguno, aplicamos un default (tal cual como un switch),
                        podemos hacerlo de 2 formas:
                        1- Usamos un route que no tiene path, y lo mandamos al componente que queremos
                        2- El Redirect redirecciona al path que eliges (default) en caso de que el url no coincida con ningun path */}
                        {/* <Route component = { HomeScreen } /> */}
                        <Redirect to ="/" />

                    </Switch>

                </div>


            </div>
        </Router>
    )
}
