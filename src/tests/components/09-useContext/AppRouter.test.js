import { mount } from "enzyme"
import { AppRouter } from "../../../components/09-useContext/AppRouter"
import { UserContext } from "../../../components/09-useContext/UserContext";


describe('Pruebas en <AppRouter />', () => {
    
    const user = {
        id:1,
        name: 'Elliot'
    }

    const wrapper = mount( 
        <UserContext.Provider value= {{
            user
        }}>
            <AppRouter />
            
        </UserContext.Provider>
    );

    test('Debe de mostrarse correctamente ', () => {
        //Mi Snapshot da solo <a> y faltan <Link> y <LinkAnchor> del video 160 , no hay solución por ahora. 
        
        //necesitamos el user, y como se maneja con el context, también lo necesitaremos (arriba lo ponemos)
        //el Snapshot será con el user que le demos aquí
        expect( wrapper ).toMatchSnapshot();


        
    });
    
})
