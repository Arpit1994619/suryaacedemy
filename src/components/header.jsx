import React from 'react'

import  { useState } from 'react';

import Lovo from './componentsIMAGES/1.png'
import image2 from './componentsIMAGES/image2.png'

import { NavLink } from 'react-router-dom'

import { useEffect, useRef } from 'react';
import $ from 'jquery';

import './componentsCSS/header.css'


function Header() {

  /* this code scroll up header hide and scroll down header show  start */
     const [showHeader, setShowHeader] = useState(true);
     const [lastScrollY, setLastScrollY] = useState(0);
     const controlHeader = () => {
        if (window.scrollY > lastScrollY) {
      // scrolling down
         setShowHeader(false);
        } else {
          // scrolling up
         setShowHeader(true);
       }
      setLastScrollY(window.scrollY);
  };
 useEffect(() => {
    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

/* this code scroll up header hide and scroll down header show  end */


    function menu(){
        var a = document.getElementsByClassName("menu_icon_click")[0];
           a.style.display = "flex";
    }
    function close(){
        var a = document.getElementsByClassName("menu_icon_click")[0];
        a.style.display = "none";
    }

    //this code browser load after 3second this code load. close button
    function afterclase(){
      var a = document.getElementsByClassName("after_show")[0];
           a.style.display = "none";
    }



       //use of jquery for mobile menu start.
        const aboutClick = useRef(null);
        const aboutShow = useRef(null);
         useEffect(() => {
             $(aboutClick.current).click(function () {
               $(aboutShow.current).slideToggle(1000);
              
               $(ourteamShow.current).hide();
               $("#icon2").attr("class", "ri-add-line");
               $(admissionShow.current).hide();
               $("#icon3").attr("class", "ri-add-line");
               $(academicsShow.current).hide();
               $("#icon4").attr("class", "ri-add-line");
               $(beyondShow.current).hide();
               $("#icon5").attr("class", "ri-add-line");
               $(rulesShow.current).hide();
               $("#icon6").attr("class", "ri-add-line");
               $(cbseShow.current).hide();
               $("#icon7").attr("class", "ri-add-line");

             if ($("#icon1").hasClass("ri-add-line")) 
                {
                   $("#icon1").attr("class", "ri-subtract-line");
                } 
            else if ($("#icon1").hasClass("ri-subtract-line"))
                {
                    $("#icon1").attr("class", "ri-add-line");
                }
             });
           }, []);


        const ourteamClick = useRef(null);
        const ourteamShow = useRef(null);
         useEffect(() => {
             $(ourteamClick.current).click(function () {
               $(ourteamShow.current).slideToggle(1000);

               $(aboutShow.current).hide();
               $("#icon1").attr("class", "ri-add-line");
               $(admissionShow.current).hide();
               $("#icon3").attr("class", "ri-add-line");
               $(academicsShow.current).hide();
               $("#icon4").attr("class", "ri-add-line");
               $(beyondShow.current).hide();
               $("#icon5").attr("class", "ri-add-line");
               $(rulesShow.current).hide();
               $("#icon6").attr("class", "ri-add-line");
               $(cbseShow.current).hide();
               $("#icon7").attr("class", "ri-add-line");

             if ($("#icon2").hasClass("ri-add-line")) 
                {
                   $("#icon2").attr("class", "ri-subtract-line");
                } 
            else if ($("#icon2").hasClass("ri-subtract-line"))
                {
                    $("#icon2").attr("class", "ri-add-line");
                }
             });
           }, []);


        const admissionClick = useRef(null);
        const admissionShow = useRef(null);
         useEffect(() => {
             $(admissionClick.current).click(function () {
               $(admissionShow.current).slideToggle(1000);

               $(aboutShow.current).hide();
               $("#icon1").attr("class", "ri-add-line");
               $(ourteamShow.current).hide();
               $("#icon2").attr("class", "ri-add-line");
               $(academicsShow.current).hide();
               $("#icon4").attr("class", "ri-add-line");
               $(beyondShow.current).hide();
               $("#icon5").attr("class", "ri-add-line");
               $(rulesShow.current).hide();
               $("#icon6").attr("class", "ri-add-line");
               $(cbseShow.current).hide();
               $("#icon7").attr("class", "ri-add-line");

             if ($("#icon3").hasClass("ri-add-line")) 
                {
                   $("#icon3").attr("class", "ri-subtract-line");
                } 
            else if ($("#icon3").hasClass("ri-subtract-line"))
                {
                    $("#icon3").attr("class", "ri-add-line");
                }
             });
           }, []);


        const academicsClick = useRef(null);
        const academicsShow = useRef(null);
         useEffect(() => {
             $(academicsClick.current).click(function () {
               $(academicsShow.current).slideToggle(1000);

               $(aboutShow.current).hide();
               $("#icon1").attr("class", "ri-add-line");
               $(ourteamShow.current).hide();
               $("#icon2").attr("class", "ri-add-line");
               $(admissionShow.current).hide();
               $("#icon3").attr("class", "ri-add-line");
               $(beyondShow.current).hide();
               $("#icon5").attr("class", "ri-add-line");
               $(rulesShow.current).hide();
               $("#icon6").attr("class", "ri-add-line");
               $(cbseShow.current).hide();
               $("#icon7").attr("class", "ri-add-line");

             if ($("#icon4").hasClass("ri-add-line")) 
                {
                   $("#icon4").attr("class", "ri-subtract-line");
                } 
            else if ($("#icon4").hasClass("ri-subtract-line"))
                {
                    $("#icon4").attr("class", "ri-add-line");
                }
             });
           }, []);


        const beyondClick = useRef(null);
        const beyondShow = useRef(null);
         useEffect(() => {
             $(beyondClick.current).click(function () {
               $(beyondShow.current).slideToggle(1000);

               $(aboutShow.current).hide();
               $("#icon1").attr("class", "ri-add-line");
               $(ourteamShow.current).hide();
               $("#icon2").attr("class", "ri-add-line");
               $(admissionShow.current).hide();
               $("#icon3").attr("class", "ri-add-line");
               $(academicsShow.current).hide();
               $("#icon4").attr("class", "ri-add-line");
               $(rulesShow.current).hide();
               $("#icon6").attr("class", "ri-add-line");
               $(cbseShow.current).hide();
               $("#icon7").attr("class", "ri-add-line");

             if ($("#icon5").hasClass("ri-add-line")) 
                {
                   $("#icon5").attr("class", "ri-subtract-line");
                } 
            else if ($("#icon5").hasClass("ri-subtract-line"))
                {
                    $("#icon5").attr("class", "ri-add-line");
                }
             });
           }, []);


        const rulesClick = useRef(null);
        const rulesShow = useRef(null);
         useEffect(() => {
               $(rulesClick.current).click(function () {
               $(rulesShow.current).slideToggle(1000);

               $(aboutShow.current).hide();
               $("#icon1").attr("class", "ri-add-line");
               $(ourteamShow.current).hide();
               $("#icon2").attr("class", "ri-add-line");
               $(admissionShow.current).hide();
               $("#icon3").attr("class", "ri-add-line");
               $(academicsShow.current).hide();
               $("#icon4").attr("class", "ri-add-line");
               $(beyondShow.current).hide();
               $("#icon5").attr("class", "ri-add-line");
               $(cbseShow.current).hide();
               $("#icon7").attr("class", "ri-add-line");

             if ($("#icon6").hasClass("ri-add-line")) 
                {
                   $("#icon6").attr("class", "ri-subtract-line");
                } 
            else if ($("#icon6").hasClass("ri-subtract-line"))
                {
                    $("#icon6").attr("class", "ri-add-line");
                }
             });
           }, []);


        const cbseClick = useRef(null);
        const cbseShow = useRef(null);
         useEffect(() => {
               $(cbseClick.current).click(function () {
               $(cbseShow.current).slideToggle(1000);

               $(aboutShow.current).hide();
               $("#icon1").attr("class", "ri-add-line");
               $(ourteamShow.current).hide();
               $("#icon2").attr("class", "ri-add-line");
               $(admissionShow.current).hide();
               $("#icon3").attr("class", "ri-add-line");
               $(academicsShow.current).hide();
               $("#icon4").attr("class", "ri-add-line");
               $(beyondShow.current).hide();
               $("#icon5").attr("class", "ri-add-line");
               $(rulesShow.current).hide();
               $("#icon6").attr("class", "ri-add-line");

             if ($("#icon7").hasClass("ri-add-line")) 
                {
                   $("#icon7").attr("class", "ri-subtract-line");
                } 
            else if ($("#icon7").hasClass("ri-subtract-line"))
                {
                    $("#icon7").attr("class", "ri-add-line");
                }
             });
           }, []);

    //use of jquery for mobile menu end.



   
   
    // this code browser load after 3second this code load. start
    const [showBox, setShowBox] = useState(false);

    useEffect(() => {
      const handleLoad = () => {
        setTimeout(() => {
          setShowBox(true);
        }, 2000); // Delay 3 seconds
      };
      // If already loaded (e.g., SPA navigation), call immediately
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
      }

      // Cleanup
       return () => {
        window.removeEventListener('load', handleLoad);
      };
    }, []);
    // this code browser load after 3second this code load. end

 
    //this code after 3second load form data
    const [formData, setFormData] = useState({
                    name: '', parentName: '', email: '', phone: '', address: '', selectedClass: ''});
   
   const handleSubmit = (e) => {
         e.preventDefault();
   }


  return (
   <>
    <div /*className='header'*/ className={`header ${showHeader ? 'visible' : 'hidden'}`}> {/*className={`header ${showHeader ? 'visible' : 'hidden'}`} this className scroll up header hide and scroll down header show */}
        <div className='header_div1'>
             <div className='header_lovo'>
                <img src={Lovo} alt="Lovo" width="245px" />
             </div>
             <div className='header_text'>
                  <button className='header_btn'>Contact Us <i className="ri-arrow-right-up-line"></i></button>
                  <i className="ri-menu-fill menu_icon" onClick={menu}></i>
             </div>
        </div>

        <div className='header_div2'>
        <div id="menu">
           <ul>
             <li><NavLink to='/'>Home</NavLink></li>
             <li><a href="#">About Us</a>
               <ul>
                   <li><NavLink to='/ourschool'> Our School</NavLink></li>
                   <li><NavLink to="Missionvision">Mission & Vision</NavLink></li>
                   <li><NavLink to='ourpedagogy'>Our Pedagogy</NavLink></li>
                   <li><NavLink to='presidentmass'>President Message</NavLink></li>
                   <li><NavLink to='vicepresidentmess'>Vice President Message</NavLink></li>
                   <li><a href="#">Principal Message</a></li>
                   <li><a href="#">Parents Testimonials</a></li>
                   <li><a href="#">Alumni Testimonials</a></li>
               </ul>
             </li>
             <li><a href="#">Facilities and Infrastructure</a></li>
             <li><a href="#">Our Team</a>
                 <ul>
                    <li><NavLink to='managementteam'>Management Team</NavLink></li>
                    <li><a href="#">Faculty Leadership Team</a></li>
                    <li><NavLink to='studentleadership'>Students Leadership Team</NavLink></li>
                 </ul>
             </li>
             <li><a href="#">Admission</a>
                <ul>
                    <li><NavLink to='admissionprocess'>Admission Process</NavLink></li>
                    <li><NavLink to='queriesabout'>Queries about admission</NavLink></li>
                    <li><NavLink to='onlineragistration'>Online Registration</NavLink></li>
                    <li><NavLink to='testdateresult'>Test date and Results</NavLink></li>
                    <li><NavLink to='feestructure'>Fee Structure</NavLink></li>
                </ul>
             </li>
             <li><a href="#">Academics</a>
                 <ul>
                    <li><NavLink to='curriculum'>Curriculum</NavLink></li>
                    <li><NavLink to='smartclass'>Smart Class Rooms</NavLink></li>
                    <li><NavLink to='scholarship'>Scholarships</NavLink></li>
                    <li><a href="#">Competent faculty and staff</a></li>
                    <li><a href="#">Our Achievers</a></li>
                    <li><a href="#">Pre-primary Level</a></li>
                    <li><a href="#">Primary Level</a></li>
                    <li><a href="#">Middle Level</a></li>
                    <li><a href="#">Secondary Level</a></li>
                    <li><a href="#">Sr. Secondary Level</a></li>
                    <li><a href="#">Remedial Classes</a></li>
                 </ul>
             </li>
             <li><a href="#">Beyond the Classroom</a>
                <ul>
                    <li><a href="#">Co-curricular Activities</a></li>
                    <li><a href="#">Extra-curricular Activities</a></li>
                    <li><a href="#">Training and Seminars</a></li>
                    <li><a href="#">School Clubs</a></li>
                    <li><a href="#">House System</a></li>
                    <li><a href="#">Olympiads</a></li>
                </ul>
             </li>
             <li><a href="#">Rules & Regulations</a>
                <ul>
                    <li><a href="#">For Parents</a></li>
                    <li><a href="#">For Students</a></li>
                    <li><a href="#">School Uniform</a></li>
                    <li><a href="#">School Timings</a></li>
                    <li><a href="#">School Calender</a></li>
                </ul>
             </li>
             <li><a href="#">Events</a></li>
             <li><a href="#">Gallery</a></li>
             <li><a href="#">CBSE</a>
                <ul>
                    <li><a href="#">Circulars</a></li>
                    <li><a href="#">TC verification</a></li>
                </ul>
             </li>
             <li><a href="#">Career</a></li>
          </ul>
       </div>
        </div>


   {/*this div box menu_icon click box*/}
   <div className='menu_icon_click animate__animated animate__fadeInRight'>
       <div className='menu_icon_click1'></div>

       <div className='menu_icon_click2'>
         <button className='close_icon' onClick={close}><i class="ri-close-line "></i></button>
         <img src={Lovo} alt="Lovo" width="200px" />
         <p className='menu_icon_p1'>Surya Academy, a leading english medium school in Deoria, is dedicated to
             providing exceptional education and fostering holistic student growth.</p>
         <img src={image2} alt="image2" width="300px" />
         <div className='menu_address'>
             <i className="ri-phone-line"></i> 9792144950<br/>
             <i className="ri-map-pin-line"></i> Gorakhpur, Deoria, U.P - India.
         </div>
       </div>
   
           
       {/* for mobile menu start */}
       <div className='menu_list'>
          <button className='close_icon' onClick={close}><i class="ri-close-line "></i></button>
          <div id="menu_mobile">
            <ul>
                <li><NavLink to='/' onClick={close}>Home</NavLink></li>
                <li ref={aboutClick}><a href="#">About Us</a><i id="icon1" className="ri-add-line"></i>
                   <ul ref={aboutShow}>
                     <li><NavLink to='/ourschool' onClick={close}>Our School</NavLink></li>
                     <li><NavLink to="Missionvision" onClick={close}>Mission & Vision</NavLink></li>
                     <li><NavLink to='ourpedagogy' onClick={close}>Our Pedagogy</NavLink></li>
                     <li><NavLink to='presidentmass' onClick={close}>President Message</NavLink></li>
                     <li><NavLink to='vicepresidentmess' onClick={close}>Vice President Message</NavLink></li>
                     <li><a href="#">Principal Message</a></li>
                     <li><a href="#">Parents Testimonials</a></li>
                     <li><a href="#">Alumni Testimonials</a></li>
                   </ul>
                </li>
                <li><a href="#">Facilities and Infrastructure</a></li>
                <li ref={ourteamClick}><a href="#">Our Team</a><i id="icon2" className="ri-add-line"></i>
                  <ul ref={ourteamShow}>
                    <li><NavLink to='managementteam' onClick={close}>Management Team</NavLink></li>
                    <li><a href="#">Faculty Leadership Team</a></li>
                    <li><NavLink to='studentleadership' onClick={close}>Students Leadership Team</NavLink></li>
                  </ul>
                </li>
                <li ref={admissionClick}><a href="#">Admission</a><i id="icon3" className="ri-add-line"></i>
                  <ul ref={admissionShow}>
                    <li><NavLink to='admissionprocess' onClick={close}>Admission Process</NavLink></li>
                    <li><NavLink to='queriesabout' onClick={close}> Queries about admission</NavLink></li>
                    <li><NavLink to='onlineragistration' onClick={close}>Online Registration</NavLink></li>
                    <li><NavLink to='testdateresult' onClick={close}> Test date and Results</NavLink></li>
                    <li><NavLink to='feestructure' onClick={close}>Fee Structure</NavLink></li>
                  </ul>
                </li>
                <li ref={academicsClick}><a href="#">Academics</a><i id="icon4" className="ri-add-line"></i>
                  <ul ref={academicsShow}>
                    <li><NavLink to='curriculum' onClick={close}>Curriculum</NavLink></li>
                    <li><NavLink to='smartclass' onClick={close}>Smart Class Rooms</NavLink></li>
                    <li><a href="#">Scholarships</a></li>
                    <li><a href="#">Competent faculty and staff</a></li>
                    <li><a href="#">Our Achievers</a></li>
                    <li><a href="#">Pre-primary Level</a></li>
                    <li><a href="#">Primary Level</a></li>
                    <li><a href="#">Middle Level</a></li>
                    <li><a href="#">Secondary Level</a></li>
                    <li><a href="#">Sr. Secondary Level</a></li>
                    <li><a href="#">Remedial Classes</a></li>
                  </ul>
                </li>
                <li ref={beyondClick}><a href="#">Beyond the Classroom</a><i id="icon5" className="ri-add-line"></i>
                 <ul ref={beyondShow}>
                    <li><a href="#">Co-curricular Activities</a></li>
                    <li><a href="#">Extra-curricular Activities</a></li>
                    <li><a href="#">Training and Seminars</a></li>
                    <li><a href="#">School Clubs</a></li>
                    <li><a href="#">House System</a></li>
                    <li><a href="#">Olympiads</a></li>
                 </ul>
                </li>
                <li ref={rulesClick}><a href="#">Rules & Regulations</a><i id="icon6" className="ri-add-line"></i>
                  <ul ref={rulesShow}>
                    <li><a href="#">For Parents</a></li>
                    <li><a href="#">For Students</a></li>
                    <li><a href="#">School Uniform</a></li>
                    <li><a href="#">School Timings</a></li>
                    <li><a href="#">School Calender</a></li>
                  </ul>
                </li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Gallery</a></li>
                <li ref={cbseClick}><a href="#">CBSE</a><i id="icon7" className="ri-add-line"></i>
                   <ul ref={cbseShow}>
                    <li><a href="#">Circulars</a></li>
                    <li><a href="#">TC verification</a></li>
                   </ul>
                </li>
            </ul>
            </div>
       </div>
       {/* for mobile menu end */}

   </div>
</div>




{ /*this code browser load after 3second this code load.*/ }
    <div className='after_show'>
      {showBox && (
        <div className='after_show_div animate__animated animate__fadeInRightBig'>
          <button className='showbox_closebtn' onClick={afterclase}><i class="ri-close-line"></i></button>
          <h1>Admission Enquiry Form</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={(e) =>setFormData(e.target.value)} placeholder='Name of the child' required />
            <input type="text" name="P name" value={formData.parentName} onChange={(e) =>setFormData(e.target.value)}  placeholder='Name of the Parent' required />
            <input type="mail" name="email" value={formData.email} onChange={(e) =>setFormData(e.target.value)} placeholder='Email' required />
            <input type="number" name="no." value={formData.phone} onChange={(e) =>setFormData(e.target.value)} placeholder='phone number' required />
            <textarea name="address" value={formData.address} onChange={(e) =>setFormData(e.target.value)} placeholder='Address'></textarea>
            <p>class applying for</p>
             <select name="select" id="" value={formData.selectedClass} onChange={(e) =>setFormData(e.target.value)}>
               <option value="p">Pre Nursary</option>
               <option value="p1">Nursary</option>
               <option value="kg">KG</option>
               <option value="1">I</option>
               <option value="2">II</option>
               <option value="3">III</option>
               <option value="4">IV</option>
               <option value="5">V</option>
               <option value="6">VI</option>
               <option value="7">VII</option>
               <option value="8">VIII</option>
               <option value="9">IX</option>
               <option value="10">X</option>
             </select>
             <button type="submit" className='showboxform_btn'>Submit</button>
          </form>
        </div>
      )}
    </div>

    </>
  )
}

export default Header