import './Slide.css';
import img4 from './4.png'
import img5 from './5.png'
import img6 from './6.png'

function Slide1() {
    return (
        <div className="Slide">
            <div className='img1'>
            <img src={img4} />
            </div>

            <div className='img2'>
            <img src={img5} />
            </div>

            <div className='img3'>
            <img src={img6} />
            </div>
        </div>
    );
}

export default Slide1;