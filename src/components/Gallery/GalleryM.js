import './Gallery.css';
import Slide1M from './Slide1M';
import Slide2M from './Slide2M';
import Slide3M from './Slider3M';
import React, { useState, useEffect } from 'react';

function Gallery() {

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

    return (
        <div className="Gallery"  id = 'galleryM'>
            <h2>
                Gallery
            </h2>
            <hr />
            <div class = "1 galleryM fade">
            <Slide1M></Slide1M>
            </div>
            <div class = "2 galleryM fade">
            <Slide2M></Slide2M>
            </div>
            <div class = "3 galleryM fade">
            <Slide3M></Slide3M>
            </div>
        </div>
    );
}

export default Gallery;