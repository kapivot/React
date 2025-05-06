import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Carousel as BootstrapCarousel } from 'bootstrap';
import './Carousel.css';

const Carousel = () => {
  useEffect(() => {
    const el = document.getElementById('mycarousel');
    if (el) new BootstrapCarousel(el);
  }, []);

  const images = [
    {
      src: `${process.env.PUBLIC_URL}/Images/gresofa.avif`,
      alt: 'Elegant Grey Sofa',
      title: 'Timeless Elegance',
      caption: 'Style meets comfort in this grey classic',
    },
    {
      src: `${process.env.PUBLIC_URL}/Images/brightgreensofa.avif`,
      alt: 'Bright Green Sofa',
      title: 'Fresh & Vibrant',
      caption: 'A bold statement for your modern space',
    },
    {
      src: `${process.env.PUBLIC_URL}/Images/greensofa.avif`,
      alt: 'Green Sofa',
      title: 'Natural Charm',
      caption: 'Earthy tones that bring calm sophistication',
    },
  ];

  return (
    <div id="mycarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((img, i) => (
          <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
            <img src={img.src} alt={img.alt} className="d-block w-100 carousel-img" />
            <div className="carousel-caption d-none d-md-block">
              <h1>{img.title}</h1>
              <p>{img.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#mycarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#mycarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
