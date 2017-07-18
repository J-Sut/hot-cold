import React from 'react';
import './hot-cold.css'

class GameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGameTemp: 35,
      currentGuess: null,
      pastGuesses: [],

    }
  }

  handleGuess(e) {
    e.preventDefault();
    console.log("handle Guess");

    let newStateArray = this.state.pastGuesses.slice();
    newStateArray.push('last guess');
    this.setState({pastGuesses: newStateArray});
  }


  render() {
    return (
      <form>
        <input type='number' placeholder="Enter your Guess" value={this.props.currentGuess}/> <br />
        <button onSubmit={this.handleGuess}>Guess</button>

        <p className='guessCount'> Guess #: {this.state.pastGuesses.length} </p>
      </form>
    )
  }
}

export default GameForm;
