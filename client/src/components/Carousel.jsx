import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const CarouselCont = styled.section`
  display: flex;
`;

const Carousel = ({ photoList }) => {

  return (
    <CarouselCont>
      <button>{'<'}</button>
      <div>IMAGE</div>
      <button>{'>'}</button>
    </CarouselCont>
  )
};

export default Carousel;