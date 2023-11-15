import './Nav.css';
import logo from './logo.png';
import ham from './ham.png'
import close from "./close.png"


function Nav() {

  const redirectToPhoneNumber = () => {
    // Redirect to the phone number
    window.location.href = 'tel:7774003585';
  };
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
  
    if (section) {
      if (window.innerWidth <= 1200) {
        if (sectionId === 'contactus') {
          // Redirect to the phone number for mobile
          window.location.href = 'tel:7774003585';
        } else {
          // Redirect to mobile version for other sections
          window.location.href = `#${sectionId}M`;
        }
      } else {
        // Scroll to section for larger screens
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
    const closeNav = () => {
      const verticalNav = document.getElementById('vertical');
      if (verticalNav) {
        verticalNav.classList.add('close');
      }
    };
  
    const splitNav = () => {
      const verticalNav = document.getElementById('vertical');
      if (verticalNav) {
        verticalNav.classList.remove('close');
      }
    };
  
    return (
      <div className="Nav">
        <div className="topnav">
          <div className="topnav-centered">
            <a href="#" className="logo">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="topnav-left">
            <a className="block" onClick={() => scrollToSection('about')}>
              About
            </a>
            <a className="block" onClick={() => scrollToSection('experiences')}>
              Experiences
            </a>
            <a className="block" onClick={() => scrollToSection('map')}>
              Location
            </a>
            <a className="block" href="https://wa.me/7774003585">
              Book Now
            </a>
          </div>
          <div className="topnav-right">
            <a className="block" onClick={() => scrollToSection('gallery')}>
              Gallery
            </a>
            <a className="res" onClick={() => redirectToPhoneNumber()}> 
              <button>Contact us</button>
            </a>
            <a className="block" onClick={() => scrollToSection('follow')}>
              Follow
            </a>
            <a className="div1 res" onClick={splitNav} href="#">
              <img src={ham} alt="Open Navigation" />
            </a>
            <a className="div1 res close" onClick={closeNav} href="#">
              <img src={close} alt="Close Navigation" />
            </a>
          </div>
        </div>
  
        <div id="vertical" className="vertical close">
          <ul>
            <li>
              <a className="div1 res close" onClick={closeNav} href="#">
                <img src={close} alt="Close Navigation" />
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('about')}>About</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('experiences')}>Experiences</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('map')}>Location</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('gallery')}>Gallery</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('follow')}>Follow</a>
            </li>
          </ul>
        </div>
  
        <hr
          style={{
            marginBottom: '0px',
            color: '#C69B3C',
            backgroundColor: '#C69B3C',
            height: 2,
            borderColor: '#C69B3C',
            borderRadius: '#C69B3C',
          }}
        />
      </div>
    );
  }
  
  export default Nav;