import images from '../../constants/images'

const fontStyle= ["p__cormorant", "headtext__cormorant"]

function SubHeading({text ,textStyle}) {
  const checkStyle = fontStyle.includes(textStyle)? textStyle: fontStyle[0]
  
  return (
    <div style={{marginBottom: '1rem'}}>
      <h2 className={checkStyle}>{text}</h2>
      
      <img src={images.spoon} alt= 'spoon' className="spoon__img" />
    </div>
  )
}

export default SubHeading
