import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeckOfCards from '../DeckOfCards/DeckOfCards';

export default class Characters extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
  };

  state = {
    page: 1,
    items: []
  };

  getCharacters = (count, page) => {
    const URL = 'https://hey-arnold-api.herokuapp.com/api/v1/characters';
    const url = `${URL}?perPage=${count || 10}&page=${page || 1}`;
    return fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ items: json }));
  }

  componentDidMount() {
    this.getCharacters(this.props.count, this.state.page);
  }

  componentDidUpdate(prevState) {
    if(prevState.items !== this.state.items) {
      this.getCharacters(this.props.count, this.state.page);
    }
  }

  handleClickNext = () => {
    this.setState(state => {
      return {
        page: state.page + 1
      };
    });
  }
  
  handleClickPrev = () => {
    this.setState(state => {
      return {
        page: state.page - 1
      };
    });
  }

  render() {

    return (
      <>
        <button onClick={this.handleClickNext}>NEXT PAGE!</button>
        <button onClick={this.handleClickPrev}>PREV PAGE!</button>
        <DeckOfCards title='Characters' items={this.state.items} />
      </>
    );
  }

}

