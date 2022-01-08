import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCords] = useState( {x: 0, y: 0} );
    const { x, y } = coords;


    
    useEffect(() => {
        // console.log('Componente Montado'); //en cuanto se use el component

        const mouseMove = (e) => {

             const coords = {x: e.x, y: e.y };
             setCords( coords )

        }

        /*cada que el componente se muestre, este evento se dispara, por tanto hay duplicidad y esto puede consumir bastante
        memoria, por lo que debemos limpiarlo*/
        window.addEventListener('mousemove', mouseMove );

        return () => {
            // en cuanto el componente no se usa, se ejecuta esta limpieza
            // console.log('Componente Desmontado');

            window.removeEventListener('mousemove', mouseMove );//limpiamos el eventlistener y se evita la duplicidad del mismo
        }
    }, [])
    
    
    return (
        <div>
            <h3>Eres la Polla Hermano</h3>
            <p>
                x:{ x } y:{ y }
            </p>
        </div>
    )
}
