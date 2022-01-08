import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const {user, setUser} = useContext(UserContext);

    const handleClick = () => {
        setUser({}); //purgamos la informacion
    }

    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3)/*Visualizamos la info*/ }
            </pre>

            <button 
                className="btn btn-warning"
                onClick={ handleClick }
            >
                Logout
            </button>
        </div>
    )
}
