import './Gallery.css';
import Slide1M from './Slide1M';
import Slide2M from './Slide2M';
import Slide3M from './Slider3M';
import React, { useState, useEffect } from 'react';
import leftArrow from '../Slider/leftArrow.png';
import rightArrow from '../Slider/rightArrow.png';

function GalleryMobile() {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const slides = document.getElementsByClassName("galleryM");

        function showSlide(index) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = i === index ? 'block' : 'none';
            }
        }

        function nextSlide() {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }

        // Display the initial slide
        showSlide(slideIndex);

        // Set up an interval to change the slide every 10 seconds
        const intervalId = setInterval(nextSlide, 10000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);

    }, [slideIndex]);

    const slides = document.getElementsByClassName("galleryM"); // Declare slides here

    const prevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return (
        <div className="Gallery" id="galleryM">
            <h2>
                Gallery
            </h2>
            <hr />
            <div className={`galleryM fade ${slideIndex === 0 ? 'active' : ''}`}>
                <Slide1M />
            </div>
            <div className={`galleryM fade ${slideIndex === 1 ? 'active' : ''}`}>
                <Slide2M />
            </div>
            <div className={`galleryM fade ${slideIndex === 2 ? 'active' : ''}`}>
                <Slide3M />
            </div>
            <div className='GalleryArrows'>
                <img onClick={prevSlide} src={leftArrow} alt="Left Arrow" />
                <img onClick={nextSlide} src={rightArrow} alt="Right Arrow" />
            </div>
        </div>
    );
}

export default GalleryMobile;
