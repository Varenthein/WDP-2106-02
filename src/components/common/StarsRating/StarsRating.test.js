import React from 'react';
import { shallow } from 'enzyme';
import StarsRating from './StarsRating';

describe('Component StarsRating', () => {
  it('should render without crashing', () => {
    const component = shallow(<StarsRating />);
    expect(component).toBeTruthy();
  });
});
