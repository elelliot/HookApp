import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
    
    const initialForm = {
        name:'ElElliot',
        email:'ElElliot@gmail.com'
    };

    test('Debe regresar un formulario por defecto ', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );

        //mostramos los valores del form y las funciones
        //console.log( result.current );

        //result.current es un arreglo por tanto desestructuramos sus valores
        const [ formValues, handleInputChange, reset ] = result.current;

        
        expect( formValues ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
    });



    test('Debe de cambiar el valor del formulario (cambiar name)', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ ,handleInputChange ] = result.current;

        //Simulamos el evento cuando el input hace la modificacion
        act( () => {
            handleInputChange({
                target: {
                    name:'name',
                    value:'Eli'
                }
            });
        });

        const [ formValues ] = result.current;
        //console.log(formValues);

        //Que sea igual a 'Eli' pero que los otros valores sigan igual
        expect( formValues ).toEqual( {...initialForm, name: 'Eli'});
    });
    

    test('Debe reestablecer el formulario con reset ', () => {
        

        const { result } = renderHook( () => useForm(initialForm) );
        const [ ,handleInputChange,reset ] = result.current;

        act( () => {
            
            //Cambiamos el value
            handleInputChange({
                target: {
                    name:'name',
                    value:'Eli'
                }
            });
            
            //reseteamos los values
            reset();

        });

        const [ formValues ] = result.current;
        //Debería ser igual al initialForm
        expect( formValues ).toEqual( initialForm );

        

    })
    
    
})
