import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Deck from '../Deck/Deck';

function DeckOfCards({ title, items }) {

  return (
    <>
      <Deck title={title}>
        {items.map(({ _id, name, image }) => (
          <Card _id={_id} key={_id} title={name ? name : _id} image={image} content={name ? `${name} has ${_id}` : null}/>
        ))}
      </Deck>
    </>
  );
}

DeckOfCards.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string
  }))
};

export default DeckOfCards;




