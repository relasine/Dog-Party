import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './index.js';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should match the snapshot', () => {
  const wrapper = shallow(<Footer />);

  expect(wrapper).toMatchSnapshot();
});

it('should have four links', () => {
  const wrapper = mount(<Footer />);

  expect(wrapper.find('a')).toHaveLength(4);
});

it('should have four images', () => {
  const wrapper = mount(<Footer />);

  expect(wrapper.find('img')).toHaveLength(4);
});