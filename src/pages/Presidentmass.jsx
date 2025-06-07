import React from 'react'

import image1 from './pagesIMAGES/PresidentmassImage/1.png'
import image2 from './pagesIMAGES/PresidentmassImage/2.png'
import image3 from './pagesIMAGES/PresidentmassImage/3.png'
import image4 from './pagesIMAGES/PresidentmassImage/4.png'
import image5 from './pagesIMAGES/PresidentmassImage/5.png'
import image6 from './pagesIMAGES/PresidentmassImage/6.png'
import image7 from './pagesIMAGES/PresidentmassImage/7.png'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './pageCSS/Presidentmass.css'

function Presidentmass() {

    /* this code for president2 */
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
    <div className='president'>
     <img src={image1} alt="image1" width="100%" />
    </div>

 
    <div className='president1'>
        <h1>President's Message</h1>
        <div className='president1_div'>
            <div className='president1_div_div'>
               <img src={image2} alt="image2" />
            </div>
            <div className='president1_div_div'>
                <p>Dear Parents,</p>
                <p>As we stand at the threshold of a new era in education, I am reminded of the wise words
                   of our nation's visionaries, who believed that the future of our great nation lies in the
                  minds of our children. At Surya Academy, we are committed to nurturing these young minds,
                 fostering a love of learning that will stay with them throughout their lives.</p>
                <p>n today's fast-paced world, where materialism often takes centre stage, we must ensure
                   that our children are grounded in the values that have made our nation great. Our School is
                  dedicated to providing a holistic education that prepares students to succeed not just
                academically, but also socially, emotionally and morally.</p>
                <p>With a team of dedicated teachers, state-of-the-art facilities and a curriculum that
                  blends tradition with innovation, we are confident that Surya Academy will become a
                beacon of excellence in education. I invite you to join us on this journey, as we shape
                the minds that will shape our future.</p>
                <p><b>Regards,</b></p>
                <p><b>Sanjeev Arora</b></p>
            </div>
        </div>
    </div>


    <div className='president2'>
    <Slider {...loop} className="president2_slider">
             <div className='president2_slider_div'>
                <img src={image7} alt="image7"/>
             </div>
             <div className='president2_slider_div'>
                <img src={image3} alt="image3" />
            </div>
             <div className='president2_slider_div'>
                <img src={image4} alt="image4" />
            </div>
             <div className='president2_slider_div'>
                <img src={image5} alt="image5" />
            </div>
             <div className='president2_slider_div'>
                <img src={image6} alt="image6" />
            </div>
         </Slider>
    </div>

    </>
  )
}

export default Presidentmass