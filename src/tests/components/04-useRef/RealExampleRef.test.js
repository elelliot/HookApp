import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";


describe('Pruebas en <RealExampleRef />', () => {
    
    const wrapper = shallow(<RealExampleRef />);

    test('Debe mostrarse correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot();
        
        //Por default, no se debe mostrar ese componente (debe ser false)
        console.log(wrapper.find('MultipleCustomHooks').exists());
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);

        
    });


    test('Debe de mostrar el componente <MultipleCustomHooks />', () => {
        
        
        wrapper.find('button').simulate('click');
        //después del click debe ser true
        console.log(wrapper.find('MultipleCustomHooks').exists());
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);
    });
    
    
})
