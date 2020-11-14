import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const Container = styled.section`
  box-sizing: border-box;
  font-family: Roboto, Helvetica, sans-serif
  color: rgb(34, 34, 34);
  font-size: 16px;
  width: 1128px;
  margin: 0 auto;
`;

const LinksCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  height: 30px;
`;

const Links = styled.div`
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  width: 55px;
  cursor: pointer;
  text-decoration: underline;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background-color: #eee;
  }
`;

const Location = styled(Links)`
  width: auto;
`;

const PhotosCont = styled.div`
  display: grid;
  column-gap: 10px;
  row-gap: 10px;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  grid-template-columns: 50% 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const Photo1 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  justify-self: stretch;
  background-color: black;
`;

const Photo2 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  justify-self: stretch;
  background-color: red;
`;

const Photo3 = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  justify-self: stretch;
  background-color: yellow;
`;

const Photo4 = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  justify-self: stretch;
  background-color: green;
`;

const LargePhoto = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  justify-self: stretch;
  background-color: blue;
`;



const App = () => {

  let [photos, setPhotos] = useState([]);

  return (
    <>
      <Container>
        <h1> Photo Gallery </h1>
        <LinksCont>
          <Location> City, Country </Location>
          <div>
            <Links>
              <ion-icon name="download-outline"></ion-icon>
              Share
            </Links>
            <Links>
              <ion-icon name="heart-outline"></ion-icon>
              Save
            </Links>
          </div>
        </LinksCont>
        <PhotosCont>
          <Photo1></Photo1>
          <Photo2></Photo2>
          <Photo3></Photo3>
          <Photo4></Photo4>
          <LargePhoto></LargePhoto>
        </PhotosCont>
      </Container>
    </>
  )
}

export default App;