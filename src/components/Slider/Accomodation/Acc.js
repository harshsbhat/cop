import '../Common.css'
import AccImage from './Acc.jpg'
import Acc2Image from './Acc2.jpg'

function Acc() {
    return (
      <div className="Acc">

        {/* TEXT */}
        <div className='text'>
        <h2>Accomodation</h2>
        <p>Crown of Panshet aims to provide clean, hygienic, and comfortable accommodation options for its guests. <br/><br/>
            Our accommodations typically include well-maintained rooms or dorms with clean bedding and washroom facilities.</p>
            </div>

        {/* PHOTO  */}
        <div className='photo small'>
        <img src={AccImage} />
        </div>

        {/*PHOTO 2*/}
        <div className='photo right small'>
        <img src={Acc2Image} />
        </div>

      </div>
    );
  }
  
  export default Acc;