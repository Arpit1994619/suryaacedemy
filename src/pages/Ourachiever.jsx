import React, {useState} from 'react'

import image1 from './pagesIMAGES/OurachieverImage/1.png'
import image2 from './pagesIMAGES/OurachieverImage/2.png'
import image3 from './pagesIMAGES/OurachieverImage/3.png'
import image4 from './pagesIMAGES/OurachieverImage/4.png'
import image5 from './pagesIMAGES/OurachieverImage/5.png'
import image6 from './pagesIMAGES/OurachieverImage/6.png'
import image7 from './pagesIMAGES/OurachieverImage/7.png'
import image8 from './pagesIMAGES/OurachieverImage/8.png'
import image9 from './pagesIMAGES/OurachieverImage/9.png'
import image10 from './pagesIMAGES/OurachieverImage/10.png'

import './pageCSS/Ourachiever.css'

 function Ourachiever() {

  return (
    <>
    <div className='our'>
       <img src={image1} alt="image1" width='100%' />
    </div>


  <div className='our1'>
    <h1>Our Achievers</h1>
    <p>Surya Academy has long been a beacon of excellence in academic and extracurricular domains, consistently
       producing achievers who excel in various fields. The academy’s focus on holistic development,
       discipline and a passion for learning empowers its students to not only excel in their studies but also
       make a significant impact in their communities and chosen fields.The achievers of Surya Academy are a
       testament to the academy’s commitment to providing a nurturing and challenging environment. With a
       strong foundation in academics, sports and community engagement, they are poised to make significant
       contributions to their chosen fields and society at large.</p>
  </div>


  <div className='our2'>
    <h1>2023-24 (Class XII)</h1>
    <div className='our2_div'>
        <div className='our2_div_div'>
            <img src={image2} alt="image2" width='100%'/>
            <h2>AFSAR KHAN</h2>
            <p>94.4%</p>
        </div>
        <div className='our2_div_div'>
            <img src={image3} alt="image3" width='100%'/>
            <h2>ANSH RAO</h2>
            <p>93.8%</p>
        </div>
        <div className='our2_div_div'>
            <img src={image4} alt="image4" width='100%'/>
            <h2>VINAYAK GUPTA</h2>
            <p>93.4%</p>
        </div>
        <div className='our2_div_div'>
            <img src={image5} alt="image5" width='100%'/>
            <h2>SAMRIDDHI RAI</h2>
            <p>91.6%</p>
        </div>
        <div className='our2_div_div'>
            <img src={image6} alt="image6" width='100%'/>
            <h2>PRIYANSH SHRIVASTAVA</h2>
            <p>89.2%</p>
        </div>
        <div className='our2_div_div'>
            <img src={image7} alt="image7" width='100%'/>
            <h2>AMARNATH TRIPATHI</h2>
            <p>88.4%</p>
        </div>
        <div className='our2_div_div'>
            <img src={image8} alt="image8" width='100%'/>
            <h2>NAZIA KHATUN</h2>
            <p>87.8%</p>
        </div>
        <div className='our2_div_div'>
            <img src={image9} alt="image9" width='100%'/>
            <h2>VAIBHAV PANDEY</h2>
            <p>86.8%</p>
        </div>
        <div className='our2_div_div'>
            <img src={image10} alt="image10" width='100%'/>
            <h2>ARCHANA KUMARI</h2>
            <p>85.8%</p>
        </div>
        <div className='our2_div_div'></div>
    </div>
  </div>
    </>
  )
}
export default Ourachiever
