import '../Common.css'
import indoor1 from './indoor1.jpg'
import indoor2 from './indoor2.jpg'

function Indoor() {
    return (
      <div className="Acc">

        {/* TEXT */}
        <div className='text'>
        <h2>Indoor Games</h2>
        <p>Whether you're a competitive sports enthusiast or simply seeking a fun pastime, we've got you covered with an array of thrilling indoor games and activities.</p>
            </div>

        {/* PHOTO  */}
        <div className='photo small'>
        <img src={indoor1} />
        </div>

        {/*PHOTO 2*/}
        <div className='photo right small'>
        <img src={indoor2} />
        </div>

      </div>
    );
  }
  
  export default Indoor;