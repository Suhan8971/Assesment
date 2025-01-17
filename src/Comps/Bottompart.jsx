import React from 'react'
import pic1 from '../assets/profile3.webp'
import pic2 from '../assets/profile1.png'
import pic3 from '../assets/profile2.png'

const Bottompart = () => {
  return (
 <div>
        <div className="flex"></div>
      <h1 className='try-div'>Try Our Flexible Plans — Grew <br/> Mail~Plan Will Launch</h1>
     
    <div className="main">
        <div className="three-img">
       
          <img src={pic1} alt="User 1" className='pc1'/>
          <img   src={pic2} className='pc2' alt="User 2" />
           <img  src={pic3} className='pc1' alt="User 3" />
       </div>
       <div className="op">
        ~
       </div>
       <div className="text-we">
        <p>We received a great amount of leads <br/> in just 2 weeks timeline!</p>
       </div>




    </div>
     
      
    
</div>
  )
}

export default Bottompart
