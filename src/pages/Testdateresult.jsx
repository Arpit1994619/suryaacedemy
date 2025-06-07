import React, {useState} from 'react'

import image1 from './pagesIMAGES/testdateresultImage/1.png'
import image2 from './pagesIMAGES/testdateresultImage/2.png'
import image3 from './pagesIMAGES/testdateresultImage/3.png'
import image4 from './pagesIMAGES/testdateresultImage/4.png'
import image5 from './pagesIMAGES/testdateresultImage/5.png'
import image6 from './pagesIMAGES/testdateresultImage/6.png'
import image7 from './pagesIMAGES/testdateresultImage/7.png'
import image8 from './pagesIMAGES/testdateresultImage/8.png'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import './pageCSS/Testdateresult.css'

 function Testdateresult() {

//this code box text2 slider code.
    const loop = {
        dots: true,
        infinite: true,
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
    <div className='text'>
         <img src={image1} alt="image1" width="100%" />
    </div>


   <div className='text1'>
      <h1>Surya Academy Entrance Test & Results</h1>
      <p className='text1_p'>Surya Academy's Entrance Test will be conducted soon. Results will be announced through the school
        website and notice board. Selected candidates will receive notifications via email and SMS. Wishing
        all applicants the best for their admissions journey!</p>
        <div className='text1_div'>
          <div className='text1_div_div'>
            <p><b>Title :</b> Lorem ipsum dolor sit. Lorem ipsum dolor sit</p>
            <p><b>Examination Date :</b> 20-8-24</p>
            <p><b>Result Issue Date :</b> 24-5-25</p>
            <button><i class="ri-arrow-down-fill"></i>Download Results PDF</button>
          </div>
          <div className='text1_div_div'>
             <p><b>Title :</b> Lorem ipsum dolor sit. Lorem ipsum dolor sit</p>
            <p><b>Examination Date :</b> 20-8-24</p>
            <p><b>Result Issue Date :</b> 24-5-25</p>
            <button><i class="ri-arrow-down-fill"></i>Download Results PDF</button>
          </div>
        </div>
        <div className='text1_div'>
          <div className='text1_div_div'>
            <p><b>Title :</b> Lorem ipsum dolor sit. Lorem ipsum dolor sit</p>
            <p><b>Examination Date :</b> 20-8-24</p>
            <p><b>Result Issue Date :</b> 24-5-25</p>
            <button><i class="ri-arrow-down-fill"></i>Download Results PDF</button>
          </div>
          <div className='text1_div_div'>
             <p><b>Title :</b> Lorem ipsum dolor sit. Lorem ipsum dolor sit</p>
            <p><b>Examination Date :</b> 20-8-24</p>
            <p><b>Result Issue Date :</b> 24-5-25</p>
            <button><i class="ri-arrow-down-fill"></i>Download Results PDF</button>
          </div>
        </div>
   </div>


   <div className='text2'>
    <h1>Follow on Facebook</h1>

     <div className='text2_div'>
     <Slider {...loop} className="text2_slider">
                 <div className='text2_slider_div'>
                    <img src={image2} alt="image2"/>
                 </div>
                 <div className='text2_slider_div'>
                    <img src={image3} alt="image3" />
                </div>
                 <div className='text2_slider_div'>
                    <img src={image4} alt="image4" />
                </div>
                 <div className='text2_slider_div'>
                    <img src={image5} alt="image5" />
                </div>
                 <div className='text2_slider_div'>
                    <img src={image6} alt="image6" />
                </div>
                 <div className='text2_slider_div'>
                    <img src={image7} alt="image7" />
                </div>
                 <div className='text2_slider_div'>
                    <img src={image8} alt="image8" />
                </div>
             </Slider>
             </div>
    </div>
   

    </>
  )
}

export default Testdateresult
