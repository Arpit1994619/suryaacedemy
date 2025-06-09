import React from 'react'

import image1 from './pagesIMAGES/scholarshipImage/1.png'

import './pageCSS/Scholarship.css'

 function Scholarship() {
  return (
    <>
    <div className='scholar'>
        <img src={image1} alt="image1" width='100%' />
    </div>


    <div className='scholer1'>
       <h1>Scholarship</h1>
       <p>Two merit scholarships have been introduced by the Management of Surya Academy to promote
         competitiveness among the students. Student would be selected for this scholarship based on their
         excellence in academics. The students selected under this scholarship will be exempted from paying
         complete tuition fee for the academic session. Students from class VI to XII will be eligible for this
         scholarship. The student can avail this scholarship maximum for two academic session.</p>

<center>
         <table>
      <thead>
        <tr>
          <th>SCHOLARSHIP</th>
          <th>CRITERIA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>B.L. Arora</td>
          <td>Student scoring highest aggregate mark in academic session (Boys)</td>
        </tr>
        <tr>
          <td>Prem Arora</td>
          <td>Student scoring highest aggregate mark in academic session (Girls)</td>
        </tr>
       </tbody>
    </table> 
    </center>
    </div>

    </>
  )
}
export default Scholarship
