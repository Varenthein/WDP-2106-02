import React from 'react';
import { shallow } from 'enzyme';
import StickyBar from './StickyBar';

describe('Component StickyBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<StickyBar />);
    expect(component).toBeTruthy();
  });
});
