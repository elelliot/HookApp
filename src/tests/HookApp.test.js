import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { HookApp } from "../HookApp";

describe('Pruebas en <HookApp />', () => {
    

    test('Que se muestre bien el componente ', () => {
        
        const wrapper = shallow( <HookApp /> );
        expect( wrapper ).toMatchSnapshot();
    })
    
})
