import React from 'react'

import image1 from './pagesIMAGES/FeestructureImage/1.png'

import './pageCSS/Feestructure.css'

 function Feestructure() {
  return (
    <>
    <div className='fee'>
      <img src={image1} alt="image1" width="100%" />
    </div>


    <div className='fee1'>
        <h1>Mode of Payment & Fees</h1>
        <p><span >01.</span> The parents should ensure that fee of the ward is deposited on time.</p>
        <p><span>02.</span> Fee will be accepted only through cashless channels in favour of “Surya Academy”. Fee can be paid online, POS and UPI.</p>
        <p><span>03.</span> The payment schedule of fee (tuition fee + transport charges) is given below:</p>

        <table>
      <thead>
        <tr>
          <th>QUARTER</th>
          <th>MONTHS</th>
          <th>LAST DATE OF PAYMENT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Quarter-I</td>
          <td>April-May-June</td>
          <td>10th April 2025</td>
        </tr>
        <tr>
          <td>Quarter-2</td>
          <td>July-August-September</td>
          <td>10th July 2025</td>
        </tr>
        <tr>
          <td>Quarter-3</td>
          <td>October-November-December</td>
          <td>10th October 2025</td>
        </tr>
        <tr>
          <td>Quarter-4</td>
          <td>January-February-March</td>
          <td>10 January 2025</td>
        </tr>
      </tbody>
    </table>

    <p><span>01.</span> We accept fee payment through credit card / debit card / UPI at our fee counter.</p>
    <p><span>02.</span> Late fee of Rs 20/- per day will apply if the fees is not deposited on time.</p>
    <p><span>03.</span> The bank details for online payment of fee is given below.</p>
    <p><b>Payable To :</b>Surya Academy</p>
    <p><b>Bank Name :</b>HDFC BANK, Kotwali Road, Deoria – 274001</p>
    <p><b>Account No :</b>50200105521670</p>
    <p><b>RGTS/NEFT/IFSC Code :</b>HDFC0000947</p>
    </div>
    </>
  )
}
export default Feestructure
