import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './components/App.jsx';
import Links from './components/Links.jsx';
import Photos from './components/Photos.jsx';
import Modal from './components/Modal.jsx';
import Carousel from './components/Carousel.jsx';

describe('Links Component', () => {
  it('Links should have access to the listing object', () => {
    const wrapper = shallow(<Links listing={{location: 'Houston'}}/>);
    expect(wrapper.text()).toContain('Houston');
  });

  it('Links should have two icons', () => {
    const wrapper = shallow(<Links listing={{location: 'Houston'}}/>);
    expect(wrapper.find('ion-icon')).toHaveLength(2);
  });
});

var photoList = [
  {
    url: 'https://example1.com/',
    description: 'photo1',
  },
  {
    url: 'https://example2.com/',
    description: 'photo2',
  },
  {
    url: 'https://example3.com/',
    description: 'photo3',
  },
  {
    url: 'https://example4.com/',
    description: 'photo4',
  },
  {
    url: 'https://example5.com/',
    description: 'photo5',
  },
  {
    url: 'https://example6.com/',
    description: 'photo6',
  }
];

describe('Photos Component', () => {

  const wrapper = shallow(<Photos photoList = {photoList}/>);

  it('Photos contains first 5 images', () => {
    var ImageChildren = wrapper.find('PhotosCont').children().filter('ImgCont');
    expect(ImageChildren).toHaveLength(5);
  });

  it('AllPhotosBtn should toggle the view of the Modal', () => {
    expect(wrapper.find('Modal').prop('view')).toBe(false);
    wrapper.find('AllPhotosBtn').simulate('click');
    expect(wrapper.find('Modal').prop('view')).toBe(true);
  });
});

describe('Carousel Component', () => {
  var modal = shallow(<Modal photoList={photoList} view={true} />);
  var photoNum = modal.find('Carousel').prop('photoNum');
  var carousel = shallow(<Carousel photoList={photoList} photoNum={photoNum} />)

  it('Should have photoList length "n" images', () => {
    var images = carousel.find('Images').children();
    expect(images).toHaveLength(photoList.length);
  });

  it('Should display the image that photoNum matches', () => {
    var firstImg = carousel.find('Images').children().at(photoNum - 1);
    expect(firstImg.prop('display')).toBe(true);
  });

  it('Should increment/decrement photoNum when clicking NavBtns', () => {
    var secondImg = carousel.find('Images').children().at(1);
    expect(secondImg.prop('display')).toBe(false);

    carousel.find('NavBtns').at(1).simulate('click', { target: { value: 'right' } });
    secondImg = carousel.find('Images').children().at(1);
    expect(secondImg.prop('display')).toBe(true);

  });
});

