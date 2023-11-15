import './Footer.css';
import phone from './phone.png';
import whatsapp from './whatsapp.svg';
import myMap from '../Map/myMap.png'


function Footer() {
    return (

        <div className='Footer' id='follow'>
            <h2>
                Follow Us
            </h2>
        <div className='images'>
        <div className='img1'>
  <a href='tel:7774003585'>
    <img src={phone} alt='Phone' />
  </a>
</div>
<div className='img2'>
  <a href='https://wa.me/7774003585'> {/* Replace with your WhatsApp number */}
    <img src={whatsapp} alt='WhatsApp' />
  </a>
</div>
<div className='img2'>
  <a href='https://www.google.com/maps/place/
OYO+73669+crown+of+panshet/
@18.3607847,73.6026248,16.75z/data=!4m6!3m5!1s0x3bc29a32a9d
392c1:0xf9034c936b35384d!8m2!3d18.358301!4d73.606993!16s
%2Fg%2F11g8djv29_?entry=ttu'> {/* Replace with the actual ID of your map section */}
    <img src={myMap} alt='Map' />
  </a>
</div>
        </div>
        </div>

    );
}

export default Footer;