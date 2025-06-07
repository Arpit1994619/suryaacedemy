import React from 'react'

import image1 from './pagesIMAGES/vicepresidentmessImage/1.png'
import image2 from './pagesIMAGES/vicepresidentmessImage/2.png'
import image3 from './pagesIMAGES/vicepresidentmessImage/3.png'
import image4 from './pagesIMAGES/vicepresidentmessImage/4.png'
import image5 from './pagesIMAGES/vicepresidentmessImage/5.png'
import image6 from './pagesIMAGES/vicepresidentmessImage/6.png'
import image7 from './pagesIMAGES/vicepresidentmessImage/7.png'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './pageCSS/Vicepresidentmess.css'

function Vicepresidentmess(){

//this code box vice3 slider code.
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
    <div className='vice'>
     <img src={image1} alt="image1" width="100%" />
    </div>


    <div className='vice1'>
        <h1>Vice President Message</h1>
        <div className='vice1_div'>
            <div className='vice1_div_div'>
                <img src={image2} alt="image2" />
            </div>
            <div className='vice1_div_div'>
                <p>Dear Parents,</p>
                <p>A warm welcome to Surya Academy, where we foster a love of learning, nurture creativity and
                    empower students to reach their full potential. Our dedicated faculty, staff and
                    administrators collaborate to provide a top notch education that prepares students for
                    success in the 21st century. At Surya Academy, we believe that every child deserves a 
                    personalized education that recognizes their unique strengths, interests and learning
                     style. Our vibrant learning community encourages academic excellence, creativity and
                    character development, ensuring that students become confident, compassionate and
                    responsible global citizens.</p>
                <p>I would like to assure all the parents that at Surya Academy, we will leave no stone
                    unturned to nurture and equip your children into becoming future leaders who will not only
                    excel in their academics but also become morally faultless, become mentally strong and
                    good citizens to have positive impact to the society. It will be my personal endeavor to
                    implement best education practice in our school so that our kids outshine in their life by
                    developing self confidence, self esteem, versatile personality and becoming competitive in
                    all the spheres of life.</p>
            </div>
        </div>
    </div>
 

<div className='vice2'>
   <p>I, firmly believe that with the proper participation and cooperation of all the stake
       holders viz. School faculty, Parents and Students, we can together do wonders to develop
     the child with subject-specific and interdisciplinary skills thereby ensuring they excel in
     all the domains of their lives including academics. Let us together join hands to shape the
     bright future for our students.</p><br/>
    <p>Regards, <br/><br/>Rajiv Hura<br/>M.tech , <br/>IIT Mumbai</p>
</div>


<div className='vice3'>
 <Slider {...loop} className="vice3_slider">
             <div className='vice3_slider_div'>
                <img src={image3} alt="image7"/>
             </div>
             <div className='vice3_slider_div'>
                <img src={image4} alt="image3" />
            </div>
             <div className='vice3_slider_div'>
                <img src={image5} alt="image4" />
            </div>
             <div className='vice3_slider_div'>
                <img src={image6} alt="image5" />
            </div>
             <div className='vice3_slider_div'>
                <img src={image7} alt="image6" />
            </div>
         </Slider>
</div>

    </>
  )
}
export default Vicepresidentmess