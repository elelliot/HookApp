import React from 'react'
import PropTypes from 'prop-types';
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <div>
            <ul className="list-group list-group-flush">
                {
                    todos.map( (todo, i) => (
                        
                        <TodoListItem 
                            key = { todo.id }
                            todo = { todo }
                            i = { i }
                            handleDelete= { handleDelete } 
                            handleToggle= { handleToggle } 
                        />
                    ))
                }
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}
