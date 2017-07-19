import React from 'react';
import './hot-cold.css'

class Game extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const guesses = this.props.pastGuesses.map((guess, index) =>
      <li key={index}> {guess} </li>
    );

    return (

      <div className="mainGame">
        <h3>Make your Guess!</h3>
        <section className='gameControls'>
          <input type='number' placeholder="Enter your Guess"
          onChange={this.props.setGuess}
          value={this.props.currentGuess}/> <br />
          <button onClick={this.props.handleGuess}>Guess</button>
          <p className='guessCount'> Guess #: {this.props.pastGuesses.length} </p>
        </section>
        <div className='pastGuesses'>
          {guesses} <br /> <br />
        </div>
        <section id='feedback'> {this.props.feedback} </section>
      </div>
    )
  }
}

export default Game;
