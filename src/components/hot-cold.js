import React from 'react';
import './hot-cold.css'

class Game extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentGameTemp: 0,
      currentGuess: 0,
      pastGuesses: [],
      feedback: 'this is the feedback spot'
    }
  }



  componentDidMount() {
    let newTemp = Math.floor(Math.random()*100)+1;
    this.setState({currentGameTemp:newTemp})
  }


  handleGuess(e) {
    let newStateArray = this.state.pastGuesses.slice();
    newStateArray.push(this.state.currentGuess);
    this.setState({pastGuesses: newStateArray});

    let thisGuess = this.state.currentGuess;
    console.log('thisguess: ', thisGuess)
    console.log("Game Temp: ", this.state.currentGameTemp);
    console.log("Guess temp: ", this.state.currentGuess);

    if (this.state.currentGuess == this.state.currentGameTemp) {
      this.setState({feedback: 'You got it!'});
    } else if (this.state.currentGuess < this.state.currentGameTemp){
      this.setState({feedback: 'Too Cold!'});

    } else if (this.state.currentGuess > this.state.currentGameTemp){
      this.setState({feedback: 'Too Hot!'});

    }

  }



  setGuess(e){
    this.setState({currentGuess: e.target.value})
  }

  render() {
    const guesses = this.state.pastGuesses.map((guess, index) =>
      <li key={index}> {guess} </li>
    );

    return (

      <div className="mainGame">
        <h3>Make your Guess!</h3>
        <section className='gameControls'>
          <input type='number' placeholder="Enter your Guess"
          onChange={this.setGuess.bind(this)}
          value={this.state.currentGuess}/> <br />
          <button onClick={this.handleGuess.bind(this)}>Guess</button>

          <p className='guessCount'> Guess #: {this.state.pastGuesses.length} </p>
        </section>
        <div className='pastGuesses'>
          {guesses} <br /> <br />
        </div>
        <section id='feedback'> {this.state.feedback} </section>
      </div>
    )
  }
}

export default Game;
