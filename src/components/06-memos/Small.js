import React from 'react'


/*memo hace que el componente no se renderize otra vez si el valor de las props son las mismas, en este caso el value del counter
  si no, usa la versión memorizada cuando tenga que redibujar algo*/
export const Small = React.memo(({ value }) => {

    console.log('Me volvi a llamar :C');

    return (
        <small> { value } </small>
    )
});
