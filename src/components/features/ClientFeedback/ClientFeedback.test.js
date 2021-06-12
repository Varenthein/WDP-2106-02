import React from 'react';
import { shallow } from 'enzyme';
import ClientFeedback from './ClientFeedback';

describe('Component ClientFeedback', () => {
  it('should render without crashing', () => {
    const component = shallow(<ClientFeedback />);
    expect(component).toBeTruthy();
  });
});
