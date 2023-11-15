import './Gallery.css';
import Slide1 from './Slide1';
import Slide2 from './Slide2'
import React, { useState, useEffect } from 'react';

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
    
            // Display the initial slide
            showSlide(slideIndex);
    
            // Set up an interval to change the slide every 10 seconds
            const intervalId = setInterval(nextSlide, 10000);
    
            // Cleanup the interval on component unmount
            return () => clearInterval(intervalId);
    
        }, [slideIndex]);

    return (
        <div className="Gallery" id = 'gallery'>
            <h2>
                Gallery
            </h2>
            <hr />
            <div class = "1 gallery fade">
            <Slide1></Slide1>
            </div>
            <div class = "2 gallery fade">
            <Slide2></Slide2>
            </div>
        </div>
    );
}

export default Gallery;