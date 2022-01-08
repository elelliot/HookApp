import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }];



// Si se da refresh en el navegador, la funcion init lee el local storage y establece el estado inicial del reducer

// cualquier cosa que retorne la funcion init, es el initialState
const init= () => {
    
    //localStorage.getItem regresa la información null si un objeto no existe
    //JSON.parse de algo que es null, regresa null, si no , lo regresa formateado

    //Entonces si existen todos regresalos como arreglo y si es null, regresar un arreglo vacío que será el estado inicial

    return JSON.parse(localStorage.getItem('todos')) || [];//

}

export const TodoApp = () => {


    //dispatch es una funcion que le mandan una accion
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    
    //El efecto graba en el localStorage cualquier cambio que suceda en los todos, agregar edite elimine
    useEffect( () => {
        
        //Solo se pueden grabar Strings en el local storage, por tanto lo formateamos a JSON el objeto
        // Se guarda en un formato Key, Value
        localStorage.setItem('todos', JSON.stringify( todos ) )
    }, [todos] );

    // console.log( description );


    const handleDelete = ( todoId, todoDesc ) => {
        console.log(`Actividad: ${todoDesc}\nId: ${todoId}\nELIMINADO`);

        const action = {
            type: 'delete',
            payload: todoId
        }
        
        dispatch( action );
    }


    const handleToggle = ( todoId ) => {

        dispatch( {
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = ( newTodo ) => {

        dispatch( {
            type: 'add',
            payload: newTodo
        });

    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr />

            <div className= "row">

                <div className="col-7">

                    <TodoList 
                        todos = { todos } 
                        handleDelete = { handleDelete } 
                        handleToggle= { handleToggle } 
                    />

                </div>


                <div className="col-5">
                    
                    <TodoAdd 
                        handleAddTodo = { handleAddTodo } 
                    />

                </div>

            </div>
        </div>
    )
}
