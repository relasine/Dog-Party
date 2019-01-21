import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './index.js';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should match the snapshot', () => {
  const wrapper = shallow(<Footer />);

  expect(wrapper).toMatchSnapshot();
});