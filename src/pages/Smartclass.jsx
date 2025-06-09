import React from 'react'

import image1 from './pagesIMAGES/smartclassImage/1.jpg'
import image2 from './pagesIMAGES/smartclassImage/2.jpeg'
import image3 from './pagesIMAGES/smartclassImage/3.jpg'
import image4 from './pagesIMAGES/smartclassImage/4.jpg'
import image5 from './pagesIMAGES/smartclassImage/5.jpg'
import image6 from './pagesIMAGES/smartclassImage/6.jpg'
import image7 from './pagesIMAGES/smartclassImage/7.jpeg'
import image8 from './pagesIMAGES/smartclassImage/8.jpg'
import image9 from './pagesIMAGES/smartclassImage/9.jpg'
import image10 from './pagesIMAGES/smartclassImage/10.jpg'
import image11 from './pagesIMAGES/smartclassImage/11.jpg'
import image12 from './pagesIMAGES/smartclassImage/12.jpg'
import image13 from './pagesIMAGES/smartclassImage/13.jpg'

import './pageCSS/Smartclass.css'

 function Smartclass() {
  return (
    <>
    <div className='smart'>
        <img src={image1} alt="image1" width="100%" />
    </div>


    <div className='smart1'>
        <h1>Boosting Learning with Smart Classrooms</h1>
        <img src={image2} alt="image2" />
    </div>


    <div className='smart2'>
        <div className='smart2_div1'>
            <h1>A Hub of Learning</h1>
            <p>At Surya Academy, every classroom is a place of knowledge, exploration and personal growth.
               We foster an environment where bright and ambitious students thrive, not only eager to learn
               but also to contribute to our vibrant, dynamic community.</p>
               <img src={image3} alt="image3" />
        </div>

         <div className='smart2_div2'>
             <img src={image4} alt="image4" />
             <h2>HYBRID LEARNING</h2>
             <p>Our teaching methodology blends the best of traditional and modern approaches to cater to the
                diverse needs of learners. The use of e-learning tools ensures personalized and effective
                delivery of lessons, making complex concepts simplerand more relatable.</p>
         </div>
    </div>


    <div className='smart3'>
        <div className='smart3_div1'>
            <h1>CLARITY OF CONCEPTS</h1>
            <p>The use of e-Learning tools ensures clarity of concepts. The innovative teaching aids combine
                impactful audio-visual elements, making lessons more accessible and enhancing long-term memory
                retention.</p>
               <img src={image5} alt="image5" />
        </div>

         <div className='smart3_div2'>
             <img src={image6} alt="image6" />
             <h2>INTERACTIVITY</h2>
             <p>Through interactive features such as games and quizzes, learning becomes an enjoyable and
                engaging journey. This fosters curiosity and creativity, while ensuring better academic
                performance.</p>
         </div>
    </div>


    <div className='smart4'>
        <div className='smart4_div1'>
            <h1>INDEPENDENT LEARNING</h1>
            <p>Our classrooms promote independent learning, encouraging students to study at their own pace .
                This supportive environment nurtures a sense of autonomy and responsibility in our
                students</p>
        </div>

         <div className='smart4_div2'>
             <img src={image7} alt="image6" />
             <h2>SMART SCHEDULING</h2>
             <p>Smart Scheduling system enable students to manage their time effectively, cover topics
                thoroughly and excel in both revisions and self-assessments.</p>
         </div>
    </div>

 
    <div className='smart5'>
        <h1>Class Room Gallery</h1>
       <div className='smart5_div'>
           <div className='smart5_div_div'>
             <img src={image8} alt="image8" width='100%' />
               <div className='smart5_hover'><i class="ri-add-circle-line"></i></div>
           </div>
           <div className='smart5_div_div'>
            <img src={image9} alt="image9" width='100%' />
               <div className='smart5_hover'><i class="ri-add-circle-line"></i></div>
           </div>
           <div className='smart5_div_div'>
            <img src={image10} alt="image10" width='100%' />
               <div className='smart5_hover'><i class="ri-add-circle-line"></i></div>
           </div>
           <div className='smart5_div_div'>
            <img src={image11} alt="image11" width='100%' />
               <div className='smart5_hover'><i class="ri-add-circle-line"></i></div>
           </div>
           <div className='smart5_div_div'>
            <img src={image12} alt="image12" width='100%' />
               <div className='smart5_hover'><i class="ri-add-circle-line"></i></div>
           </div>
           <div className='smart5_div_div'>
            <img src={image13} alt="image13" width='100%' />
               <div className='smart5_hover'><i class="ri-add-circle-line"></i></div>
           </div>
       </div>
    </div>

    </>
  )
}
export default Smartclass
