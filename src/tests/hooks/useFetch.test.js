import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from "../../hooks/useFetch"



describe('Pruebas en useFetch', () => {
    


    test('Debe retornar la info por defecto', () => {
        
        //simulamos la petición http (ver Layout en carpeta 05-useLayoutEffect para más info)
        const { result } = renderHook( () => useFetch( 'https://www.breakingbadapi.com/api/quotes/1' ) );


        const { data, loading, error } = result.current;
        //La info por defecto, antes de hacer la petición sería , sin data, cargando = true y sin error. ya que es async y no se declaró
        expect( data ).toBe( null );
        expect( loading ).toBe( true );
        expect( error ).toBe( null );

    });


    test('Debe de tener la info deseada, loading y error en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch( 'https://www.breakingbadapi.com/api/quotes/1' ) );
        //Esperamos primero el update por que sin eso, al extraer los values serían los default
        await waitForNextUpdate();

        //Extraemos los values después del update
        const { data, loading, error } = result.current;
        
        //Solo pa verlos
        //console.log( `La info = \n`, data, `\n Cargando = ${ loading }, Error = ${error}`);

        //data es un array de objetos
        expect( data.length ).toBe( 1 );

        expect( loading ).toBe( false );
        expect( error ).toBe( null );
    });


    test('Debe manejar el error', async() => {
        
        //cambiamos api a apid para que de error
        const { result, waitForNextUpdate } = renderHook( () => useFetch( 'https://reqres.in/apid/users?page=2' ) );
        await waitForNextUpdate();

        const { data, loading, error } = result.current;
        
        expect( data ).toBe( null );
        expect( loading ).toBe( false );
        expect( error ).toBe( 'No se pudo cargar la info' );
    })
    
    
})
