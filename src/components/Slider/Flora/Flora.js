import '../Common.css'
import Flora1 from './flora.jpg'
import Flora2 from './flora1.jpg'

function Flora() {
    return (
      <div className="Acc">

        {/* TEXT */}
        <div className='text'>
        <h2>Flora and Fauna</h2>
        <p>Panshet, located near Pune, India, boasts a rich mix of flora and fauna. Its diverse plant life includes teak, neem, and bamboo trees, alongside various medicinal herbs.<br /><br />Panshet is known for its avian diversity. Birdwatchers can spot a wide range of species, including kingfishers, eagles, owls, parakeets, and waterfowl like herons and cormorants. The serene lakes and lush surroundings make Panshet a haven for bird enthusiasts.</p>
            </div>

        {/* PHOTO  */}
        <div className='photo'>
        <img className = 'floraImg' src={Flora1} />
        </div>

        {/*PHOTO 2*/}
        <div className='photo right'>
        <img className = 'floraImg' src={Flora2} />
        </div>

      </div>
    );
  }
  
  export default Flora;