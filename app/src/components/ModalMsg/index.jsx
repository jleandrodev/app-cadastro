import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

Modal.setAppElement('#root');

function ModalMsg(props) {
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
      const { msg } = props;
      const navigate = useNavigate();
  

      function closeModal() {
        setModalIsOpen(false);
        navigate('/customers');
        window.location.reload();
      };


      function OpenModal(item) {
        if(item) {
          setMessage(item)
          setModalIsOpen(true);
        }
      }

    useEffect(()=> {
      OpenModal(msg)
    },[msg]);



    return(
            <ReactModal style={customStyles} isOpen={modalIsOpen} onRequestClose={closeModal}>
              <S.Container>
                <p>{message}</p>
                <button onClick={closeModal}>OK</button>
              </S.Container>
            </ReactModal>
    )

};

export default ModalMsg;
