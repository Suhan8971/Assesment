import React from 'react'
import pic from '../assets/starr-removebg.png'
import pic1 from '../assets/mimg2.png'
import pic2 from '../assets/mimg1.png'

const Middlesection = () => {
  return (
    <div>
         <h1 className='bot-h1'>Grow Your Business,  No <br/> Matter The Size.</h1>
      <div className="features">
        
        <div className="middle-div">
            <img src={pic} alt="" className="m-img" />
        </div>
        <div className='middle-div1'>
        <p>Websites</p>
        <p>Social Media</p>
        <p>Newsletters</p>
        </div>
       <div className='middle-div2'>
        <p>Marketing API</p>
        <p>Release Notes</p>
      </div>
      </div>
      <div className="middle-images">
        <div className="mimg1">
        <img src={pic1}alt="Middle image" className='m1' />
        </div>
        <div >
        <img src={pic2} alt="Middle image" className="mimg2"  />
        </div>
      </div>
    </div>
  )
}

export default Middlesection
