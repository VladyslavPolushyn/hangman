import React from 'react';
import './app.sass';
import FirstScreen from '../../screens/first-screen';
import SetWord from './../../screens/set-word/index';
import GameField from './../../screens/game-field';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  const game = {
    activePlayer: 'player1',
    activeInput: '',
    word: '',
    uniqueLettersCount: '',
    player1: {
      name: '',
      score: 0
    },
    player2: {
      name: '',
      score: 0
    }
  }

  const setInput = (activeInput, context) => {
    if(context === 'word') {
      game.word = activeInput.value.toLowerCase().split('');
      game.uniqueLettersCount = getUniqueLettersCount(game.word);
      activeInput.focus();
      return;
    }
    game[game.activePlayer][context] = activeInput.value.toLowerCase();
    activeInput.focus();
  }

  const getUniqueLettersCount = arr => {
    const newArr = arr.filter((item, index) => arr.indexOf(item) === index);
    return newArr.length;
  }

  const onLetterClick = event => {

    if (!game.activeInput) {
      event.preventDefault();
      return;
    }

    if ( !event.target.innerText ) {
      //  here goes removing of last letter
      game.activeInput.value = game.activeInput.value.slice(0, -1);
      setInput(game.activeInput, game.activeInput.dataset.inputType);
      return;
    }

    game.activeInput.value = game.activeInput.value + event.target.innerText;
    setInput(game.activeInput, game.activeInput.dataset.inputType);

  }

  return (
    <div className="app">
      <div className="main-container p-0 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">

        <Router>
          <Switch>

            <Route exact path="/">
              <FirstScreen 
                // setName={ setName }
                setInput={setInput}
                game={ game }
                onLetterClick={ onLetterClick }
              />
            </Route>

            <Route exact path="/set-word">
              <SetWord 
                // setWord={ setWord }
                setInput={setInput}
                game={ game }
                onLetterClick={ onLetterClick }
              />
            </Route>

            <Route exact path="/game-field">
              <GameField 
                game={ game }
                onLetterClick={ onLetterClick }
              />
            </Route>

          </Switch>
        </Router>

      </div>
    </div>
  );
}

export default App;
