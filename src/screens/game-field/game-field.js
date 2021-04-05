import React from 'react';
import './game-field.sass';
import Keybord from '../../components/keybord/keybord';

import game1 from '../../img/game1.png';
// import game2 from '../../img/game2.png';
// import game3 from '../../img/game3.png';
// import game4 from '../../img/game4.png';
// import game5 from '../../img/game5.png';
// import game6 from '../../img/game6.png';
// import game7 from '../../img/game7.png';
// import game8 from '../../img/game8.png';

const GameField = ( { game, onLetterClick} ) => {

  const isActivePlayer = playerNumber => {
    return game.activePlayer === playerNumber ? 'success-green h4' : '';
  }

  return (
    <div className="container game-field p-0 text-center">
      <div className="game-info py-3 d-flex">
        <div className="game-img mh-100 col-7">
          <img src={game1} className="img-fluid" alt="game" />
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
          <h4>_ _ Л _ Е _</h4>
      </div>
      <Keybord />   
    </div>
  );
}

export default GameField;