import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './components/App.jsx';
import Links from './components/Links.jsx';
import Photos from './components/Photos.jsx';
import Modal from './components/Modal.jsx';
import Carousel from './components/Carousel.jsx';

it('renders three <Foo /> components', () => {
  expect(render(<App />).text()).toBe('hi');
});