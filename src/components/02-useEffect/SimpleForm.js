import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {


    const  [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log('Hey');
    }, []);

    useEffect(() => {
        // console.log('formState Cambió');
    }, [formState]);

    useEffect(() => {
        // console.log('Email cambio');
    }, [email]);



    const handleInputChange = ({ target }) => {
        
        setformState({
            /*con el spread filleamos el name y el email en blanco, para que después el que cambia, sobreescriba el valor vacío
            si lo ponemos al reves, el campo alterado se escribe y después el spread lo sobreescribiría con el valor vacío*/

            ...formState, //filleamos el campo que no está siendo cambiado
            [ target.name ]: target.value //Las computed properties permiten usar una expresion en corchetes y el resultado será el nombre de la propiedad 
            
        });
    }



    // const handleInputChange = (e) => {
        
        
    //     console.log([ e.target.name ]);
    // }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className= "form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange= { handleInputChange }
                />
            </div>


            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className= "form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange= { handleInputChange }
                />
            </div>





            { (name==='123') && <Message /> /*si el nombre es 123 se muestra el mensaje*/ }






        </>
    )
}
