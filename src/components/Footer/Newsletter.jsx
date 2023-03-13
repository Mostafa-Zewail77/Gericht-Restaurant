import {SubHeading} from '../../components'
import './Newsletter.css'


function Newsletter() {
  return (
    <div className='footer-newsletter flex__center'>
      <div className="newsletter-heading">
        <SubHeading text= 'Newsletter' />
        <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
        <p className='p__opensans'>And Never Miss Latest Updates!</p>
      </div>
      <div className="newsletter-input flex__center">
        <input type="text" placeholder='Enter Your Email'/>
        <button className= 'custom__button'>subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
