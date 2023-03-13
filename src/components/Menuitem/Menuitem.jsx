import './Menuitem.css'

function Menuitem({title, tags, price}) {
  return (
    <div className='menu__menuitem'>
      <div className="menu__menuitem-head flex__center">

        <div className="menu__menuitem-head_title">
          <p  className='p__cormorant' style={{ color: '#DCCA87' }}>{title} </p>
        </div>

        <div className="menu__menuitem-head_dash"
          style={{
            background: '#DCCA87',
            height: '1px',
            width: '90px',
            margin:'0 1rem'
            }}/>

        <div className="menu__menuitem-head_price">
          <p className='p__cormorant'>{price} </p>
        </div>
      </div>
    
      <div className="menu__menuitem-tags">
        <p className='p__opensans' style={{ color: '#AAA' }}> {tags} </p> 
      </div>
    </div>
  )
}

export default Menuitem
