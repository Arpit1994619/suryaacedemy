import React from 'react'

import image1 from './pagesIMAGES/QueriesaboutImage/1.png'

import { useRef, useState } from 'react';

import './pageCSS/Queriesabout.css'

function Queriesabout() {
  
    const [activeIndex, setActiveindex] = useState('')
        const faqRefs = useRef([]);
        const toggleFaq = (id) => {setActiveindex(prevIndex => prevIndex === id ? '' : id)}


         const faqData = [
            {
              question: 'What is the process for admission at Surya Academy?',
              answer: 'The admission process at Surya Academy is designed to be smooth, transparent and stress-free. You can collect the brochure and registration form from the school office by paying Rs. 500/-. After submitting the completed form along with the required documents, your child will be called for an entrance test. Based on the results, selected candidates will proceed with the fee payment and secure admission.'
            },
            {
              question: 'How can I collect the brochure and registration form?',
              answer: 'You can collect the brochure and registration form from the school office by paying Rs. 500/- for the academic session 2025-26.'
            },
            {
              question: 'What is the age requirement for admission to Class 1?',
              answer: 'Minium age 3+ years as on 1st April of Academic session for class Pre-Nursery, 4+ years for class Nursery and 6 years for class 1.'
            },
            {
              question: 'Are there any specific documents required at the time of admission?',
              answer: `Yes, the following documents are required.  
                      01 School leaving/transfer certificate and previous year’s report card (for Class II and above). 
                      02 Original Birth Certificate (for admission to Class II and below). 
                      03 Recent passport-size color photographs of the candidate and both parents. 
                      04 Aadhar and PEN (Permanent Education Number) for Class II and above.`
            },
            {
              question: 'What is the process after submitting the registration form?',
              answer: 'Once you submit the filled registration form and necessary documents, the application will be reviewed. If complete, your child will be called for an entrance test. The date and time will be communicated to you nearer to the test.'
            },
            {
              question:'Is the admission fee refundable?',
              answer:'No, the admission fee is non-refundable and non-transferable to any other year. If a student withdraws after admission, the fees will not be refunded.'
            },
            {
              question:'When is the Parent Orientation Program?',
              answer:'A Parent Orientation Program will be organized for successfully admitted students. The date and time will be shared with the parents closer to the event.'
            },
            {
              question:'Is the presence of parents required during the admission process?',
              answer:'Yes, the presence of at least one parent/guardian is mandatory at the time of admission.'
            },
            {
              question:'What are the school office timings for admission inquiries?',
              answer:'The school office remains open every day of the week, from 9:00 AM to 2:30 PM to assist with any admission queries or concerns.'
            },
            {
              question:'How will I know if my child has been selected for admission?',
              answer:'Selected candidates will be informed about their entrance test results and the next steps through a notification sent closer to the date of the test.'
            }
          ]



return (
<>
<div className='queries'>
    <img src={image1} alt="image1" width="100%" />
</div>


<div className='queries1'>
  <h1>Queries About Admission</h1>
  {
   faqData.map((item, id) => (
   <div key={id} className='queries1_div'>
    <h3 onClick={() => toggleFaq(id)}>
      {item.question}
      {activeIndex === id ? <i className="ri-subtract-line"></i> : <i className="ri-add-line"></i>} 
    </h3>
      
    <p ref={el =>(faqRefs.current[id] = el)}  style={{ whiteSpace: 'pre-line' }} className={`faq_answer ${activeIndex === id ? 'open' : ''}`}>
        {item.answer}
    </p>
   </div>
   ))
 }
</div>
</>
  )
}
export default Queriesabout
