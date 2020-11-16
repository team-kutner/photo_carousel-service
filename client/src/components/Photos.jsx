import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const PhotosCont = styled.div`
  display: grid;
  column-gap: 8px;
  row-gap: 8px;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  grid-template-columns: 50% 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const Photo1 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  justify-self: stretch;
  background-image: url(${props => props.img || 'black'});
  background-size: cover;
`;

const Photo2 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  justify-self: stretch;
  background-image: url(${props => props.img || 'red'});
  background-size: cover;
`;

const Photo3 = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  justify-self: stretch;
  background-image: url(${props => props.img || 'green'});
  background-size: cover;
`;

const Photo4 = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  justify-self: stretch;
  background-image: url(${props => props.img || 'blue'});
  background-size: cover;
`;

const LargePhoto = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  justify-self: stretch;
  background-image: url(${props => props.img || 'orange'});
  background-size: cover;
`;

const Photos = ({ photoList }) => {

  return (
    <PhotosCont>
      <Photo1 img={photoList[0].url}></Photo1>
      <Photo2 img={photoList[1].url}></Photo2>
      <Photo3 img={photoList[2].url}></Photo3>
      <Photo4 img={photoList[3].url}></Photo4>
      <LargePhoto img={photoList[4].url}></LargePhoto>
    </PhotosCont>
  )
};

export default Photos;