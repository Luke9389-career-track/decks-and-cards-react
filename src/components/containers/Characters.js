import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeckOfCards from '../DeckOfCards/DeckOfCards';

export default class Characters extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired
  };

  state = {
    items: []
  };

  getCharacters = (count, page) => {
    const URL = 'https://hey-arnold-api.herokuapp.com/api/v1/characters';
    const url = `${URL}?perPage=${count || 10}&page=${page || 1}`;
    return fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ items: json }));
  }

  componentDidMount(){
    this.getCharacters(this.props.count, 2);
  }
  
  render() {

    return (
      <>
        <DeckOfCards title='Characters' items={this.state.items} />
      </>
    );
  }

}

