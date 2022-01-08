import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    const { user } = useContext(UserContext);//Recibimos el valor del UserContext que creamos, sería el value del MainApp.js el cual es un objeto, y lo desestructuramos
    // const just = useContext(UserContext);
    // console.log( just );
    console.log( user );

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3) }
            </pre>
        </div>
    )
}
