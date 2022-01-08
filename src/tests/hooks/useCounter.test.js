import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
    

    test('Debe de retornar valores por defecto ', () => {
        
        //renderHook recibe un callback y el hook que quiero evaluar
        //no le mando valor, así que por defecto es 10, como se indica en el hook
        const { result } = renderHook( () => useCounter() );

        //console.log( result.current );//mostramos las funciones que esperamos solo para ilustrar

        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');
    })


    test('Debe de tener el counter en 100 ', () => {
        
        const { result } = renderHook( () => useCounter(100) );

        expect( result.current.counter ).toBe(100);
    })

    test('Debe incrementar el counter en 1 ', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        act( () => {// act es para ejecutar las funciones
            increment();//incrementamos en 1
        });

        const { counter } = result.current;
        expect( counter ).toBe(101);
    })
    

    test('Debe restar el counter en 1 ', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act( () => {
            decrement();//restamos 1
        });

        const { counter } = result.current;
        expect( counter ).toBe(99);
    })

    test('Debe reiniciar al valor por defecto (100) ', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { increment,reset } = result.current;

        act( () => {
            increment();
            reset();
        });

        const { counter } = result.current;
        expect( counter ).toBe(100);
    })
})
