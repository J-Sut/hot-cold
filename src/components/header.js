import React from 'react';

export default function Header(props) {
  console.log(props);
  return(
    <div className="App-header">
      <p>What?</p>
      <p onClick={props.newGame}>+New Game</p>
    </div>

  )
}
