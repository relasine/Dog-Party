import React from 'react';
import ReactDOM from 'react-dom';
import DogsContainer from './index.js';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DogsContainer dogs={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should match the snapshot', () => {
  const wrapper = shallow(<DogsContainer dogs={[]}/>);

  expect(wrapper).toMatchSnapshot();
});