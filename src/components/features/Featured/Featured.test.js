import React from 'react';
import { shallow } from 'enzyme';
import Featured from './Featured';

describe('Component Featured', () => {
  it('should render without crashing', () => {
    const component = shallow(<Featured />);
    expect(component).toBeTruthy();
  });
});
