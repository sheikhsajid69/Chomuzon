import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  
  const slides = [
    {
      id: 1,
      image: 'https://m.media-amazon.com/images/I/71QRxZvKnGL._SX3000_.jpg',
      alt: 'Slide 1'
    },
    {
      id: 2,
      image: 'https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg',
      alt: 'Slide 2'
    },
    {
      id: 3,
      image: 'https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg',
      alt: 'Slide 3'
    },
    {
      id: 4,
      image: 'https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg',
      alt: 'Slide 4'
    },
    {
      id: 5,
      image: 'https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg',
      alt: 'Slide 5'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentSlide, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div 
      className="slider-container"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <div 
        className="slider" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>
      
      <div className="slider-controls">
        <button className="slider-btn prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="slider-btn next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;