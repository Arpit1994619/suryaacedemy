import React from 'react'

import image1 from './pagesIMAGES/PreprimaryIMAGE/1.png'
import image2 from './pagesIMAGES/PreprimaryIMAGE/2.png'

import './pageCSS/Preprimary.css'

 function Preprimary() {
  return (
    <>
    <div className='pre'>
        <img src={image1} alt="image1" width='100%' />
    </div>

 
    <div className='pre1'>
        <h1>Pre-primary (Nursery, LKG & UKG)</h1>
        <p>At Surya Academy, we believe that a child's first step into school should ignite a lifelong love for
            learning. Our Pre-Primary education caters to children aged 3-5 years. With a dedicated and caring
            team, we create a nurturing environment that fosters exploration, discovery and growth.</p>
        <p>Learning at this level is enriched through a structured play-based curriculum, interactive field
            trips and innovative teaching methods, encouraging children to develop their natural abilities and
            talents. Through engaging and unconventional pedagogical approaches, we inspire our young learners
            to become curious, thoughtful and confident individuals.</p>
    </div>


    <div className='pre2'>
        <div className='pre2_div1'>
           <img src={image2} alt="image2" width='85%' />
        </div>
        <div className='pre2_div2'>
           <h1>Highlights of Our Curriculum</h1>
           <p>Our curriculum is thoughtfully designed to promote all-round development in a safe and
              stimulating environment. Key focus areas include:</p>

            <ul>
               <li><b>Language and Literacy Development :</b> Laying the foundation for communication and early reading
                     and writing skills.</li>
                <li><b>Numeracy Skills :</b> Developing a love for mathematics through fun activities and interactive
                      play.</li>
                <li><b>Physical Activities :</b> Enhancing motor skills and physical fitness through games and
                     exercise</li>
                <li><b>Social Skills and Teamwork :</b> Encouraging collaboration and interaction through group 
                      Play</li>
                <li><b>Parental Partnership :</b> Actively involving parents in the learning journey to ensure
                    holistic development.</li>
               </ul>
            
        </div>
    </div>


    <div className='pre3'>
        <h1>Our Approach</h1>
        <p>At Surya Academy, we aim to prepare children not just for school but for life. We provide a 
           supportive environment that nurtures their individual potential while fostering
            confidence and independence. As we say,<b>“EVERY CHILD IS A UNIVERSE WAITING TO UNFOLD.”</b></p>
        <h1>Expected Outcomes</h1>   
        <p>By the time children complete their Pre-Primary education, they are expected to have:</p> 

        <ul>
            <li>Developed social skills and the ability to collaborate with peers.</li>
            <li>Uncovered their creative talents through hands-on activities.</li>
            <li>Gained an enthusiasm for learning and a curious mindset.</li>
            <li>Acquired the ability to read, write and use simple mathematics.</li>
            <li>Built a solid foundation for their lifelong educational journey.</li>
        </ul>
        <b>At Surya Academy, we nurture every child’s unique potential, ensuring they are well-prepared to
            step confidently into primary school and beyond.</b>
    </div>

    </>
  )
}
export default Preprimary
