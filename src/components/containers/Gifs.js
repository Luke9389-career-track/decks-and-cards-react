import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Deck from '../Deck/Deck';

export default class Gifs extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired
  };

  state = {
    items: []
  };

  getGifs = (count) => {
    const url = `https://hey-arnold-api.herokuapp.com/api/v1/gifs/random?count=${count}`;
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ items: json });
        console.log(this.state);
      });
  }

  componentDidMount() {
    this.getGifs(this.props.count);
  }

  render() {

    return (
      <>
        <Deck title='Gifs'>
          {this.state.items.map(item => {
            return (<img key={item._id} src={item.gifLink} />);
          })}
        </Deck>
      </>
    );
  }

}

