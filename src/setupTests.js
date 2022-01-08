import Enzyme from 'enzyme';//Enzyme
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';//Enzyme 
import {createSerializer} from 'enzyme-to-json';//...to Json

Enzyme.configure({ adapter: new Adapter() });//Enzyme
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));//...to Json