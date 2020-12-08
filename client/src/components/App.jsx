const {React} = window;
const {ReactDOM} = window;
const {styled} = window;
const {useEffect, useState} = React;
import Links from './Links.jsx';
import Photos from './Photos.jsx';
import axios from 'axios';

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
    var id = params[params.length - 1] || '10';
    axios.get(`/api/homes/${id}/photos`)
      .then(response => {
        var data = response.data;
        setPhotos(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
  );
};

export default App;