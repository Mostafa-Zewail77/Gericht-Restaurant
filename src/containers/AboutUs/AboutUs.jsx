import images from "../../constants/images"
import {SubHeading} from '../../components' 
import './AboutUs.css'
function AboutUs() {
  return (
    <div className="app__aboutUs app__bg flex__center section__padding " id = 'about'>
      <div className="app__aboutUs-overlay flex__center">
        <img src={images.G} alt = 'G'/>
      </div> 

      <div className="app__aboutUs-content flex__center" > 
        <div className="app__aboutUs-content_about">

          <SubHeading text = 'About Us' textStyle='headtext__cormorant'/>
          <p className="p__opensans">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
            Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique.
            In Sed Odio Nec Aliquet Eu Proin Mauris Et.
          </p>
          <button className="custom__button">Know More </button>

        </div>

        <div className="app__aboutUs-content_knife flex__center">
          <img src={images.knife} alt= 'knife' />
        </div>

        <div className="app__aboutUs-content_history">

          <SubHeading text = 'Our History' textStyle='headtext__cormorant'/>
          <p className="p__opensans">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. 
            Vero Blanditiis Quidem Quod, 
            Omnis Veritatis Dolores Inventore Velit Ullam Facilis At.
          </p>
          <button className="custom__button">Know More </button>

        </div>

      </div>
      
      
      
    </div>
  )
}

export default AboutUs
