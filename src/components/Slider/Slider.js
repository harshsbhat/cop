import './Slider.css';
import Acc from './Accomodation/Acc'
import Flora from './Flora/Flora'
import Food from './OurFood/Food.js'
import Trek from './Treks/Treks';
import View from './OurView/View';
import Indoor from './IndoorGames/games';
import React, { useState, useEffect } from 'react';


function Slider() {
    
    const [slideIndex, setSlideIndex] = useState(0);
    
        useEffect(() => {
            const slides = document.getElementsByClassName("slide");
    
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
    <div className='Slider' id='experiences'>
        <h1>Experiences</h1>
        <hr />
        <div className='MySlides'>
        <div className='1 slide fade'>
        <Acc></Acc>
        </div>
        <div className='2 slide fade'>
        <Flora></Flora>
        </div>
        <div className='3 slide fade'>
        <Food></Food>
        </div>
        <div className='4 slide fade'>
        <Trek></Trek>
        </div>
        <div className='5 slide fade'>
        <View></View>
        </div>
        <div className='6 slide fade'>
        <Indoor></Indoor>
        </div>
        </div>
        
        </div>
    
    )  



    
}


export default Slider;



