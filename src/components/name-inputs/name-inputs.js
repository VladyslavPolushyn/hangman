import React from 'react';
import './name-inputs.sass';

const NameInputs = ( {alertStyles, game} ) => {
  return(
    <div className="container name-inputs d-flex flex-column mt-4">
      <h5 className={"names-header text-center mb-4 " + alertStyles}>Введите имена</h5>
      <input
        maxLength="10"
        readOnly 
        type="text" 
        placeholder="Игрок 1"
        data-player-number="player1"
        data-input-type="name"
        className="mb-3" 
        onFocus={ e => { 
          e.target.classList.add('focus');
          game.activeInput = e.target;
          game.activePlayer = 'player1';
        } } 
        onBlur={ e => { 
          e.target.classList.remove('focus');
        } }
      />
      <input
        maxLength="10"
        readOnly
        type="text"
        placeholder="Игрок 2"
        data-player-number="player2"
        data-input-type="name"
        className="mb-3"
        onFocus={ e => { 
          e.target.classList.add('focus');
          game.activeInput = e.target;
          game.activePlayer = 'player2';
        } } 
        onBlur={ e => { 
          e.target.classList.remove('focus');
        } }
      />
    </div>
  );
}

export default NameInputs;