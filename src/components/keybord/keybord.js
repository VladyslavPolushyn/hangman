import React from 'react';
import './keybord.sass';

const Keybord = ({onLetterClick}) => {
  const lettersRu = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
  // const lettersEng = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  return(
    <div className="container keybord d-flex flex-wrap justify-content-center my-3">
      {lettersRu.map( (letter, index) => {
        return <span key={index} className="letter" onClick={onLetterClick}>{letter}</span>
      })}
      { <span className="backspace letter" key={lettersRu.length} onClick={onLetterClick}></span> }
    </div>
  );
}

export default Keybord;