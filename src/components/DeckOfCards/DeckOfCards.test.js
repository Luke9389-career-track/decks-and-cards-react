import React from 'react';
import { shallow } from 'enzyme';
import DeckOfCards from './DeckOfCards';

describe('DeckOfCards component', () => {
  it('renders DeckOfCards', () => {
    const wrapper = shallow(<DeckOfCards title='Test' items={[{ stuff: 'stuff' }, { stuff: 'stuff' }, { stuff: 'stuff' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
