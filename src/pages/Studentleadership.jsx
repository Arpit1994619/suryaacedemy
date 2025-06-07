import React from 'react'

import image1 from './pagesIMAGES/studentleadershipImage/1.png'
import image2 from './pagesIMAGES/studentleadershipImage/2.png'
import image3 from './pagesIMAGES/studentleadershipImage/3.png'
import image4 from './pagesIMAGES/studentleadershipImage/4.png'
import image5 from './pagesIMAGES/studentleadershipImage/5.png'
import image6 from './pagesIMAGES/studentleadershipImage/6.png'
import image7 from './pagesIMAGES/studentleadershipImage/7.png'

import './pageCSS/Studentleadership.css'

 function Studentleadership() {
  return (
    <>
    <div className='student'>
        <img src={image1} alt="image1" width="100%" />
    </div>

 
  <div className='student1'>
    <h1>Student Leadership Team</h1>
    <div className='student1_div'>
        <div className='student1_div_div'>
             <div className='student1_img'>
                 <img src={image2} alt="image2" width="100%" />
             </div>
             <h2>Shaurya Ranjan</h2>
             <p>Head Boy</p>
       </div>

       <div className='student1_div_div'>
       <div className='student1_img'>
                 <img src={image3} alt="image2" width="100%" />
             </div>
             <h2>Supriya Singh</h2>
             <p> Head Girl</p>
       </div>

       <div className='student1_div_div'>
       <div className='student1_img'>
                 <img src={image4} alt="image2" width="100%" />
             </div>
             <h2>Rehan Ahmad</h2>
             <p>Vice Captain</p>
       </div>

       <div className='student1_div_div'>
       <div className='student1_img'>
                 <img src={image5} alt="image2" width="100%" />
             </div>
             <h2>Sonam Mall</h2>
             <p>Vice Captain</p>
       </div>

       <div className='student1_div_div'>
       <div className='student1_img'>
                 <img src={image6} alt="image2" width="100%" />
             </div>
             <h2>Ziya Singh</h2>
             <p>Cultural Minister</p>
       </div>

       <div className='student1_div_div'>
       <div className='student1_img'>
                 <img src={image7} alt="image2" width="100%" />
             </div>
             <h2>Sahil Singh</h2>
             <p>Sports Minister</p>
       </div>

       <div className='student1_div_div'></div>
       <div className='student1_div_div'></div>
    </div>
  </div>
  </>
  )
}
export default Studentleadership
