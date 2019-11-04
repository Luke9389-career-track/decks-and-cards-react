import React from 'react';
import Characters from './containers/Characters';
import Gifs from './containers/Gifs';


export default function App() {
  return (
    <>
      <Characters count={15} />
      <Gifs count={3} />
    </>
  );
}
