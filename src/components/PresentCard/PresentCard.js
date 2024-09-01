import './PresentCard.css'


function PresentCard({children}){
  return(
    <div className='card'>
      <div className='box-content'>
        {children}
      </div>
    </div>
  
  )
}

export default PresentCard