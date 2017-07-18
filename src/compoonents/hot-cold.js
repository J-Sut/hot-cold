import React from 'react';
import './hot-cold.css'
import GameForm from './game-form';

class Game extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentGameTemp: 35,
      currentGuess: null,
      pastGuesses: [],
    }
  }

  handleGuess(e) {
    let currentGuess = this.props.currentGuess;
    console.log(currentGuess);

    let newStateArray = this.state.pastGuesses.slice();
    newStateArray.push('new value');
    this.setState({pastGuesses: newStateArray});
  }

  render() {
    return (
      <div className="mainGame">
        <h3>Make your Guess!</h3>
        <section className='gameControls'>
        <GameForm />
        
        </section>
        <div className='pastGuesses'>Past Guesses</div>

      </div>
    )
  }
}

export default Game;
