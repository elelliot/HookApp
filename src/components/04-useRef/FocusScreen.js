import React, { useRef } from 'react'
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    
    const handleClick = () => {
        //es otra forma para hacerlo usando hooks, nos da la referencia al input o algun otro elemento HTML
        inputRef.current.select();
        console.log(inputRef);
        // document.querySelector('input').focus(); select o focus
    }


    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref= { inputRef }
                className="form-control"
                placeholder="Su nombre"
            />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick= { handleClick }
            >
                Focus
            </button>
        </div>
    )
}
