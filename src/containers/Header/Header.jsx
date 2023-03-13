import React from 'react'
import { SubHeading } from '../../components'
import images from '../../constants/images'
import './Header.css'

function Header() {
  return (
    <div className='app__header app__wrapper section__padding' id="home">
      <div className="app__wrapper_info">

        <SubHeading text= "Chase the new flavour" textStyle='p__cormorant'/>
        <h1 className='app__header-h1'>The Key To Fine Dining </h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
        GERIGHT Is A Restaurant Located In Egypt,
        Serving A Selection Of Fast Food, 
        Breakfast, Sandwiches. 
        They Have Been Reviewed 465 Times By Talabat Users, 
        With A Rating Of 4.5.
        </p>
        <button className="custom__button">Explore Menu</button>

      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt= 'welcome'/>
      </div>

    </div>
  )
}

export default Header
