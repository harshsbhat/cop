import './Map.css';
import myMap from './myMap.png'

function Map() {
    return (
        <div className='Head' id = 'map'>

        <div className="Map">

        <div className='mapFrame'>
            
            <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7573.407949802881!2d73.6026248!3d18.3607847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29a32a9d392c1%3A0xf9034c936b35384d!2sOYO%2073669%20crown%20of%20panshet!5e0!3m2!1sen!2sin!4v1699867802110!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <div className='mapText'>
        <h2>
                Location
            </h2>
            <hr />
            <img src={myMap} />
            <p className='subhead'>
            Panshet Velhe-Torna Road, Shirkoli, Maharashtra 412107
            </p>
            
            <p className='link'>
            https://www.google.com/maps/place/<br />OYO+73669+crown+of+panshet/<br />@18.3607847,73.6026248,16.75z/data=!4m6!3m5!1s0x3bc29a32a9d<br />392c1:0xf9034c936b35384d!8m2!3d18.358301!4d73.606993!16s<br />%2Fg%2F11g8djv29_?entry=ttu
            </p>

            
            <button>Contact us</button>
        </div>
        </div>
        </div>
    );
}

export default Map;