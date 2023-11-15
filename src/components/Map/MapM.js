import myMap from './myMap.png'
import './MapM.css';
import myMapM from './myMap.png'


function MapM() {
    return (
        <div className='mapContentM' id = 'mapM'>
            <div className='mapFrame'>
            <h2>LOCATION</h2>
            <hr/>
                            <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7573.407949802881!2d73.6026248!3d18.3607847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29a32a9d392c1%3A0xf9034c936b35384d!2sOYO%2073669%20crown%20of%20panshet!5e0!3m2!1sen!2sin!4v1699867802110!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            >
                            </iframe>
                            <div className='mapTextM'>
                                <div className='mapImageM'> 
                                {/* <img src={myMapM} /> */}
                                </div>
                                <div className='subhead'> 
                                <p>
                                Panshet Velhe-Torna Road, Shirkoli, Maharashtra 412107
                                </p>
                                </div>
                                <div className='link'> 
                                <p>
                                <a href="https://www.google.com/maps/place/OYO+73669+crown+of+panshet/@18.3607847,73.6026248,16.75z/data=!4m6!3m5!1s0x3bc29a32a9d392c1:0xf9034c936b35384d!8m2!3d18.358301!4d73.606993!16s%2Fg%2F11g8djv29_?entry=ttu" target="_blank" rel="noopener noreferrer"></a>
                                https://www.google.com/maps/place/<br />OYO+73669+crown+of+panshet/<br />@18.3607847,73.6026248,16.75z/data=!4m6!3m5!1s0x3bc29a32a9d<br />392c1:0xf9034c936b35384d!8m2!3d18.358301!4d73.606993!16s<br />%2Fg%2F11g8djv29_?entry=ttu
                                </p>
                            </div>
                            </div>
            </div>
        </div>
    );
}

export default MapM;