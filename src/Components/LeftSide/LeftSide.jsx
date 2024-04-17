import React from 'react'
import './LeftSide.css'

function LeftSide({ imgPath }) {
  return (
    <div className='leftSide'>
        <img src={imgPath} className='img-banner' alt="Imagem" />
    </div>
  )
}

export default LeftSide