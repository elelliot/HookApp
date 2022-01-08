import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
    
    const [user, setUser] = useState({});
    
    return (
        <UserContext.Provider value = {{ 
            user,
            setUser,
            }}>
            {/*Los Higher Order components son aquellos que tienen componentes hijos,
            todos los hijos del UserContext puede recibir el valor de user o cualquier otro valor/función
            (no se para que se pone .Provider, pero así es) */ }

            <AppRouter />

        </UserContext.Provider>
    )
}
