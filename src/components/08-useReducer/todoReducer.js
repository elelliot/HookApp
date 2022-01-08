

export const todoReducer = ( state = [] , action ) => {

    switch ( action.type ) {
        case 'add':
            return [...state , action.payload ];

        case 'delete':
            return state.filter( todo => todo.id !== action.payload );

        case 'toggle':
            return state.map( todo => 
                // forma con operador ternario, debe regresar 2 valores
                // extraemos el valor del todo que coincida con la condicion y cambiamos el done
                // y en el caso que sean iguales entonces no hago nada
                ( todo.id === action.payload )
                    ? {...todo, done: !todo.done }
                    : todo    
            )    


        // forma larga
        // return state.map( todo => {

            //     if( todo.id === action.payload ){
            //         return {
            //             ...todo,
            //             done: !todo.done
            //         }
            //     } else {
            //         return todo;
            //     }
            // })

        default:
            return state;
    }
}