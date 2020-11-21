import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import Links from './Links.jsx';
import Photos from './Photos.jsx';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
`

const Container = styled.section`
  font-family: 'Montserrat', Helvetica, sans-serif;
  box-sizing: border-box;
  color: rgb(34, 34, 34);
  font-size: 16px;
  width: 1128px;
  margin: 0 auto;
`;

const Header = styled.h1`
  margin-bottom: 10px;
`;

const App = () => {

  let [photos, setPhotos] = useState([]);

  useEffect(() => {
    var params = window.location.href.split('/');
    console.log(window.location.href);
    var id = params[params.length - 1] || '80';
    axios.get(`/api/homes/${id}/photos`)
      .then(response => {
        var data = response.data;
        setPhotos(data);
      })
      .catch(err => {
        console.log(err);
      })
    }, [])

    return (
    <>
      {photos.length !== 0 &&
        <Container>
          <Header>{photos[0].Listing.name} ({photos[0].ListingId})</Header>
          <Links listing={photos[0].Listing} />
          <Photos photoList={photos} />
        </Container>
      }
    </>
  )
};

export default App;