import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";

//El mock es básicamente un Fake deployment del hook en este archivo, los argumentos nosotros los inicialisamos
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");




describe('Pruebas en <MultipleCustomHooks /> ', () => {
    

    //Ya que no se va cambiar el valor, lo ponemos aquí merengue
    
    /*No sirve sin el beforeEach, pero al profe le sale, perhaps por las versiones de react y enzyme diferentes?, idk
      */
    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
    })



    test('Debe mostrarse correctamente', () => {

        //Default data para useFetch ya que estamos simulando el hook en uso con el mock
        useFetch.mockReturnValue({
            data:null,
            loading:true,
            error:null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect( wrapper ).toMatchSnapshot();
        
    });


    test('Debe mostrar la info', () => {
       

        //Inicialisamos con info que nosotros creamos
        useFetch.mockReturnValue({
            data:[{
                author: 'ElElliot',
                quote: 'This mofo wildin'
            }],
            loading:false,
            error:null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        //Si hay info no debería haber alert
        expect( wrapper.find('.alert').exists() ).toBe( false );
        //Que el texto de la clase .mb-0 (es un parrafo) sea lo que yo puse en el quote del mockReturn
        expect( wrapper.find('.mb-0').text().trim() ).toBe( 'This mofo wildin' );
        //Que el autor sea el correcto, ahora por tag en vez de seleccionar por clase
        expect( wrapper.find('footer').text().trim() ).toBe( 'ElElliot' );


        // console.log( wrapper.html() );
    });
    
    
})
