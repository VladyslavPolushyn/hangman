import React from 'react';
import './name-inputs.sass';

const NameInputs = ( {setName, alertStyles} ) => {
  return(
    <div className="container name-inputs d-flex flex-column mt-4">
      <h5 className={"names-header text-center mb-4 " + alertStyles}>Введите имена</h5>
      <input 
        readOnly 
        type="text" 
        placeholder="Игрок 1" 
        className="mb-3" 
        onChange={ e => { setName('1', e.target.value) } }
        onFocus={ e => e.target.classList.add('focus') } 
        onBlur={ e => e.target.classList.remove('focus') }
      />
      <input 
        readOnly
        type="text"
        placeholder="Игрок 2"
        className="mb-3"
        onChange={ e => { setName('2', e.target.value) } }
        onFocus={ e => e.target.classList.add('focus') } 
        onBlur={ e => e.target.classList.remove('focus') }
      />
    </div>
  );
}

export default NameInputs;