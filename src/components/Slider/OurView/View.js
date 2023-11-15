import '../Common.css'
import view1 from './view1.jpg'
import view2 from './view2.jpg'

function View() {
    return (
      <div className="Acc">

        {/* TEXT */}
        <div className='text'>
        <h2>Our View</h2>
        <p>
Perched atop a majestic mountain and overlooking the breathtaking Panshet backwaters, "Crown of Panshet" offers a truly unparalleled vantage point for your escape.<br /><br /> Our resort's location is nothing short of spectacular, with panoramic views that will leave you in awe. Wake up to the serene beauty of the backwaters below and unwind against the backdrop of the rolling mountains. Your stay at "Crown of Panshet" promises not just a retreat but a front-row seat to nature's grandeur.</p>
            </div>

        {/* PHOTO  */}
        <div className='photo small'>
        <img src={view1} />
        </div>

        {/*PHOTO 2*/}
        <div className='photo right small'>
        <img src={view2} />
        </div>

      </div>
    );
  }
  
  export default View;