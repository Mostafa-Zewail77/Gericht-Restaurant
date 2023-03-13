import video from '../../videos/meal.mp4'
import './Intro.css'
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import { useRef, useState } from 'react'

function Intro() {
  const [playVideo, setplayVideo] = useState(false);
  const vidRef = useRef()

  const handleVideo = ()=>{
    setplayVideo(!playVideo)
    console.log(playVideo)
    if(playVideo){
      vidRef.current.pause()
    }else{
      vidRef.current.play()
    }
  } 

  return (
    <div className='app__intro'> 
    
      <video
        src={video}
        ref = {vidRef}
        loop
        muted
        controls = {false}
        typeof = 'video/mp4'      
      />
      <div className="app__intro-overlay flex__center">
        <div className="app__intro-ovrelay_circle flex__center"
          onClick={handleVideo}
        >
          {
            playVideo 
            ?<BsPauseFill color='#fff' fontSize={30} /> 
            :<BsFillPlayFill color='#fff' fontSize={30}/> 
          }
        </div>
      </div>
    </div>
  )
}

export default Intro
