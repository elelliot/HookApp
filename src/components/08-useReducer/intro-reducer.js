
const initialState = [{
    id: 1,
    todo: 'Comprar Pan',
    done: false
}];

const todoReducer = ( state = initialState, action ) => {
    
    if( action?.type === 'agregar' ){ //si hay un tipo, leelo, si no no hagas nada (básicamente evitamos que crashee)
        console.log( action.type );
        return [...state, action.payload]; //no usemos el push en react por que mutamos el objeto
    }
       
    return state;
}


let todos = todoReducer();


const newTodo = {
    id: 2,
    todo: 'Comprar Leche',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo

}


todos = todoReducer( todos, agregarTodoAction );


console.log(todos);