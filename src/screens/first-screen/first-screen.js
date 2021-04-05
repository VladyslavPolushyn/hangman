import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './first-screen.sass';
import Header from './../../components/header';
import NameInputs from '../../components/name-inputs';
import Keybord from '../../components/keybord/keybord';

const FirstScreen = ( {setName, game, onLetterClick} ) => {

  const [namesAlert, setNamesAlert] = useState('');

  const isNames = (event) => {
    if ( (game.player1.name.trim() === "") || (game.player2.name.trim() === "") ){
      event.preventDefault();
      setNamesAlert('danger-red');
    }
    // The first time set word
    game.activePlayer = 'player1';
  }

  return (
    <div className="container first-screen p-0 text-center">
      <Header />
      <NameInputs alertStyles={namesAlert} game={game} />
      <Keybord onLetterClick={onLetterClick} />
      <Link to="/set-word" className="btn" onClick={isNames}>Далее</Link>
    </div>
  );
}

export default FirstScreen;