import './Experience.css';
import food from './food.jpg'
import flora from './flora.jpg'


function Experience() {
    return (
        <div className="Experience" id = 'experiences'>
            <h1>Experiences</h1>
            <hr />

            {/* SLIDE 1 */}
            <div className='Container mySlides'>
                <div className='OurFood'>
                <div className='text'>
                <h2>
                    Our Food
                </h2>
                <p>
                Crown of Panshet is known for offering homely local food that often includes dishes like traditional Maharashtrian<br></br> cuisine<br/> (Veg/Non-Veg options).<br/><br/> The exact menu may vary, but it typically features delicious, comforting options that showcase the flavors<br/> of the region.
                </p>
                </div>
                <div className='image'>
                    <img src={food} />
                </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;