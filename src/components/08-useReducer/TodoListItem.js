import React from 'react'

export const TodoListItem = ({ todo, i, handleDelete, handleToggle }) => {
    return (
        <div>
            <li
                key = { todo.id }
                className= "list-group-item"
            > 
                <p 
                    className = { `${ todo.done && 'complete' }` /*si el todo.done es true, regresa la clase complete*/ }
                    onClick= {() => handleToggle( todo.id ) }
                > { i + 1 }. { todo.desc } </p>
                <button
                    className="btn btn-danger"
                    onClick={ () => handleDelete( todo.id, todo.desc ) }
                >
                    Borrar
                </button>
            </li>
        </div>
    )
}
