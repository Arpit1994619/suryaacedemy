import React from 'react'

import image1 from './pagesIMAGES/MissionvisionImage/1.png'
import image2 from './pagesIMAGES/MissionvisionImage/2.png'
import image3 from './pagesIMAGES/MissionvisionImage/3.png'
import image4 from './pagesIMAGES/MissionvisionImage/4.png'
import image5 from './pagesIMAGES/MissionvisionImage/5.png'
import image6 from './pagesIMAGES/MissionvisionImage/6.png'
import image7 from './pagesIMAGES/MissionvisionImage/7.png'
import image8 from './pagesIMAGES/MissionvisionImage/8.png'
import image9 from './pagesIMAGES/MissionvisionImage/9.png'
 
import './pageCSS/Missionvision.css'

function Missionvision() {
  return (
    <>
    <div className="mission">
      <img src={image1} alt="image1" width="100%" />
    </div>


   <div className='mission1'>
    <h1>Our Mission</h1>
    <p>At Surya Academy, our mission is to empower students to realize their full potential by offering a
        comprehensive and holistic education that seamlessly integrates academic excellence, character
        development and social responsibility. We believe in fostering an environment that nurtures
        intellectual curiosity, emotional growth and ethical awareness, helping each student to excel in their
        studies and develop personal qualities that will guide them throughout their lives.</p>
    <p>At Surya Academy, our goal is to inspire students to become confident, compassionate and creative
        individuals who are well equipped with the skills, values and resilience needed to thrive in an
        ever-evolving world. We are committed to providing opportunities that encourage leadership, innovation
        and a deep sense of responsibility toward society, ensuring that our students are not only prepared for
        academic success but are also driven to make meaningful contributions to the global community. Through
        a balanced approach to education, we aim to cultivate well-rounded individuals who are capable of
        navigating the complexities of the future with integrity and purpose.</p>
   </div>


   <div className='mission2'>
    <img src={image2} alt="image2" width="100%" />
   </div>


   <div className='mission3'>
        <h1>Vision</h1>
        <p>Inspired by our guiding principle of empowerment, "Unite, Arise, Shine", Surya Academy vision is to
            create an institution where a harmonious community of learners, educators and stakeholders are
            working together to groom students to excel and shine on the path toward a brighter future.</p>
   </div>
 

   <div className='mission4'>
       <div className='mission4_div'>
        <img src={image3} alt="image3" width="60px" />
         <b>Unite</b>
         <p>We are in a whole different environment where dignity and respect are accorded to all.
            The marginalized is included; the unknown is acceptable. Students, teachers, parents and the
            larger community are empowered to work as one harmonious unit but sensitive to individuality. </p>
       </div>
       <div className='mission4_div'>
       <img src={image4} alt="image4" width="60px" />
         <b>Arise</b>
         <p>At the core of our vision is growth and empowerment. We seek to make every child learn the art of
            perceiving challenges as opportunities for personal growth, so that they develop a growth mindset
            and acquire skills and values to thrive in a dynamic world. We seek to advance every learner
            through innovative teaching methods, outstanding facilities and a dynamic curriculum. </p>
       </div>
       <div className='mission4_div'>
       <img src={image5} alt="image5" width="60px" />
         <b>Shine</b>
         <p>Surya Academy produces enlightened young men and women who shine with integrity, compassion and
            creativity. Our mission is to produce students as shining global citizens-full of knowledge,
            belongingness, belief in themselves and awareness of right and wrong to make a difference in their
            communities and far beyond.</p>
       </div>
   </div>


   <div className='mission5'>
       <div className='mission5_div1'>
        <h1>Our Benefits</h1>
        <p>At Surya Academy, we offer a dynamic and nurturing environment that promotes both academic and
            personal growth. With over 20 years of experience, we have consistently delivered excellence
            through a balanced approach to education. Our vibrant community encourages students to explore
            their passions, whether in academics, sports, arts or extracurricular activities. We prioritize
            personalized learning to ensure that each child’s unique potential is realized.</p>
            <button className='mission5_btn'>Contect Us <i class="ri-arrow-right-up-line"></i></button>
       </div>
       <div className='mission5_div2'>
        <div className='mission5_top'>
            <div className='mission5_top1'>
               <img src={image6} alt="image6" width="40px" />
               <b>Awesome Teachers</b>
               <p>Our dedicated teachers inspire students to excel academically and personally.</p>
            </div>
            <div className='mission5_top1'>
                <img src={image7} alt="image7" width="40px" />
                <b>CBSE Affiliated</b>
                <p>Surya Academy follows CBSE syllabus, offering classes from Pre-Primary to XII.</p>
            </div>
        </div>

        <div className='mission5_top'>
        <div className='mission5_top1'>
               <img src={image8} alt="image8" width="40px" />
               <b>Student Support Service</b>
               <p>We provide diverse student support, fostering growth, success and well-being</p>
            </div>
            <div className='mission5_top1'>
                <img src={image9} alt="image9" width="40px" />
                <b>Excellent Infrastructure</b>
                <p>Surya Academy offers state-of-the-art facilities supporting academic and personal growth.</p>
            </div>
        </div>
       </div>
   </div>
   </>
  )
}

export default Missionvision