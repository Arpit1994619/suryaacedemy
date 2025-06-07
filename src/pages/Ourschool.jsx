import React from 'react'

import image1 from './pagesIMAGES/ourschoolimage/1.png'
import image2 from './pagesIMAGES/ourschoolimage/2.png'
import image3 from './pagesIMAGES/ourschoolimage/3.png'
import image4 from './pagesIMAGES/ourschoolimage/4.png'
import image5 from './pagesIMAGES/ourschoolimage/5.png'
import image6 from './pagesIMAGES/ourschoolimage/6.png'
import image8 from './pagesIMAGES/ourschoolimage/8.png'
import image9 from './pagesIMAGES/ourschoolimage/9.png'
import image10 from './pagesIMAGES/ourschoolimage/10.png'

import './pageCSS/Ourschool.css'

function Ourschool() {
  return (
    <>
    <div className='school'>
       <img src={image1} alt="image1" width="100%" />
    </div>

 
    <div className='school1'>
      <div className='school1_div'>
        <img src={image2} alt="image2" />
      </div>
      <div className='school1_div'>
        <h1>Our School</h1>
        <p>Surya Academy is a reputed 20 years young school where one can experience a vibrant community with
          no bounds for learning. Founded in 2005, our institution is built on the pillars of excellence,
          compassion and innovation. Our mission is simple yet profound to empower students to become
          compassionate, responsible citizens equipped with integrity, honesty, trust, tolerance and
           compassion.</p><br/>
          <p>At Surya Academy, we take pride in our consistent record of academic excellence. Our students
            have consistently exceeded national averages in all subject areas, a testament to our commitment
            to personalized learning opportunities and vibrant extracurricular activities. Our expert teachers
            and support staff work tirelessly to ensure every child reaches their full potential by nurturing
            their unique talents and interests. We promote our students' growth in academics and extracurricular
            activities. It is truly heart-warming to see them develop into confident, curious and creative
            individuals.</p>
      </div>
    </div>


    <div className='school2'>
      <div className='school2_div1'>
        <img src={image3} alt="image3" width="100%" />
      </div>
      <div className='school2_div2'>
        <div className='school2_div2_div'>
          <div className='school2_text'>
               <h1>900</h1>
               <p>Students</p>
          </div>
          <div className='school2_text'>
               <img src={image4} alt="image4" />
          </div>
        </div>
        <div className='school2_div2_div'>
        <div className='school2_text'>
               <h1>50</h1>
               <p>Expert Teachers</p>
          </div>
          <div className='school2_text'>
               <img src={image5} alt="image5" />
          </div>
        </div>
        <div className='school2_div2_div'>
        <div className='school2_text'>
               <p style={{"margin-top":"5px"}}>Qualified, Experienced and Competent Management</p>
          </div>
          <div className='school2_text'>
               <img src={image6} alt="image6" />
          </div>
        </div>
      </div>
    </div>


    <center>
       <div className='school3'>
           <div className='school3_div'>
             <h1>100%</h1>
             <p>Pass Result in Board Exam</p>
           </div>
           <div className='school3_div'>
              <h1>High Scores</h1>
              <p>In board exams</p>
           </div>
           <div className='school3_div' style={{"border":"none"}}>
               <h1>No. 1</h1>
               <p>In Academic Excellence</p>
           </div>
        </div>
    </center>


    <div className='school4'>
      <h1>Our Campus</h1>
      <div className='school4_img'>
        <div className='school4_video'>
        <a href="https://www.youtube.com/watch?v=UyJlCglvDAA&list=RDGMEMCMFH2exzjBeE_zAHHJOdxgVMUyJlCglvDAA&start_radio=1" target="_blank">
            <i className="ri-play-large-fill"></i>
         </a>
        </div>
      </div>
      <p>Surya Academy features a vibrant, student-focused campus that fosters growth and creativity. With
        modern infrastructure, spacious classrooms and advanced labs, our campus creates an engaging
        learning environment. Green surroundings, hygienic facilities and interactive spaces to ensures
        academic and holistic development for future leaders.</p>
    </div>


    <div className='school5'>
      <h1>WE ARE SOCIAL</h1>
      <p>Surya Academy is more than just an academic institution; it's a hub of social consciousness.
        We believe in nurturing not only minds but also hearts. Our commitment to social causes is evident
        in the various initiatives we organize throughout the year. From Earth Day rallies that raise awareness
        about environmental issues to Independence Day celebrations that instil patriotism, we strive to make
        a positive impact on society.</p>
       <p>Additionally, our tree plantation drives contribute to a greener and healthier environment. By
        actively participating in these initiatives, we encourage our students and staff to become responsible
        citizens and contribute to a better future. Our teachers, the pillars of our institution, are equally
        important to us. To ensure their well-being and rejuvenation, we organize excursion trips to provide
        them with much-needed breaks.</p>
        <p><b>Join us in our mission to make a diﬀerence</b></p>
    </div>


    <div className='school6'>
        <div className='school6_div'>
          <img src={image8} alt="image8" />
        </div>
        <div className='school6_div'>
          <img src={image9} alt="image9" />
        </div>
        <div className='school6_div'>
          <img src={image10} alt="image10" />
        </div>
    </div>
    </>
  )
}

export default Ourschool