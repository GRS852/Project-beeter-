import './PresentCard.css'


function PresentCard({children, imageSrc}){
  return(
    <div className='card' >
      {imageSrc && <img src={imageSrc} alt="Card" className="card-image" />}
      <div className='box-content'>
        {children}
      </div>
    </div>
  
  )
}

export default PresentCard