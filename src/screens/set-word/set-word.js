import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Keybord from '../../components/keybord/keybord';
import './set-word.sass';

const SetWord = ( {setWord, game} ) => {

  const [wordAlert, setWordAlert] = useState('');

  const isWord = (event) => {
    if ( game[game.activePlayer].word.trim() === "" || game[game.activePlayer].word.trim().length < 2 ){
      event.preventDefault();
      setWordAlert('danger-red');
    }
  }

  return (
    <div className="container set-word p-0 text-center">
      <Header />
      <div className="mt-5 mb-2">
        <h6 className={"word-header " + wordAlert}><span className="h5">{ game[game.activePlayer].name }</span>, напишите слово для соперника:</h6>
      </div>
      <div className="container">
        <input type="text" placeholder="слово" className="mb-3 w-100" onChange={(e) => { setWord(game.activePlayer, e.target.value) }}/>
      </div>
      <Keybord />
      <Link to="/game-field" className="btn" onClick={isWord}>Далее</Link>
    </div>
  );
}

export default SetWord;