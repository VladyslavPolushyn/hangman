import React, {useState, useEffect, useRef} from 'react';
import './game-field.sass';
import Keybord from '../../components/keybord/keybord';
import GameModal from './../../components/game-modal';

const GameField = ( { game } ) => {

  const childRef = useRef();
  const lettersArr = game.word.map( (item, index) => {
    return <span className="letter-span mx-1" key={index}>_</span>
  });

  const [letters, setLetters] = useState(lettersArr);
  const [currentImg, setCurrentImg] = useState(1);
  const [openLettersCount, setOpenLettersCount] = useState(0);
  const [resultTitle, setResultTitle] = useState('');
  const [result, setResult] = useState('');
  const gameImgCount = 8;

  const onLetterClick = event => {

    if ( event.target.hasAttribute('data-clicked') ) {
      return;
    }
    else if ( !game.word.includes(event.target.innerText) ) {

      event.target.classList.add('wrong-letter');

      setCurrentImg( currentImg => {
        return currentImg < gameImgCount ? currentImg + 1 : currentImg
      });

    }else {

      event.target.classList.add('correct-letter');

      setOpenLettersCount(prevState => prevState + 1);

      setLetters(prevState => {
        const newState = [...prevState];

        newState.forEach((item, index) => {
          if (event.target.innerText === game.word[index]) {
            newState[index] = <span className="letter-span mx-1" key={index}>{event.target.innerText}</span>;
          }
        });

        return newState;
      });

    }
    event.target.setAttribute('data-clicked', 'true');
  }

  useEffect(() => {
    isLoose();
    isWin();
  });

  const isWin = () => {
    if (openLettersCount === game.uniqueLettersCount) {
      setResultTitle(prevState => prevState = 'Правильно :)');
      setResult(prevState => prevState = 'win');
      childRef.current.showModal();
    }
  }

  const isLoose = () => {
    if (currentImg === gameImgCount) {
      setResultTitle(prevState => prevState = 'Неправильно :(');
      setResult(prevState => prevState = 'loose');
      childRef.current.showModal();
    }
  }

  const isActivePlayer = playerNumber => {
    return game.activePlayer === playerNumber ? 'success-green h4' : '';
  }

  return (
    <div className="container game-field p-0 text-center">
      <div className="game-info py-3 d-flex">
        <div className="game-img mh-100 col-6">
          <img src={"img/game" + currentImg + ".png"} className="img-fluid" alt="game" />
        </div>
        <div className="game-score col-6">
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
        <h4>{letters}</h4>
      </div>
      <Keybord onLetterClick={onLetterClick} noBackspace={true} />

      <GameModal 
        resultTitle={ resultTitle }
        game={ game }
        ref={ childRef }
        result={ result }
      />   
    </div>
  );
}

export default GameField;