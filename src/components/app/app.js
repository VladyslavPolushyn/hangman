import React, {useState} from 'react';
import './app.sass';
import FirstScreen from '../../screens/first-screen';
import SetWord from './../../screens/set-word/index';
import GameField from './../../screens/game-field';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  const game = {
    activePlayer: 'player1',
    player1: {
      name: '',
      score: 0,
      word: ''
    },
    player2: {
      name: '',
      score: 0,
      word: ''
    }
  }

  const setName = (playerNumber, name) => {
    game['player' + playerNumber].name = name;
  }

  const setWord = (playerNumber, word) => {
    game[playerNumber].word = word.toLowerCase();
  }

  return (
    <div className="app">
      <div className="main-container p-0 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">

        <Router>
          <Switch>

            <Route exact path="/">
              <FirstScreen 
                setName={ setName }
                game={game}
              />
            </Route>

            <Route exact path="/set-word">
              <SetWord 
                setWord={ setWord }
                game={ game } 
              />
            </Route>

            <Route exact path="/game-field">
              <GameField game={ game } />
            </Route>

          </Switch>
        </Router>

      </div>
    </div>
  );
}

export default App;
