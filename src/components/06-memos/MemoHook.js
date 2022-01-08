import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter( 500 );
    const [show, setShow] = useState(true);

    

//Si el counter cambia, memoriza el resultado para que cuando se cambie otra cosa, se use la version memorizada de la funcion
/* (si hacemos cambios con el boton
show hide, no se ejecutarán de nuevo las 500 impresiones gracias al useMemo ya que lo memoriza, y se dispara al cambiar el counter)*/
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);//callback, dependencia
    

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small> </h3>
            <hr />

            <p>{ memoProcesoPesado } </p>

            <button 
                className="btn btn-primary"
                onClick= { increment }
            >
                +1
            </button>

            <button
                className= "btn btn-outline-primary ml-3"
                onClick= { () => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
