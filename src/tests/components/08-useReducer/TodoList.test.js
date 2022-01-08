import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList"
import { demoTodos } from "../../fixtures/demoTodos"


describe('Pruebas en <TodoList />', () => {
    

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( 
        <TodoList 
            todos = { demoTodos }
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
        /> )



    test('Debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de tener 2 <TodoListItem />', () => {
        
        // console.log( wrapper.html() );
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );


        //si pongo toBe estaría compararando con el operador = dos objetos diferentes, y son iguales pero apuntan a espacios de memoria diferentes
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any( Function ) );
    });
    
})
