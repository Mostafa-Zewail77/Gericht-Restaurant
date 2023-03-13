import { SubHeading } from "../../components"
import { images } from "../../constants"
import './Chef.css'


function Chef() {
  return (
    <div className="app__chef app__wrapper section__padding app__bg">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src = {images.chef} alt ='chef'/>
      </div>
      <div className="app__wrapper_info">
      
          <SubHeading text="Chef's Word" textStyle="p__cormorant"/>
          <h1 className="headtext__cormorant">What We Believe In</h1>
        
        <div className="app__chef-content">

          <div className="app__chef-content_quote ">
            <img src={images.quote} alt= 'quote_img'/>
            <p className= 'p__opensans' >
            Lorem Ipsum Dolor Sit Amet,
            Consectetur Adipiscing Elit Auctor Sit
            </p>
          </div>
            <p className="p__opensans"> 
              Auctor Sit Iaculis In Arcu.
              Vulputate Nulla Lobortis Mauris Eget Sit.
              Nulla Scelerisque Scelerisque Congue Ac Consequat, 
              Aliquam Molestie Lectus Eu. 
              Congue Iaculis Integer Curabitur Semper Sit Nunc.
            </p>
        </div>
        <div className="app_chef-content_signing">
          <p className="p__cormorant" style={{
            color: '#DCCA87',
            fontSize: '32px' ,
            fontWeight:'400',
            marginBottom:'8px'
            }}>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign_image" />
        </div>
      </div>
    </div>
  )
}

export default Chef
