import './Gallery.css'
import {images} from '../../constants'
import {SubHeading} from '../../components'
import {BsArrowLeftShort, BsArrowRightShort, BsInstagram} from 'react-icons/bs'
import { useRef } from 'react'
const galleryImages = [images.gallery01, images.gallery02, images.gallery03 , images.gallery04 ]

function Gallery() {
  const scrollRef = useRef(null)
  

  const scroll = (direction)=>{

    const {current} = scrollRef;

    direction === 'left' 
      ?current.scrollLeft -= 300
      :current.scrollLeft += 300
  }


  return (
    <div className='app__gallery flex__center' >
      <div className="app__gallery-content">
        <SubHeading text='Instagram' textStyle='p__cormorant'/>
        <h2 className='headtext__cormorant'> Photo Gallery</h2>
        <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet,
          Consectetur Adipiscing Elit. 
          Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque 
          Egestas Mu.
        </p>
        <button className='custom__button'>View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {
            galleryImages.map((img)=>(
              <div className="app__gallery-images_card flex__center">
                <img src={img} alt="gallery_image" />
                <BsInstagram className='image_icon'/>
              </div>
            ))
          }
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={()=>{scroll('left')}}  />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={()=>{ scroll('right')}} />
        </div>
      </div>
    </div>
  )
}

export default Gallery
