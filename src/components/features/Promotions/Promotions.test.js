import React from 'react';
import { shallow } from 'enzyme';
import Promotions from './Promotions';

const promotions = [
  {
    id: 'promotion-1',
    image:
      'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    alt: 'promo-1',
    text: 'GUEST ROOM',
    text_bold: 'SOFA',
    text_percent: '-20% ',
  },
  {
    id: 'promotion-2',
    image:
      'https://images.pexels.com/photos/6758350/pexels-photo-6758350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'promo-2',
  },
  {
    id: 'promotion-3',
    image:
      'https://images.pexels.com/photos/6446677/pexels-photo-6446677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'promo-3',
  },
];

describe('Component Promotions', () => {
  it('should render without crashing', () => {
    const component = shallow(<Promotions promotions={promotions} />);
    expect(component).toBeTruthy();
  });
});
