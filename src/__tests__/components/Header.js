import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../components/Header';

configure({ adapter: new Adapter() });
it('works', () => {
  const component = shallow(<Header />);
  expect(component.text()).toEqual('Desde Header');
});
