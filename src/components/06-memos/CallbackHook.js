import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {


    const [counter, setCounter] = useState( 10 );

    // const increment = () => {
    //     setCounter( counter + 1);
    // }



    /*
    
    useCallback se usa para mandar una función a un componente memorizado,si no se usa, siempre se va generar una nueva version
    en cada renderizado del componente padre
    
    el useCallback regresa una version memorizada de la funcion que sirve para mandar como argumento a otros componentes.
    React sabe que la funcion no va cambiar si la dependencia no ha cambiado (setCounter) 
    
    esto no funcionará ya que tenemos la dependencia de counter,recordar que recibimos el argumento en setCounter, así que en lugar
    de manejarlo directamente como counter, recibimos el argumento y lo nombramos (c) y eliminamos la dependencia.

    También le damos un argumento "num" desde la funcion en el ShowIncrement 
    */ 
    const increment = useCallback( ( num ) => {
        setCounter( c => c + num );
    }, [ setCounter ] );

    /*El otro caso de uso para useCallback sería para cuando el useEffect tiene como dependencia una función, ya que el efecto se
    dispararia cada que se renderice o se vuelva a construir la funcion*/

    useEffect(() => {
        
    }, [increment] )

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment } />
        </div>
    )
}
