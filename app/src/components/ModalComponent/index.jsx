import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import Modal from 'react-modal';
import * as S from './styles';

Modal.setAppElement('#root');

function ModalComponent(props) {
    const customStyles = {
        content: {
          top: '35%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-40%, -10%)',
          width: '50%',
           
        },
      };

      const [ modalIsOpen, setModalIsOpen ] = useState(false);
      const [ message, setMessage ] = useState('');
      const { err } = props;
  

      function closeModal() {
        setModalIsOpen(false);
        window.location.reload();
      };

      function OpenModal(error) {
        if(error) {
          setMessage(error)
          setModalIsOpen(true);
        }
      }

    useEffect(()=> {
      OpenModal(err)
    },[err]);



    return(
            <ReactModal style={customStyles} isOpen={modalIsOpen} onRequestClose={closeModal}>
              <S.Container>
                <p>{message}</p>
                <button onClick={closeModal}>OK</button>
              </S.Container>
            </ReactModal>
    )

};

export default ModalComponent;
