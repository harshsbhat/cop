import './Gallery.css';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import React, { useState, useEffect } from 'react';
import leftArrow from '../Slider/leftArrow.png';
import rightArrow from '../Slider/rightArrow.png';

function Gallery() {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const slides = document.getElementsByClassName("gallery");

        function showSlide(index) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = i === index ? 'block' : 'none';
            }
        }

        function nextSlide() {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }

        function prevSlide() {
            setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
        }

        // Display the initial slide
        showSlide(slideIndex);

        // Set up an interval to change the slide every 10 seconds
        const intervalId = setInterval(nextSlide, 10000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);

    }, [slideIndex]);

    return (
        <div className="Gallery" id="gallery">
            <h2>
                Gallery
            </h2>
            <hr />
            <div className={`gallery fade ${slideIndex === 0 ? 'active' : ''}`}>
                <Slide1 />
            </div>
            <div className={`gallery fade ${slideIndex === 1 ? 'active' : ''}`}>
                <Slide2 />
            </div>
            <div className='GalleryArrows'>
                <img onClick={() => setSlideIndex((prevIndex) => (prevIndex - 1 + 2) % 2)} src={leftArrow} alt="Left Arrow" />
                <img onClick={() => setSlideIndex((prevIndex) => (prevIndex + 1) % 2)} src={rightArrow} alt="Right Arrow" />
            </div>
        </div>
    );
}

export default Gallery;
