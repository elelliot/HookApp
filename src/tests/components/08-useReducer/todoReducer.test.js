import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";



describe('Pruebas en todoReducer', () => {
    
    
    test('Debe retornar el estado por defecto', () => {
        
        //state, action
        const state = todoReducer( demoTodos, {});

        // console.log(state);
        expect( state ).toEqual( demoTodos );
    });


    test('Debe agregar un TODO', () => {
        
        const newTodo = {
            id:3,
            desc:'Valorant',
            done:false,
        };
        
        const action = {
            type: 'add',
            payload: newTodo
        };

        //state, action
        const state = todoReducer(demoTodos, action);
        // console.log(state);

        //Verificamos que sean iguales (cualquiera de las 2 formas es igual en este caso)
        expect( state.length ).toBe(3);
        expect( state ).toEqual( [...demoTodos, newTodo] );
    });


    test('Debe de borrar el toDo', () => {
        
        //action.payload = ID del toDo
        const action = {
            type: 'delete',
            payload: 1
        };

        //Borramos el todo 1
        const state = todoReducer(demoTodos, action);
        
        //Confirmamos y hacemos aserción
        console.log(state);
        expect( state.length ).toBe(1);

        //para ser más especificos
        expect( state ).toEqual([ demoTodos[1] ]);



    });

    test('Debe de hacer el toggle del toDo', () => {
        
        //action.payload = ID del toDo
        const action = {
            type: 'toggle',
            payload: 1
        };

        //Cambiamos el done del todo 1
        const state = todoReducer(demoTodos, action);
        
        //ahora debe ser true
        console.log(state);

        expect( state[0].done).toEqual( true );

        // console.log(state[1], demoTodos[1] )
        // expect( state[1] ).toEqual(  demoTodos[1]  );


    });
    
    
})
