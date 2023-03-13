import { SubHeading, Menuitem } from "../../components"
import {data, images} from '../../constants' 
import './Menu.css'
function Menu() {
  return (
    <div className="app__menucontainer flex__center section__padding" id= 'menu'>
      <div className="app__menucontainer-heading">
        <SubHeading text= 'Menu That Fists Your Palatte' textStyle= 'p__cormorant'/>
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div  className= 'app__menucontainer-menu'>

        <div className="app__menucontainer-menu_wine flex__center">
          <h2 className="app__menucontainer-menu_wine-header p__cormorant" 
            style={{fontSize: '45px',fontWeight:'600'}}>
            Wine & Beer
          </h2>
          <div className="app__menucontainer-menu_menuitems">

            {
              data.wines.map((wine, index)=>(
                
                <Menuitem  key={wine.title + index} title= {wine.title} tags = {wine.tags} price ={wine.price}/>
              ))
            }

          </div>

        </div>

        <div className="app__menucontainer-menu_img">
          <img src= {images.menu} alt= 'menu_img '/>
        </div>
        <div className="app__menucontianer-menu_cocktails flex__center">
          <h2 className="app__menucontianer-menu_cocktails-header  p__cormorant"
            style={{fontSize: '45px'}}>
            Cocktails
          </h2>

          <div className="app__menucontainer-menu_menuitems">

          {
            data.cocktails.map((cocktail, index)=>(
              
              <Menuitem  key={cocktail.title + index} title= {cocktail.title} tags = {cocktail.tags} price ={cocktail.price}/>
            ))
          }

          </div>

        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">View More</button>
      </div>
    </div>
  )
}

export default Menu
