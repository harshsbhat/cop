import '../Common.css'
import trek from './Trek1.jpg'
import trek1 from './trek2.jpg'

function Trek() {
    return (
      <div className="Acc">

        {/* TEXT */}
        <div className='text'>
        <h2>Trekking</h2>
        <p>Crown of Panshet is known for offering homeldy local food that often includes dishes like traditional Maharashtrian cuisine (Veg/Non-Veg options).<br /> <br /> The exact menu may vary, but it typically features delicious, comforting options that showcase the flavors of the region.</p>
            </div>

        {/* PHOTO  */}
        <div className='photo'>
        <img className = 'floraImg' src={trek} />
        </div>

        {/*PHOTO 2*/}
        <div className='photo right trek'>
        <img className = 'floraImg' src={trek1} />
        </div>

      </div>
    );
  }
  
  export default Trek;