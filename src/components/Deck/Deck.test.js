import React from 'react';
import { shallow } from 'enzyme';
import Deck from './Deck';

describe('Deck component', () => {
  it('renders Deck', () => {
    const wrapper = shallow(<Deck title='Test'>
      <p key={1}></p>
      <p key={2}></p>
    </Deck>);
    expect(wrapper).toMatchSnapshot();
  });
});
