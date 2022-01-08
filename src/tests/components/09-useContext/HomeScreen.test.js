import { mount } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";



describe('Pruebas en <HomeScreen />', () => {
    

    const user = {
        name:'ElElliot',
        email: 'elCorreo@gmail.varita'
    };

    //Ya que el shallow solo renderiza el componente padre, solo va dar el userContext..., pero queremos el homescreen, usemos mount
    const wrapper = mount( 
        
        //El Main App dice como usamos el context
        <UserContext.Provider value={{
            user        
        }}>
            <HomeScreen /> 
        </UserContext.Provider>
        
        );

    test('Debe mostrar el componente correctamente', () => {
       
        expect( wrapper ).toMatchSnapshot();
    });
    
})
