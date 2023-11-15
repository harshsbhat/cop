import './Slide.css';
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'

function Slide1() {
    return (
        <div className="Slide">
            <div className='img1'>
            <img src={img1} />
            </div>

            <div className='img2'>
            <img src={img2} />
            </div>

            <div className='img3'>
            <img src={img3} />
            </div>
        </div>
    );
}

export default Slide1;