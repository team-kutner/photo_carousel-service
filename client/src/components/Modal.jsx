import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import Carousel from './Carousel.jsx';

const ModalCont = styled.div`
  visibility: ${props => props.view ? 'visible' : 'hidden'};
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const ModalNav = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 40px 20px 40px;

`;

const Modal = ({ photoList, view, toggle}) => {

  return (
    <ModalCont view={view}>
      <ModalNav>
        <button onClick={toggle}>
          <ion-icon name="close-outline"></ion-icon>
          Close
        </button>
        <div>1 / 10</div>
        <div>
          <ion-icon name="cloud-upload-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
        </div>
      </ModalNav>
      <Carousel photoList={photoList} />
    </ModalCont>
  )
};

export default Modal;