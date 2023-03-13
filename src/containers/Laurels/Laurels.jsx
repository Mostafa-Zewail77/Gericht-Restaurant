import { data, images } from '../../constants'
import { SubHeading } from '../../components'
import './laurels.css'


function AwardCard ({award:{imgUrl,title,subtitle}}) {
  return (
    <div className='app__laurels-awardCard ' style={{marginTop:'2rem'}} >
      <img src={imgUrl} alt= 'awards'/>
      <div className="app__laurels-awardCard-contnent">
        <p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>
        <p className='p__opensans'>{subtitle}</p>
      </div>
    </div>

  )
}


function Laurels() {
  return (
    <div className='app__laurels app__wrapper section__padding app__bg' id="awards" >
      <div className="app__wrapper_info">
        <SubHeading text='awards & recognition' textStyle= 'p__cormorant'/>
        <h1 className='headtext__cormorant'>Our Laurels</h1>
        <div className="app__laurels_awards" style={{margin:'1rem'}}>
          {
            data.awards.map((award)=> <AwardCard award={award} />)
          }
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels_img" />
      </div>
    </div>
  )
}

export default Laurels
