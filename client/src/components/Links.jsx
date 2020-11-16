import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const LinksCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  height: 30px;
`;

const Link = styled.div`
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

const Location = styled(Link)`
  width: auto;
  padding-left: 0;
  color: rgb(113, 113, 113);
`;

const Links = ({ listing }) => {
  return (
    <LinksCont>
      <Location> {listing.location} </Location>
      <div>
        <Link>
          <ion-icon name="download-outline"></ion-icon>
          Share
        </Link>
        <Link>
          <ion-icon name="heart-outline"></ion-icon>
          Save
        </Link>
      </div>
    </LinksCont>
  )
};

export default Links;