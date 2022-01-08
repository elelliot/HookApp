import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
    
    const [ { description }, handleInputChange, reset ] = useForm({
        description:'',
    });


    //Agregamos un todo
    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim().length <= 1 ) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false 
        };

        handleAddTodo( newTodo );

        console.log(`Se agrego la actividad ${ newTodo.desc }\nCon id: ${ newTodo.id } `);
        reset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={ handleSubmit }>

                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender..."
                    autoComplete="off"
                    value={ description }
                    onChange = { handleInputChange }
                />
                
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>

            </form>
        </>
    )
}
