import './Slide.css';
import img5 from './5.png'
import img6 from './6.png'

function Slide1() {
    return (
        <div className="Slide">
            <div className='img5'>
            <img src={img5} />
            </div>

            <div className='img6'>
            <img src={img6} />
            </div>
        </div>
    );
}

export default Slide1;