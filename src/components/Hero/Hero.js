import './Hero.css';


function Hero() {
    const goToWhatsapp = () => {
      window.location.href = 'https://wa.me/7774003585';
    };
  
    return (
      <div className="HeroMain">
        <div className="Hero">
          <div className='header'>
            <h1>Explore Nature's Canvas: Our Hillside Getaway</h1>
            <p>For bookings, send us a message</p>
            <button onClick={goToWhatsapp}>Send message</button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
  
  export default Hero;