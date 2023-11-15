import './Slide.css';
import img3 from './3.png'
import img4 from './4.png'

function Slide1() {
    return (
        <div className="Slide">
            <div className='img1'>
            <img src={img3} />
            </div>

            <div className='img2'>
            <img src={img4} />
            </div>


        </div>
    );
}

export default Slide1;