import React from 'react'

import image1 from './pagesIMAGES/ManagementteamImage/1.png'
import image2 from './pagesIMAGES/ManagementteamImage/2.png'
import image3 from './pagesIMAGES/ManagementteamImage/3.png'
import image4 from './pagesIMAGES/ManagementteamImage/4.png'

import './pageCSS/Managementteam.css'

function Managementteam() {
  return (
    <>
    <div className='management'>
        <img src={image1} alt="image1" width="100%" />
    </div>


    <div className='management1'>
        <div className='management1_div1'>
            <img src={image2} alt="image2" />
        </div>
        <div className='management1_div2'>
            <b>Sanjeev Arora President</b>
            <p>Sanjeev Arora brings over 25 years of invaluable experience in agro-industrial management,
               with a strong commitment to fostering education and community growth. As a founding member and
               dedicated supporter of Surya Academy, he has played a key role in shaping the school’s
               development, ensuring its continued success and excellence. His leadership and unwavering
              vision have been integral to creating an environment where students thrive academically,
              socially and personally.</p>
              <p>Mr. Arora is a respected and renowned figure in the business world, known for his strategic
                thinking and passion for progress. His expertise extends beyond the corporate sphere,
                as he has continuously provided guidance to Surya Academy, shaping its future and ensuring
                the school remains a place of innovation, creativity and academic rigor. Under his leadership,
                Surya Academy continues to grow as a beacon of learning, inspiring the next generation of 
                leaders and thinkers.</p>
        </div>
    </div>


    <div className='managementt2'>
        <div className='management2_div1'>
            <img src={image3} alt="image3" />
        </div>
        <div className='management2_div2'>
            <b>Rajiv Hura Vice President</b>
            <p>Rajiv Hura, a distinguished alumnus of the Indian Institute of Technology, Mumbai, joined 
               Surya Academy as an Advisor in 2024. With over 40 years of extensive corporate experience,
              Mr. Hura has worked with numerous national and multinational companies, earning a reputation for
             his strategic acumen and leadership. His diverse experience in the corporate world equips him 
             with a unique perspective to guide and support Surya Academy’s growth and development.</p>
            <p>As an Advisor, Mr. Hura oversees the overall functioning of the school, ensuring that it
               operates smoothly and continues to progress towards its educational goals. His leadership and
               expertise contribute significantly to the school’s mission of providing a nurturing and
            high-quality learning environment. Mr. Hura’s deep commitment to excellence and innovation plays
             a crucial role in shaping the future of Surya Academy, helping it stay at the forefront of
            educational progress and success.</p>
        </div>
    </div>


    <div className='management3'>
        <div className='management3_div1'>
            <img src={image4} alt="image4" />
        </div>
        <div className='management3_div2'>
            <b>Monika Arora Principal</b>
            <p>Monika Arora has been an integral part of Surya Academy since its inception, contributing
               significantly to its growth and success. With nearly two decades of diverse experience
               in school education and administration, she has served as the Principal for several years,
               guiding the school with dedication and vision. Monika holds a Master’s degree in Arts and
            a Master’s in Education (M.Ed) and is currently pursuing her PhD in Education to further enhance 
             her expertise and knowledge in the field.</p>
            <p>Her leadership style is deeply rooted in inspiring academic excellence, fostering a nurturing
                environment and promoting holistic development among students. Monika’s commitment to the
                educational community is reflected in her continuous efforts to improve teaching practices,
                create innovative learning experiences and build a culture of inclusivity. She is a highly
                respected leader who motivates both staff and students to reach their full potential,
                ensuring Surya Academy remains a beacon of quality education.</p>
        </div>
    </div>
    </>
  )
}

export default Managementteam