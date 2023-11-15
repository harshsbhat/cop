import './App.css';
import Hero from './components/Hero/Hero';
import Nav from './components/Navbar/Nav';
import About from './components/About Us/About';
import Slider from './components/Slider/Slider';
import Mappc from './components/Map/MapPc';
import Mapm from './components/Map/MapM';
import Gallery from './components/Gallery/Gallery';
import GalleryM from './components/Gallery/GalleryM';
import Footer from './components/Footer/Footer';
import stickyW from './stickyW.png';
import upArrow from './upArrow.png';
import { useState, useEffect } from 'react';

function App() {
  function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <div>
        {showButton && (
          <div className='stick2'>
            <img onClick={scrollToTop} src={upArrow} alt="Up Arrow" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="App">
      <div id='top'></div>
      <Nav />
      <div className='stick'>
        <img onClick={() => window.location.href = 'https://wa.me/7774003585'} src={stickyW} alt="Sticky Image" />
      </div>
      <ScrollToTopButton />
      <Hero />
      <About id="about" />
      <Slider id='experiences' />
      <div className='pc'>
        <Mappc />
        <Gallery id="gallery" />
      </div>
      <div className='mobile'>
        <Mapm id="location" />
        <GalleryM />
      </div>
      <Footer id="follow" />
    </div>
  );
}

export default App;
