import React from 'react'

import image1 from './pagesIMAGES/CurriculumImage/1.png'
import image2 from './pagesIMAGES/CurriculumImage/2.png'
import image3 from './pagesIMAGES/CurriculumImage/3.png'
import image4 from './pagesIMAGES/CurriculumImage/4.png'
import image5 from './pagesIMAGES/CurriculumImage/5.png'
import image6 from './pagesIMAGES/CurriculumImage/6.png'
import image7 from './pagesIMAGES/CurriculumImage/7.png'
import image8 from './pagesIMAGES/CurriculumImage/8.png'
import image9 from './pagesIMAGES/CurriculumImage/9.png'
import image10 from './pagesIMAGES/CurriculumImage/10.png'
import image11 from './pagesIMAGES/CurriculumImage/11.png'
import image12 from './pagesIMAGES/CurriculumImage/12.png'
import image13 from './pagesIMAGES/CurriculumImage/13.png'
import image14 from './pagesIMAGES/CurriculumImage/14.png'
import image15 from './pagesIMAGES/CurriculumImage/15.png'
import image16 from './pagesIMAGES/CurriculumImage/16.png'

import './pageCSS/Curriculum.css'

function Curriculum() {
  return (
    <>
    <div className='curri'>
       <img src={image1} alt="image1" width="100%" />
    </div>


    <div className='curri1'>
        <h1>Our Curriculum</h1>
        <p className='curri1_p'>Surya Academy is affiliated to Central Board of Secondary Education (CBSE), New Delhi and follows
           the CBSE-recommended syllabus. Our teaching methods are aligned with the National Education Policy
           (NEP) 2020, emphasizing holistic development. The school offers classes from Pre-Primary to Class
           XII, with English and Hindi as the mediums of instruction, as recommended by NEP.</p>

           <div className='curri1_div'>
               <div className='curri1_div_div'>
                    <img src={image2} alt="image2" />
                    <b>CBSE Affiliation</b>
                    <p>Surya Academy follows the CBSE curriculum, ensuring a structured and standardized
                        education aligned with national academic benchmarks.</p>
               </div>
               <div className='curri1_div_div'>
                   <img src={image3} alt="image3" />
                   <b>NEP 2020 Integration</b>
                   <p>Our curriculum is designed in accordance with the National Education Policy (NEP) 2020,
                      promoting holistic development and skill-based learning.</p>
               </div>
               <div className='curri1_div_div'>
                   <img src={image4} alt="image4" />
                   <b>Multilingual Approach</b>
                   <p>The medium of instruction is both English and Hindi , as recommended by NEP, ensuring
                      strong language proficiency.</p>
               </div>
               <div className='curri1_div_div'>
                    <img src={image5} alt="image5" />
                    <b>Holistic Development</b>
                    <p>Our education system nurtures intellectual, emotional and social growth, preparing
                       students for real-world challenges beyond academics.</p>
               </div>
               <div className='curri1_div_div'>
                   <img src={image6} alt="image6" />
                   <b>Innovative Teaching Methods</b>
                   <p>We incorporate activity-based learning, experiential education and digital tools to
                      enhance engagement and understanding.</p>
               </div>
               <div className='curri1_div_div'>
                   <img src={image7} alt="image7" />
                   <b>Interdisciplinary Learning</b>
                   <p>The curriculum fosters critical thinking by integrating subject-specific knowledge
                      with real-world applications.</p>
               </div>        
               <div className='curri1_div_div'>
                    <img src={image8} alt="image8" />
                    <b>Individual Progress Monitoring</b>
                    <p>Each student’s academic journey is tracked, allowing for personalized guidance and
                        skill enhancement.</p>
               </div>
               <div className='curri1_div_div'>
                   <img src={image9} alt="image9" />
                   <b>Remedial Support</b>
                   <p>Students needing additional assistance receive special attention from experienced
                       faculty to help them improve their performance.</p>
               </div>
               <div className='curri1_div_div'>
                   <img src={image10} alt="image10" />
                   <b>Senior Secondary Streams</b>
                   <p>We offer Science (PCM/PCB), Commerce and Humanities streams, allowing students to
                      explore diverse career opportunities.</p>
               </div>
               <div className='curri1_div_div'>
                    <img src={image11} alt="image11" />
                    <b>Career Guidance & Skill Development</b>
                    <p>Senior students receive mentorship and counseling to prepare them for higher education
                         and future careers.</p>
               </div>
               <div className='curri1_div_div'>
                   <img src={image12} alt="image12" />
                   <b>Value-Based Education</b>
                   <p>Moral and ethical learning is integrated into the curriculum to develop responsible 
                      compassionate global citizens.</p>
               </div> 
               <div className='curri1_div_div'>
                   <img src={image13} alt="image13" />
                   <b>Extracurricular Enrichment</b>
                   <p>Students engage in arts, sports, music and other co-curricular activities to enhance
                      creativity, leadership and teamwork.</p>
               </div>
               <div className='curri1_div_div'>
                    <img src={image14} alt="image14" />
                    <b>Technology-Enabled Learning</b>
                    <p>Smart classrooms are utilized to enhance the learning experience.</p>
               </div>
               <div className='curri1_div_div'>
                   <img src={image15} alt="image15" />
                   <b>Project-Based Learning</b>
                   <p>Students are encouraged to participate in projects, competitions to develop analytical
                       skills.</p>
               </div> 
               <div className='curri1_div_div'>
                   <img src={image16} alt="image16" />
                   <b>Environmental & Social Awareness</b>
                   <p>Sustainability and community service initiatives are incorporated to instill a sense of
                      responsibility toward society and nature.</p>
               </div>
           </div>
    </div>
    </>
  )
}
export default Curriculum
