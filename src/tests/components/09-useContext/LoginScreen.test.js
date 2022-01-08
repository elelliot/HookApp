import { mount } from "enzyme";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";


describe('Pruebas en <LoginScreen />', () => {

    

    //Declaramos el mock de la función
    const setUser = jest.fn();


    //Montamos el component
    const wrapper = mount( 
        <UserContext.Provider value={{
            setUser      
        }}>
            <LoginScreen />
        </UserContext.Provider>
     );



    test('Debe mostrarse bien', () => {
        //Snapshot
        expect( wrapper ).toMatchSnapshot();
    });


    test('Debe ejecutar el setUser con el argumento esperado', () => {
        
        //Buscamos el elemento y simulamos el click
        // wrapper.find('button').simulate('click'); esta forma está bien pero...
        
        //es más directo llamar al onClick, y como es función debemos llamarlo con los parentesis
        wrapper.find('button').prop('onClick')();

        //Confirmar si se llama la funcion...
        // expect( setUser ).toHaveBeenCalledTimes(1);

        //...con los args
        expect( setUser ).toHaveBeenCalledWith({
            id:123, name:'ElElliot'
        });

        
    });
    
    
    
})
