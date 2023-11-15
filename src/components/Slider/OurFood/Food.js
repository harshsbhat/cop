import '../Common.css'
import food from './Food.jpg'
import food1 from './Food1.jpg'

function Food() {
    return (
      <div className="Acc">

        {/* TEXT */}
        <div className='text'>
        <h2>Our Food</h2>
        <p>Crown of Panshet is known for offering homely local food that often includes dishes like traditional Maharashtrian cuisine (Veg/Non-Veg options).<br /> <br /> The exact menu may vary, but it typically features delicious, comforting options that showcase the flavors of the region.</p>
            </div>

        {/* PHOTO  */}
        <div className='photo'>
        <img className = 'floraImg' src={food} />
        </div>

        {/*PHOTO 2*/}
        <div className='photo right'>
        <img className = 'floraImg' src={food1} />
        </div>

      </div>
    );
  }
  
  export default Food;