import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';


export const MultipleCustomHooks = () => {


    const { counter,increment } = useCounter(1);

    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    // console.log( state );

    //!!data (si lo que se evalua es true, partiendo de null= null, !null= true !!null= false)  
    //&& ejecuta y retorna lo siguiente (data[0])
    const { author , quote } = !!data && data[0];
    

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {//if
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    //else
                    (
                        <blockquote className= "blockquote text-right">
                            <p className="mb-0"> { quote } </p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>
                    )
            }
            {/* Por alguna razón el Snapshot no captura el onClick, pero si lo pongo dentro del else como quiero, ni
            siquiera me detecta el boton en el Snapshot..whyyyy*/}
                <button 
                    className="btn btn-primary"
                    onClick ={ increment }    
                >
                    Next Quote
                </button>

        </div>
    )
}
