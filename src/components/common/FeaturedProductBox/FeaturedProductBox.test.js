import React from 'react';
import { shallow } from 'enzyme';
import FeaturedProductBox from './FeaturedProductBox';

describe('Component FeaturedProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<FeaturedProductBox />);
    expect(component).toBeTruthy();
  });
});
