import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../App';

configure({ adapter: new Adapter() });
it('Render without crashing ', () => {
  shallow(<App />);
});
