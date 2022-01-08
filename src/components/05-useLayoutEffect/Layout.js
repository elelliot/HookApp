// import React from 'react';
import { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';


export const Layout = () => {


    const { counter,increment } = useCounter(1);
    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    const { quote } = !!data && data[0];
    

    const pTag = useRef();
    const [boxSize, setboxSize] = useState({})

    //se dispara después de las mutaciones del DOM pero es identico al useEffect, (Pref. useEffect)
    useLayoutEffect(() => {
        
        setboxSize( pTag.current.getBoundingClientRect() );

    }, [quote])





    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />
 
            <blockquote className= "blockquote text-right">
                <p 
                    className="mb-0"
                    ref= { pTag }    
                > 
                    { quote } 
                </p>
            </blockquote>
            
            <pre>
                { JSON.stringify( boxSize, null, 3) }
            </pre>
            <button 
                className="btn btn-primary"
                onClick = { increment }    
            >
                Next Quote
            </button>

        </div>
                
    )
}
