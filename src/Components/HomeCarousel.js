import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './homeCarousel.css';


const CAROUSEL_DATA = [
  {
    url: '/images/Saint-Valentin-Soldes-Document-A4-29.7-×-21-cm-1080-×-600-px-1080-×-400-px.webp',
  },
  {
    url: '/images/shadow-cosmetics.jpg',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const incrementIndex = () => {
    setCurrentIndex((currentIndex) => {
      return (currentIndex + 1) % CAROUSEL_DATA.length;
    });
  };
  const decrementIndex = () => {
    setCurrentIndex((currentIndex) => {
      return currentIndex === 0 ? CAROUSEL_DATA.length - 1 : currentIndex - 1;
    });
  };
  return (
    <section className='carousel' style={{ backgroundImage: `url(${CAROUSEL_DATA[currentIndex].url})` }}>
      <div
        onClick={decrementIndex}
        className='carousel-arrow carousel-arrow-left'
      >
        <ArrowLeft />
      </div>
      <div className='carousel-overlay'></div>
      <div className='carousel-content'>
        <h1 className='carousel-title'>summer sale</h1>
        <p className='carousel-description'>
          don't compromise on style! get flat 30% off for new arrivals.
        </p>
        <Link
          to='categories'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <button className='carousel-button'>
            Shop Now <ArrowRight />
          </button>
        </Link>
      </div>
      <div
        onClick={incrementIndex}
        className='carousel-arrow carousel-arrow-right'
      >
        <ArrowRight />
      </div>
    </section>
  );
};

export default Carousel;