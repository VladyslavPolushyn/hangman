import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Keybord from '../../components/keybord/keybord';
import './set-word.sass';

const SetWord = ( {game, onLetterClick} ) => {

  const [wordAlert, setWordAlert] = useState('');

  const isWord = (event) => {
    if ( game.word.length < 2 ){
      event.preventDefault();
      setWordAlert('danger-red');
      return;
    }
    // changing activePlayer
    game.activePlayer = game.activePlayer === 'player1' ? 'player2' : 'player1';
  }

  return (
    <div className="container set-word p-0 text-center">
      <Header />
      <div className="mt-5 mb-2">
        <h6 className={"word-header " + wordAlert}><span className="h5">{ game[game.activePlayer].name }</span>, напишите слово для соперника:</h6>
      </div>
      <div className="container">
        <input
          readOnly
          type="text"
          placeholder="слово"
          data-input-type="word"
          className="mb-3 w-100"
          onFocus={ e => { 
            e.target.classList.add('focus');
            game.activeInput = e.target;
          }} 
          onBlur={ e => { 
            e.target.classList.remove('focus');
          }}
          />
      </div>
      <Keybord onLetterClick={onLetterClick}/>
      <Link to="/game-field" className="btn" onClick={isWord}>Далее</Link>
    </div>
  );
}

export default SetWord;