import React from 'react'
import './single.css'

const Single = (prop) => {
  return (
    <section className='product'>
        <div className='image'>
            <img src="bottle-img.webp" alt="bottle" />
            </div>
            <div className='text'>
            <span className='tag-1'>Canify</span><br />
            <p className='thc'>THC {prop.temp}%</p> 
            <p className='cbd'>CBD 1%</p> <br /><br />
            <p className='p-name'>{prop.title}</p>
            <br />
            <p  className='left' >Kultivar</p>
            <p className='right'>{prop.flavor}</p><br />
            <p className='left'>Genetik</p>
            <p className='right'>Hybrid</p><br />
            <div className='cont'>
                <h2 className='Price'>€11,66</h2>
                <p className='in_den'>in den Warenikorb</p>

            </div>
            
        </div>
        


    </section>

  )
}

export default Single
