import React from 'react'

import image3 from './componentsIMAGES/3.png'
import image4 from './componentsIMAGES/4.png'
import image5 from './componentsIMAGES/5.png'

import './componentsCSS/Footer.css'


function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='footer_top'>
            <div className='footer_top_div'>
                <p>Subscribe To Newsletter</p>
            </div>
            <div className='footer_top_div'>
                <form>
                    <input type="email" name="email"  placeholder='Enter Your Email'/>
                    <button type="submit">subscribe <i class="ri-arrow-right-up-long-line"></i></button>
                </form>
            </div>
        </div>

        <div className='footer_bottom'>
            <div className='footer_bottom_div'>
                <img src={image3} alt="image3" width="100%" />
                <p>Surya Academy: Dedicated to quality education, empowering
                    learners of all backgrounds with passion and excellence</p>
                    <p><i class="ri-map-pin-line"></i> Gorakhpur Road, Deoria, Uttar Pradesh (India)</p>
                    <p><i class="ri-phone-line"></i>  9792144950</p>
                    <p><i class="ri-phone-line"></i>  05568-297557</p>
            </div>
            <div className='footer_bottom_div'>
                <h1>Quick Links</h1>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Admission</a></li>
                    <li><a href="#">Faculty Team</a></li>
                    <li><a href="#">Public Disclosure</a></li>
                    <li><a href="#">Contect Us</a></li>
                    <li><a href="#">Our Event</a></li>
                </ul>
            </div>
            <div className='footer_bottom_div'>
                <h1 style={{"padding-left":"30px"}} className='our_school'>Our School</h1>
                <ul style={{"padding-left":"30px"}} className='our_school'>
                    <li><a href="#">Academics</a></li>
                    <li><a href="#">Fee Structure</a></li>
                    <li><a href="#">Rules & Reguletion</a></li>
                    <li><a href="#">Our Gallery</a></li>
                    <li><a href="#">Term & Condition</a></li>
                    <li><a href="#">Privacy & Policy</a></li>
                    <li><a href="#">Disclaimer</a></li>
                </ul>
            </div>
            <div className='footer_bottom_div'>
                <h1 style={{"padding-left": "0px"}} className='our_event'>Our Event</h1>
                <div className='footer_bottom_div1'>
                  <div className='footer_bottom_div1_div'>
                    <div>
                        <img src={image4} alt="image4" width="120px" />
                    </div>
                    <div>
                        <h4 className='footer_h3'>August 5, 2023</h4>
                        <h4 className='footer_h3'>Celebration of Principal's Birthday</h4>
                    </div>
                  </div>
                  <div className='footer_bottom_div1_div'>
                  <div>
                        <img src={image5} alt="image5" width="104px" />
                    </div>
                    <div>
                        <h4 className='footer_h3'>Aprl 10, 2023</h4>
                        <h4 className='footer_h3'>Eid</h4>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer