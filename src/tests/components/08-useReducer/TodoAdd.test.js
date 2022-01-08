import { shallow } from "enzyme"
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd"


describe('Pruebas en <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow( 
        <TodoAdd
            handleAddTodo = { handleAddTodo }
        /> 
    );


    test('Debe mostrarse correctamente ', () => {
       
        expect( wrapper ).toMatchSnapshot();
    });


    test('No debe de llamar handleAddTodo', () => {
        
        const formSubmit= wrapper.find('form').prop('onSubmit');
        // console.log(formSubmit);

        //Llamamos la función, pero da error por que debemos mandarle el preventDefault del event como argumento.
        formSubmit({ preventDefault(){} });

        //Que el handleAddTodo no se haya llamado
        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
    });


    test('Debe llamar la función handleAddTodo ', () => {
        
        
        const value = "React";
        //cambiamos el input
        wrapper.find('input').simulate('change',{
            target:{
                value,
                name: 'description'
            }
        });

        //Hacemos el submit
        const formSubmit= wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });



        expect( handleAddTodo ).toHaveBeenCalledTimes(1);

        // expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) );//{ } aún pasaría si el handleAddTodo está vacío
        
        //Los números del id siempre cambian por que está basado en la hora, por lo que podemos decir que solo queremos cualquier número
        expect( handleAddTodo ).toHaveBeenCalledWith( {
            id: expect.any(Number),
            desc: value,
            done: false
        });

        //Evaluamos los efectos del reset, no tal cual llamarlo directamente
        //El reset debe aplicarse después de que se mandó el submit, se puede borrar el reset() del TodoAdd para verificar
        //El reset debe borrar el value del input y dejarlo vacío
        expect( wrapper.find('input').prop('value')).toBe('');

    });
    
    
    
    
})
