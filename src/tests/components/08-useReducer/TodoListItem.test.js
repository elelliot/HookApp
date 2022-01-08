import { shallow } from "enzyme"
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";


describe('Pruebas en <TodoListItem />', () => {
    //solo para saber si son llamadas
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( 
        <TodoListItem
            todo = { demoTodos[0] }
            i ={ 0 }
            handleDelete = { handleDelete } 
            handleToggle = { handleToggle }
        /> 
        );


    test('Debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });


    test('Debe llamar la función handleDelete', () => {
        //Para que el handleDelete sea llamado, se debe dar click al botón delete
        wrapper.find('button').simulate('click');

        //handleDelete debe ser llamado
        //expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id);
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id, demoTodos[0].desc );

    });
    

    test('Debe llamar la función handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );

    });

    test('Debe mostrar el texto correctamente del <p>', async () => {
        //contenido del parrafo ("indice"+"."+ " todo")
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(`1. ${ demoTodos[0].desc }`);
    });

    test('Debe tener class= complete si el todo.done= TRUE ', async () => {
        //Asignamos un toDo por defecto y le damos el valor true
        const todo= demoTodos[0];
        todo.done= true;
    

        //solo manejaremos el todo
        const wrapper = shallow( 
            <TodoListItem
                todo = { todo }
            /> 
        );
        //Para ver que el class = complete
        console.log( wrapper.html() );
        expect( wrapper.find('p').hasClass('complete') ).toBe( true );//o toBeTruthy
    });
    
    
})
