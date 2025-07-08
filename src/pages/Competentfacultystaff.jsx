import React, { useEffect, useState, useRef }  from 'react'

import { NavLink } from 'react-router-dom'

import image1 from './pagesIMAGES/competentfacultystaffImage/1.jpg'
import image2 from './pagesIMAGES/competentfacultystaffImage/2.png'
import image3 from './pagesIMAGES/competentfacultystaffImage/3.png'
import image4 from './pagesIMAGES/competentfacultystaffImage/4.png'
import image5 from './pagesIMAGES/competentfacultystaffImage/5.png'
import image6 from './pagesIMAGES/competentfacultystaffImage/6.png'
import image7 from './pagesIMAGES/competentfacultystaffImage/7.png'
import image8 from './pagesIMAGES/competentfacultystaffImage/8.png'
import image9 from './pagesIMAGES/competentfacultystaffImage/9.png'


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './pageCSS/Competentfacultystaff.css'

 function Competentfacultystaff() {

    //this code competent2 slider code.
    const loop = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <>
    <div className='competent'>
        <img src={image1} alt="image1"/>
    </div>
 

    <div className='competent1'>
        <h1>Competent & Dedicated Team</h1>
        <p>At Surya Academy, we take full responsibility for our students' overall development, ensuring they
           become successful individuals and responsible citizens. Our highly experienced and well-trained
           teachers play a crucial role in grooming the children towards achieving excellence.</p>
        <h2>Stringent Selection Process</h2>
        <p><span>01.</span> Faculty and staff undergo a rigorous recruitment process to ensure quality education.</p>
        <p><span>02.</span> Candidates are shortlisted based on experience, qualifications and expertise in their subject area.</p>
        <p><span>03.</span> A multi-step assessment, including personality evaluation, subject knowledge test and classroom demonstration, ensures the best selection.</p>
        <p><span>04.</span> Student feedback is considered during the evaluation process before final recruitment.</p>
        <p><span>05.</span> The final selection involves an interview with senior faculty and discussions with management.</p>

        <h2>Continuous Training & Development</h2>
        <p><span>01.</span> Faculty attend regular training programs to stay updated with new advancements in education.</p>
        <p><span>02.</span> CBSE-organized workshops help teachers enhance teaching methodologies, assessment strategies and subject expertise.</p>
        <p><span>03.</span> Ongoing training fosters innovative teaching approaches and effective student engagement.</p>

        <h2>Passion for Excellence</h2>
        <p><span>01.</span> Our teachers are subject experts and excellence mentors, shaping students' academic and personal growth.</p>
        <p><span>02.</span> Our Faculty focuses on holistic development, enhancing students' personalities and instilling confidence.</p>
        <p><span>03.</span> Lessons are designed to be coherent, engaging and impactful, maximizing student learning outcomes.</p>
        <p><span>04.</span> The faculty's dedication ensures that every student achieves their full potential</p>
        
    </div>


    <div className='competent2'>
        
        <Slider {...loop} className="competent2_slider">
             <div className='competent2_slider_div'>
                <img src={image2} alt="image2"/>
             </div>
             <div className='competent2_slider_div'>
                <img src={image3} alt="image3" />
            </div>
             <div className='competent2_slider_div'>
                <img src={image4} alt="image4" />
            </div>
             <div className='competent2_slider_div'>
                <img src={image5} alt="image5" />
            </div>
             <div className='competent2_slider_div'>
                <img src={image6} alt="image6" />
            </div>
            <div className='competent2_slider_div'>
                <img src={image7} alt="image7" />
            </div>
             <div className='competent2_slider_div'>
                <img src={image8} alt="image8" />
            </div>
            <div className='competent2_slider_div'>
                <img src={image9} alt="image9" />
            </div>
            <div className='competent2_slider_div'>
                <img src={image2} alt="image9" />
            </div>
            <div className='competent2_slider_div'>
                <img src={image3} alt="image9" />
            </div>
            <div className='competent2_slider_div'>
                <img src={image4} alt="image9" />
            </div>
         </Slider>
 
    </div>
  
    </>
  )
}
export default Competentfacultystaff
