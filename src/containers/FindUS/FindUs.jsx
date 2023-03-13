import {SubHeading} from '../../components'
import { images } from '../../constants'


function FindUs() {
  return (
    <div className='app__wrapper app__bg section__padding' id='contact'>
      <div className="app__wrapper_info">
        <SubHeading text= 'contact' textStyle='p__cormorant'/>
        <h1 className='headtext__cormorant' >find us</h1>
        <p className='p__opensans'style={{ marginTop: '3rem' }} >Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
          Quasi, Cupiditate!
        </p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours </p>
        <p className='p__opensans'>Mon - Fri: 10:00 Am - 02:00 Am</p>
        <p className='p__opensans'>Sat - Sun: 10:00 Am - 03:00 Am</p>
        <button className='custom__button'style={{ marginTop: '2rem' }} >Visit Us</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="findUs" />
      </div>
    </div>

  )
}

export default FindUs
