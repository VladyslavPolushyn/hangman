import React, {useState, forwardRef, useImperativeHandle} from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import './game-modal.sass';

const GameModal = forwardRef((props, ref) => {

  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    // disable the keyboard must be here or in reset func
    setNextRound();
    history.push('/set-word');
    return setShow(false);
  }
  const handleShow = () => setShow(true);

  const setNextRound = () => {
    props.game.word = '';
    props.game.uniqueLettersCount = '';
    props.game.activeInput = '';

    if (props.result === 'win') {
      props.game[props.game.activePlayer].score += 1;
    }

  }

  useImperativeHandle(ref, () => ({
    showModal() {
      handleShow();
    }
  }));

  return(
    <div className="game-modal">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="align-items-center justify-content-center">
          <Modal.Title>{ props.resultTitle }</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          { props.game.word.join('') }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ок
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
});

export default GameModal;