import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import Modal from './Modal.jsx';

const PhotosCont = styled.div`
  position: relative;
  display: grid;
  column-gap: 8px;
  row-gap: 8px;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  grid-template-columns: 50% 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const ImgCont = styled.div`
  grid-area: ${props => props.location};
  justify-self: stretch;
  background-color: black;
  overflow: hidden;
  cursor: pointer;
`;

const Image = styled.img`
  width: auto;
  height: 100%;
  transition: opacity 200ms linear;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.8;
  }
`;

const AllPhotosBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  line-height: 18px;
  font-weight: 600px;
  right: 24px;
  bottom: 24px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid black;
  padding: 7px 15px;
  background-color: white;
  transition: background-color 100ms linear;

  &:hover {
    background-color: rgb(247, 247, 247);
  }
`;

var getGridLoc = (index) => {
  if (index === 0) {
    return '2 / 2 / 3 / 3';
  } else if (index === 1) {
    return '1 / 2 / 2 / 3';
  } else if (index === 2) {
    return '1 / 3 / 2 / 4';
  } else if (index === 3) {
    return '1 / 1 / 3 / 2';
  } else {
    return '2 / 3 / 3 / 4';
  }
};


const Photos = ({ photoList }) => {
  const [modalView, setModalView] = useState(false);

  var toggle = () => {
    setModalView(!modalView);
  };

  return (
    <>
      <PhotosCont onClick={toggle}>
        {photoList.slice(0, 5).map((photo, i) => {
          return (
            <ImgCont location={getGridLoc(i)}>
              <Image src={photo.url} alt={photo.description} />
            </ImgCont>
          )
        })}
        <AllPhotosBtn onClick={toggle}>
          <ion-icon name='apps'></ion-icon>
          <div style={{marginLeft: 8}}> Show All Photos </div>
        </AllPhotosBtn>
      </PhotosCont>
      <Modal photoList={photoList} view={modalView} toggle={toggle}/>
    </>
  )
};

export default Photos;