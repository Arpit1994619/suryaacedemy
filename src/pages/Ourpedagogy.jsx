import React from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from './pagesIMAGES/OurpedagogyImage/1.png'
import image2 from './pagesIMAGES/OurpedagogyImage/2.png'
import image3 from './pagesIMAGES/OurpedagogyImage/3.png'
import image4 from './pagesIMAGES/OurpedagogyImage/4.png'
import image5 from './pagesIMAGES/OurpedagogyImage/5.png'


import './pageCSS/Ourpedagogy.css'

function Ourpedagogy() {

    /* this code for ourpeda2 */
    const loop = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
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
     
    <div className='ourpeda'>
        <img src={image1} alt="image1" width="100%" />
    </div>


    <div className='ourpeda1'>
        <h1>Our Pedagogy</h1>
        <p>Create a multidimensional curriculum that cultivates intellectual curiosity, mental well-being,
            physical health, socio-emotional intelligence and spiritual awareness, ultimately leading to the
            development of confident ,capable and compassionate individuals. Excellent Infrastructure With our 
            modern and well-equipped infrastructure, we provide a supportive and interactive learning
            environment that facilitates effective knowledge sharing and student success. Personal Attention
            Our student-centric approach involves close monitoring of each child's progress, identifying areas
            of strength and weakness and providing targeted support to ensure they develop the skills, confidence and character needed to succeed in life.
         </p>
    </div>


    <div className='ourpeda2'>
    <Slider {...loop} className="ourpeda2_slider">
             <div className='ourpeda2_slider_div'>
                <img src={image2} alt="image2"/>
                <h1>Excellence</h1>
                <p>We believe in unlocking hidden potential of every child, guiding them to achieve acedemic
                     Excellence and cultivating a winning spirit that propels them towards greatness. our goal
                     is to inspire a lifelong pursuit of excellence.</p>
             </div>
             <div className='ourpeda2_slider_div'>
                <img src={image3} alt="image3" />
                <h1>Holistic Development</h1>
                <p>Our eduction system is tailored to provide a holistic and inclusive learning environment,
                    where each child can thrive grow and develop into a confident, capable and compassionate
                    individual. 
                </p>
             </div>
             <div className='ourpeda2_slider_div'>
                <img src={image4} alt="image4" />
                <h1>Excellent infrastructure</h1>
                <p>with our modern and equipped, infrastructure we provide a supportive and intrective learning
                    environment that Facilities effective knowladge sharing and student success.
                </p>
             </div>
             <div className='ourpeda2_slider_div'>
                <img src={image4} alt="image4" />
                <h1>persinal Attenstion</h1>
                <p>Our student-centric approced involves close monitering of each child progress identifying
                    area of strangth and weakness and providing target support to ensure they develop the skills
                    confidence and charecture needed to succeed in life.</p>
             </div>
             <div className='ourpeda2_slider_div'>
                <img src={image5} alt="image5" />
                <h1>Safety and Security</h1>
                <p>Safety and security ensure protection from harm, danger, or loss, promoting stability,
                    peace, trust, and well-being in all environments.</p>
             </div>
         </Slider>
    </div>
    </>
  )
}
export default Ourpedagogy
