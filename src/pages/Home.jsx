import React from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from './pagesIMAGES/1.png'
import image2 from './pagesIMAGES/2.png'
import image3 from './pagesIMAGES/3.png'

import image4 from './pagesIMAGES/4.png'
import image5 from './pagesIMAGES/5.png'
import image6 from './pagesIMAGES/6.png'
import image7 from './pagesIMAGES/7.png'

import image8 from './pagesIMAGES/8.png'
import image9 from './pagesIMAGES/9.png'
import image10 from './pagesIMAGES/10.png'
import image11 from './pagesIMAGES/11.png'

import image12 from './pagesIMAGES/12.png'

import image14 from './pagesIMAGES/14.png'

import image15 from './pagesIMAGES/15.png'
import image16 from './pagesIMAGES/16.png'
import image17 from './pagesIMAGES/17.png'

import image18 from './pagesIMAGES/18.png'
import image19 from './pagesIMAGES/19.png'
import image20 from './pagesIMAGES/20.png'
import image21 from './pagesIMAGES/21.png'

import './pageCSS/Home.css'

function Home() {

    //this code for slick slider box5
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
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


      //this code for slick slider box9 and box10.
    const loop = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
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
    
      <div className='box1'>
        <img src={image1} alt="image1" width="100%" />
      </div>

      <div className='box2'>
        <div className='box2_div1'>
            <img className='box2_div_img1' src={image2} alt="image2" />
            <img className='box2_div_img2' src={image3} alt="image2" />
        </div>
        <div className='box2_div2'>
            <p className='box2_div2_p'>knowledge meets innovation</p>
            <h1 className='box2_div2_h1'>About Surya Academy</h1>
            <p className='box2_div2_p2'>At Surya Academy, we believe in the transformative power of education and the boundless potential
                 that resides within each individual.</p>
            <p className='box2_div2_p3'>Our mission is to foster intellectual curiosity, empower individuals to realize their fullest
                potential and contribute meaningfully to the betterment of society. commitment to academic
                excellence, diversity and community engagement.</p>
            <button className='box2_btn'>View Our School <i class="ri-arrow-right-up-long-line"></i></button>
        </div>
      </div>

      <div className='box3'>
        <h1 className='box3_h1'>BOARD RESULTS</h1>
        <center>
            <div className='box3_div'>
                <div className='box3_div_div'><p>School Pass<br /> 100%</p></div>
                <div className='box3_div_div'><p>First Division<br /> 95%+</p></div>
                <div className='box3_div_div div3'><p>Avg. Marks<br /> 80.1%</p></div>
            </div>
        </center>
      </div>

      <div className='box4'>
          <h1 className='box4_h1'>Our Achievers (2023-24)</h1>
          <div className='box4_div'>
            <div className='box4_div_div'>
                  <img className='box4_img' src={image4} alt="image4" />
                  <center>
                    <p className='box4_p'>Afsar Khan</p>
                    <p>94.4% (Class XII)</p>
                  </center>
            </div>
            <div className='box4_div_div'>
            <img className='box4_img' src={image5} alt="image5" />
                  <center>
                    <p className='box4_p'>Ansh Rao</p>
                    <p>93.8% (Class XII)</p>
                  </center>
            </div>
            <div className='box4_div_div'>
            <img className='box4_img' src={image6} alt="image6" />
                  <center>
                    <p className='box4_p'>Saumya Srivastava</p>
                    <p>96.8% (Class XII)</p>
                  </center>
            </div>
            <div className='box4_div_div'>
            <img className='box4_img' src={image7} alt="image7" />
                  <center>
                    <p className='box4_p'>Srishti Gupta</p>
                    <p>96.9% (Class XII)</p>
                  </center>
            </div>
          </div>
      </div>

      <div className='box5'>
        <h1 className='box5_h1'>Our Facilities</h1>
        <div className='box5_div'>
          <Slider {...settings} className="responsive">
             <div className='box5_srink'>
                <img src={image8} alt="image8" />
                <p>Modern Bus Facilities <i class="ri-arrow-right-up-long-line"></i></p>
             </div>
             <div className='box5_srink'>
                <img src={image9} alt="image9" />
                <p>Excellent Infrastructure <i class="ri-arrow-right-up-long-line"></i></p>
            </div>
             <div className='box5_srink'>
                <img src={image10} alt="image10" />
                <p>Smart Class Room <i class="ri-arrow-right-up-long-line"></i></p>
            </div>
             <div className='box5_srink'>
                <img src={image11} alt="image11" />
                <p>Modern Labs <i class="ri-arrow-right-up-long-line"></i></p>
            </div>
         </Slider>
        </div>
      </div>

      <div className='box6'>
        <div className='box6_div'>
            <p className='box6_p'>Shaping Tomorrow with Knowledge</p>
            <h1 className='box6_h1'>From The Desk Of Principal</h1>
            <p className='box6_p1'>As I welcome you to Surya Academy, I am reminded of the countless moments of joy, growth and
                 transformation that our students experience within our walls. As an educator and a parent
                  myself, I understand the significance of choosing the right educational partner for child
                  . At Surya Academy, we are committed to fostering a love of learning that extends beyond
                   the classroom. Our student-centered approach, experiential learning methods and inclusive
                    environment work in harmony to nurture curious,
                     creative and compassionate individuals.<br/><br/>
                I firmly believe that every child deserves to be seen, heard and valued. Our dedicated faculty
                 and staff strive to create a sense of belonging, supporting each student's unique journey.
                  From academic achievements to artistic expressions, sports and community service, we
                   encourage our students to explore their passions and interests.<br/><br/>

                As you consider Surya Academy for your child's educational journey, I invite you to experience
                 our vibrant community first-hand. Visit our campus, meet our team and witness the
                  transformative power of education.<br/><br/>

                 Together, let's shape brighterfuture.</p>
        </div>
        <div className='box6_div'>
            <img src={image12} alt="image12" width="100%" />
        </div>
      </div>

      <div className='box7'>
        <div className='box7_div1'></div>
        <div className='box7_div2'>
            <h1 className='box7_h1'>Scholarships</h1>
            <p className='box7_p'>Two merit based scholarships one each for boy and girl have been introduced by the Management
                of Surya Academy to promote competitiveness among the students. Student would be selected
                for this scholarship based on their excellence in academics. The students selected under
                this scholarship are exempted from paying complete tuition fee for the academic session.</p>
            <button className='box7_btn'>Know More <i class="ri-arrow-right-up-line"></i></button>
        </div>
      </div>

      <div className='box8'>
        <h1 className='box8_h1'>Why Choose Us</h1>
        <div className='box8_div'>
            <div className='box8_div_div1'>
                <div className='box8_div01'>
                    <div className='box8_digit'>
                        <h1 className='box8_digit_h1'>01</h1>
                    </div>
                    <div className='box8_text'>
                        <h1 className='box8_text_h1'>Expert Educators and Mentors</h1>
                        <p className='box8_p'>Our experienced educators and mentors are dedicated to inspiring, guiding and
                            nurturing students to reach their full potential.</p>
                    </div>
                </div>
                <div className='box8_div02'>
                <div className='box8_digit'>
                        <h1 className='box8_digit_h1'>02</h1>
                    </div>
                    <div className='box8_text'>
                        <h1 className='box8_text_h1'>Expert Educators and Mentors</h1>
                        <p className='box8_p'>Our experienced educators and mentors are dedicated to inspiring, guiding and
                            nurturing students to reach their full potential.</p>
                    </div>
                </div>
                <div className='box8_div03'>
                <div className='box8_digit'>
                        <h1 className='box8_digit_h1'>03</h1>
                    </div>
                    <div className='box8_text'>
                        <h1 className='box8_text_h1'>Expert Educators and Mentors</h1>
                        <p className='box8_p'>Our experienced educators and mentors are dedicated to inspiring, guiding and
                            nurturing students to reach their full potential.</p>
                    </div>
                </div>
            </div>
            <div className='box8_div_div2'>
                <img src={image14} alt="image14" width="100%" />
            </div>
        </div>
      </div>

      <div className='box9'>
         <h1 className='box9_h1'>Students Leadership Feedback</h1>
         <p className='box9_p'>You'll find something to spark your curiosity and enhance skills.</p>
         <Slider {...loop} className="box9_slider">
             <div className='box9_loop'>
                 <i class="ri-star-fill"></i>
                 <i class="ri-star-fill"></i>
                 <i class="ri-star-fill"></i>
                 <i class="ri-star-fill"></i>
                 <i class="ri-star-fill"></i>
                 <p>Being the Head Boy of Surya Academy is both an honor and a responsibility that has played
                 a fundamental role in shaping the fabric of my character. I have learned valuable lessons
                 in discipline and team work. I am grateful for the trust and support from my teachers and
                 fellow students</p>
                 <div className='box9_loop_div'>
                     <div className='box9_loop_div1'>
                         <img src={image15} alt="image15" />
                     </div>
                     <div className='box9_loop_div2'>
                        <p>Shaurya Ranjan</p>
                        <small>Head Boy</small>
                     </div>
              </div>
             </div>
             <div className='box9_loop'>
                 <i class="ri-star-fill"></i>
                 <i class="ri-star-fill"></i>
                 <i class="ri-star-fill"></i>
                 <i class="ri-star-fill"></i>
                 <i class="ri-star-fill"></i>
                 <p>Being given of the Opportunity to serve as Head girl of Surya Academy has been marvelous.
                  it gives one a chance to develop as a leader, take on initiavtivesand ultimatly inspire one's
                  peers. i am thankful cheers and incouragement from my teachers and classmates, which really builds
                  up one.</p>
                  <div className='box9_loop_div'>
                      <div className='box9_loop_div1'>
                          <img src={image16} alt="image16" />
                      </div>
                      <div className='box9_loop_div2'>
                         <p>Supriya Singh</p>
                          <small>Head Girl</small>
                       </div>
                  </div>
             </div>
             <div className='box9_loop'>
             <i class="ri-star-fill"></i>
             <i class="ri-star-fill"></i>
             <i class="ri-star-fill"></i>
             <i class="ri-star-fill"></i>
             <i class="ri-star-fill"></i>
             <p>Being the Head Boy of Surya Academy is both an honor and a responsibility that has played
                a fundamental role in shaping the fabric of my character. I have learned valuable lessons
                in discipline and team work. I am grateful for the trust and support from my teachers and
                fellow students</p>
              <div className='box9_loop_div'>
                  <div className='box9_loop_div1'>
                    <img src={image17} alt="image17" />
                 </div>
                 <div className='box9_loop_div2'>
                     <p>Sahil Singh</p>
                     <small>Sports Minister</small>
                 </div>
              </div>
             </div>
         </Slider>
     </div>


     <div className='box10'>
        <h1>Vibrant world of surya academy</h1>
        <p>Step into the vibrant world of our school through these cherished moments! From festive
           celebrations to academic milestones and diverse extracurricular activities, every snapshot
         reflects the essence of learning, unity and cultural pride. Relive the memories that make our school
         a true second home.</p>
         <div className='box10_div'>
         <Slider {...loop} className="box10_slider">
             <div className='box10_loop'>
                 <img src={image18} alt="image18" />
             </div>
             <div className='box10_loop'>
                <img src={image19} alt="image19" />
             </div>
             <div className='box10_loop'>
                 <img src={image20} alt="image20" />
             </div>
             <div className='box10_loop'>
                 <img src={image21} alt="image21" />
             </div>
         </Slider>
         </div>
     </div>
     
   </>
  )
}

export default Home