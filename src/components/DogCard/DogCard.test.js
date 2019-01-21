import React from 'react';
import ReactDOM from 'react-dom';
import DogCard from './index.js';
import { shallow } from 'enzyme';

describe('DogCard', () => {
  const dog = {title: 'Much Doggo, Many Bork', image: 'path/to/much/doggo/image', text: 'Doggo doggo, bork bork bork'}

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DogCard dog={dog}/> ,div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<DogCard dog={dog}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
