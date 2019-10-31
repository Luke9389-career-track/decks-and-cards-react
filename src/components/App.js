import React from 'react';
import DeckOfCards from './DeckOfCards/DeckOfCards';
import { characters, gifs } from '../content.json';

export default function App() {
  return (
    <>
      <DeckOfCards title='Characters' items={characters} />
      <DeckOfCards title='Gifs' items={gifs} />
    </>
  );
}
