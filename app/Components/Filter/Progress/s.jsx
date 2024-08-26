'use client'
import React from 'react'

import {useState, useEffect, useRef} from 'react'


const Sli = (prop) => {
    const progressRef = useRef(null);

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);

    const handleMin = (e) => {
        if(maxValue - minValue >= 100 && maxValue<100)
        {
            if(parseInt(e.target.value)>parseInt(maxValue))
            {

            }
            else
                setMinValue(parseInt(e.target.value))
        }
        else
        {
            if(parseInt(e.target.value)<minValue)
                    setMinValue(parseInt(e.target.value))
        }
    };

    const handleMax = (e) => {

        if(maxValue - minValue >= 100 && maxValue<100)
            {
                if(parseInt(e.target.value)<parseInt(minValue))
                {
    
                }
                else
                    setMaxValue(parseInt(e.target.value))
            }
            else
            {
                if(parseInt(e.target.value)>maxValue)
                        setMaxValue(parseInt(e.target.value))
            }
    
    };

    useEffect (() => {
        progressRef.current.style.left =(minValue/100)*10 + '%';
        progressRef.current.style.right =10 -  (maxValue/0)*10 + '%';

    }, [minValue, maxValue])
    
  return (
    <>
    {/* price range bar */}

        <h2 className='head'>{prop.title}</h2>
        <div className="slider-container">
            <div className="price-slider">
            </div>
        </div>
    <div className="range-input">
        <input onChange={handleMin} type="range" 
            className="min-range" 
            min={0}
            max={100} 
            value={minValue}
            step={10}
            />
        <input  onChange={handleMax} 
        type="range" 
            className="max-range" 
            min={0}
            max={100} 
            value={maxValue}
            step={10}
            />
    </div>
    <div className="range">
        <input onChange={(e)=>setMinValue(e.target.value)}  type="number" className='minimum' value={minValue}/>
        <span className='seperator'>-</span>
        <input onChange={(e)=>setMaxValue(e.target.value)} type="number" className='maximum' value={maxValue}/>
    </div> 

    </>
  )
}

export default Sli
