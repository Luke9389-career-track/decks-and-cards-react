import React from 'react';
import PropTypes from 'prop-types';

function Deck({ title, children }) {

  return (
    <section>
      <header>
        <h2>{title}</h2>
      </header>
      {children}
    </section>
  );
}

Deck.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Deck;
