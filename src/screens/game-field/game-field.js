import React, {useState} from 'react';
import './game-field.sass';
import Keybord from '../../components/keybord/keybord';

const GameField = ( { game } ) => {

  const lettersArr = game.word.map( (item, index) => {
    return <span className="letter-span mx-1" key={index}>_</span>
  });

  // const [letters, setLetters] = useState(lettersArr);
  const [currentImg, setCurrentImg] = useState(1);

  const onLetterClick = event => {

    if ( !game.word.includes(event.target.innerText) ) {

      event.target.classList.add('wrong-letter');
      setCurrentImg( prevState => {
        // 8 - the numbers of game img
        return currentImg < 8 ? currentImg + 1 : prevState
      });
      
    }else {
      event.target.classList.add('correct-letter');
      
    }

  }

  const isActivePlayer = playerNumber => {
    return game.activePlayer === playerNumber ? 'success-green h4' : '';
  }

  return (
    <div className="container game-field p-0 text-center">
      <div className="game-info py-3 d-flex">
        <div className="game-img mh-100 col-7">
          <img src={"img/game" + currentImg + ".png"} className="img-fluid" alt="game" />
        </div>
        <div className="game-score col-5">
          <div className={"player-info " + isActivePlayer('player1')}>
            <p>{ game.player1.name }</p>
            <p>счёт: { game.player1.score }</p>
          </div>
          <div className={"player-info " + isActivePlayer('player2')}>
            <p>{ game.player2.name }</p>
            <p>счёт: { game.player2.score }</p>
          </div>
        </div>
      </div>
      <div className="game-word">
        <h4>{lettersArr}</h4>
      </div>
      <Keybord onLetterClick={onLetterClick} />   
    </div>
  );
}

export default GameField;