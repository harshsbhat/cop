import './App.css';
import Hero from './components/Hero/Hero';
import Nav from './components/Navbar/Nav';
import About from './components/About Us/About';
import Slider from './components/Slider/Slider';
import Mappc from './components/Map/MapPc';
import Mapm from './components/Map/MapM'
import Gallery from './components/Gallery/Gallery';
import GalleryM from './components/Gallery/GalleryM';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About id="about" />
      <Slider id = 'experiences'/>
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










