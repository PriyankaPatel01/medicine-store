import React from 'react'
import Single from './Single/Single'
import './product.css'

const Product = () => {
  return (
    <div className='prod'>
    <div className='contain'>
        <div className="row1">
        <Single title='Cannabis Flos 18/1 PT Mango' flavor='mango' temp='18'/>
        <Single title='Cannabis Flos 18/1 PT Mango' flavor='mango' temp='18'/>
        <Single title='Cannabis Flos 18/1 PT Mango' flavor='mango' temp='18'/>
        </div>
        <div className="row1">
            <Single title='Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify' flavor='Pink Kush' temp='25'/>
            <Single title='Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify' flavor='Pink Kush' temp='25'/>
            <Single title='Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify' flavor='Pink Kush' temp='25'/>
        </div>
        <div className="row1">
            <Single title='Cannabis Flos 18/1 PT Mango' flavor='mango' temp='18'/>
            <Single title='Cannabis Flos 18/1 PT Mango' flavor='mango' temp='18'/>
            <Single title='Cannabis Flos 18/1 PT Mango' flavor='mango' temp='18'/>
        </div>
    </div>
    <p className='pages'>&#8592; 1 2 3 ... 12 &#8594;</p>
    
    </div>
  )
}

export default Product
