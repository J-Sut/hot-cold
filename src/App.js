import React, { Component } from 'react';
import './App.css';
import HotColdGame from './components/hot-cold';
import Header from './components/header'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGameTemp: 0,
      currentGuess: 0,
      pastGuesses: [],
      feedback: ''
    }
  }

  componentDidMount() {
    this.setNewGame()
  }

  componentDidUpdate(){
    console.log(this.state);
  }

  checkGuess() {
    if (this.state.currentGuess === this.state.currentGameTemp) {
      this.setState({feedback: 'You got it!'});
    } else if (this.state.currentGuess < this.state.currentGameTemp){
      this.setState({feedback: 'Too Cold'});
    } else if (this.state.currentGuess > this.state.currentGameTemp){
      this.setState({feedback: 'Too Hot'});
    }
  }

  handleGuess(e) {
    console.log(typeof(this.state.currentGuess));

    let newStateArray = this.state.pastGuesses.slice();
    newStateArray.push(this.state.currentGuess);
    this.setState({pastGuesses: newStateArray});

    this.checkGuess()
  }

  setGuess(e){
    this.setState({currentGuess: parseInt(e.target.value)})
  }

  setNewGame(){
    let newTemp = Math.floor(Math.random()*100)+1;

    this.setState({
      currentGameTemp: newTemp,
      currentGuess: 0,
      pastGuesses: [],
      feedback: ''
    })
  }


  render() {
    return (
      <div className="App">
        <Header newGame={ () => this.setNewGame() } />
        <h2 className="App-intro"> HOT or COLD </h2>
        <HotColdGame
          pastGuesses={this.state.pastGuesses}
          currentGuess={this.state.currentGuess}
          handleGuess={() => this.handleGuess()}
          setGuess={ e => this.setGuess(e)}
          feedback={this.state.feedback}
        />
      </div>
    );
  }
}

export default App;
