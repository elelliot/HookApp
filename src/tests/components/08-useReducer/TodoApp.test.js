import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme"
import { TodoApp } from "../../../components/08-useReducer/TodoApp"
import { demoTodos } from "../../fixtures/demoTodos";



describe('Pruebas en <TodoApp />', () => {
    
    const wrapper = shallow( <TodoApp /> );

    //Mock de local Storage, solo que el set item que se haya llamado.
    Storage.prototype.setItem = jest.fn( ()=>{} );





    test('Debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });




    test('Debe de agregar un todo', () => {
        
        //Shallow es más general, mount es para más información de los hijos y el contexto en que está corriendo
        const wrapper = mount( <TodoApp/> );

        //como lo hemos montado y andamos haciendo un cambio necesitamos ponerlo en un act()
        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );
        });


        //Que el texto del counter sea 2, # de elementos que agregamos
        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 2 )');

        //Que el localstorage.setItem se haya llamado por cada elemento agregado, osea 2
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
        // expect( localStorage.setItem ).toHaveBeenCalledWith({});//Podría usarse el json.stringify()) y hacer la comparacion
    });




    
    test('Debe eliminar un todo', () => {
        

        //Agregamos primero
        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
        //Ahora eliminamos
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );

        
        //Confirmamos
        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 0 )');

        //Por alguna razón, la Actividad está undefined, pero el id si se ve bien , why?
    })
    
    
    
})
