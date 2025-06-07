import React, {useState} from 'react'

import image1 from './pagesIMAGES/onlineragistrationImage/1.png'

import './pageCSS/Onlineragistration.css'

function Onlineragistration() {

   const [formData, setFormData] = useState({fname:'', birth:'', blood:'', school_last:'',class_last:'',
                        class_admission:'', age_child:'', Refrence:'', father_name:'', father_occupation:'',
                        mother_name:'', mother_occupation:'', email:'', phone:'', date_application:'', gender:'',
                        student_photo:'', signature_parent:'', present_address:'', permanent_address:''            
     });

   const [formErrors, setFormErrors] = useState({});
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific field error
    setFormErrors(prev => ({
      ...prev,
      [name]: ''
    }));

   //this code for phone number
   if (/^\d*$/.test(value)) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
      //console.log('formdata',formData)

    const errors = {};

    if (!formData.fname.trim()) {
      errors.fname = 'Please enter your first name.';
    }
    if (!formData.birth.trim()) {
      errors.birth = 'Please enter your date of birth.';
    }
    if(!formData.blood.trim()){
      errors.blood = 'Please enter your Blood Group.';
    }
    if(!formData.school_last.trim()){
      errors.school_last = 'Please enter your Name of School Last Attended.';
    }
    if(!formData.class_last.trim()){
      errors.class_last = 'Please enter your Class last Attended.';
    }
    if(!formData.class_admission.trim()){
      errors.class_admission = 'Please enter your Class in which Admission is sought.';
    }
    if(!formData.age_child.trim()){
      errors.age_child = 'Please enter your Age of Child as on 1st April,2025 ';
    }
    if(!formData.Refrence.trim()){
      errors.Refrence = 'Please enter your Refrence Name.';
    }
    if(!formData.father_name.trim()){
      errors.father_name = 'Please enter your Father`s Name.';
    }
    if(!formData.father_occupation.trim()){
      errors.father_occupation = 'Please enter your Occupation Name.';
    }
    if(!formData.mother_name.trim()){
      errors.mother_name = 'Please enter your Mother Name.';
    }
    if(!formData.mother_occupation.trim()){
      errors.mother_occupation = 'Please enter your Occupation Name.';
    }
    if(!formData.email.trim()){
      errors.email = 'Please enter your Email(@) Name.';
    }
    // this code for phone number start.
    if (!formData.phone) {
      errors.phone = 'Plase Enter Your Phone Number.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number must be 10 digits.';
    }
    // this code for phone number end.
    if(!formData.date_application.trim()){
      errors.date_application = 'Please enter your Date of Application.';
    }
    if(!formData.gender.trim()){
      errors.gender = 'Please enter your Gender.';
    }
    if(!formData.student_photo.trim()){
      errors.student_photo = 'Please enter your Student Photo.';
    }
    if(!formData.signature_parent.trim()){
      errors.signature_parent = 'Please enter your Signature parent.';
    }
    if(!formData.present_address.trim()){
      errors.present_address = 'Please enter your Present Address.';
    }
    if(!formData.permanent_address.trim()){
      errors.permanent_address = 'Please enter your Permanent Address.';
    }


    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // If all valid
    alert(`Form submitted successfully!\nName: ${formData.fname}\nDOB: ${formData.birth}
      BLOOD: ${formData.blood} \nSCHOOL LAST: ${formData.school_last} \nCLASS LAST: ${formData.class_last}
      CLASS ADMISSION: ${formData.class_admission} \n AGE CHILD: ${formData.age_child} \nREFRANCE: ${formData.Refrence}
      FATHER NAME: ${formData.father_name} \nFATHER OCCUPATION: ${formData.father_occupation} \nMOTHER NAME: ${formData.mother_name}
      MOTHER OCCUPATION: ${formData.mother_occupation} \nEMAIL: ${formData.email} \nNUMBER: ${formData.phone}
      DATE APPLICATION: ${formData.date_application} \nGender: ${formData.gender} \nSTUDENT PHOTO: ${formData.student_photo}
      SIGNATURE PARENT: ${signature_parent} \nPRESENT ADDRESS: ${formData.present_address} \nPERMANENT ADDRESS: ${formData.permanent_address}`)
  };



  return (
    <>
    <div className='online'>
        <img src={image1} alt="image1" width="100%" />
    </div>


<div className='online1'>
   <h1>Registration Form</h1>
   <form onSubmit={handleSubmit}>
      <div className='online1_div'>
        {/* First Name */}
        <div className='online1_div_div'>
          <label htmlFor="fname">Name of the people <span style={{ color: 'red' }}>(in block letters)</span></label><br />
          <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleChange} placeholder="Full Name"
                style={{ border: formErrors.fname ? '1.4px solid red' : '1px solid #ccc' }}
          />
          {formErrors.fname && <div style={{ color: 'red' }}>{formErrors.fname}</div>}
        </div>

        {/* Date of Birth */}
        <div className='online1_div_div'>
          <label htmlFor="birth">Date of Birth</label><br />
          <input type="date" id="birth" name="birth" value={formData.birth} onChange={handleChange}
                style={{ border: formErrors.birth ? '1.4px solid red' : '1px solid #ccc' }}
           />
          {formErrors.birth && <div style={{ color:'red' }}>{formErrors.birth}</div>}
        </div>
    </div>


     <div className='online1_div'>
        {/* Blood Group */}
        <div className='online1_div_div'>
          <label htmlFor="blood">Blood Group</label><br />
          <input type="text" id="blood" name="blood" value={formData.blood} onChange={handleChange} placeholder="Blood Group"
                style={{ border: formErrors.blood ? '1.4px solid red' : '1px solid #ccc' }}
            />
          {formErrors.blood && <div style={{ color: 'red' }}>{formErrors.blood}</div>}
        </div>

        {/* Name of the School Last Attended */}
        <div className='online1_div_div'>
          <label htmlFor="school_last">Name of the School Last Attended</label><br />
          <input type="text" id="school_last" name="school_last" value={formData.school_last} onChange={handleChange} placeholder='Privious School Name'
                style={{ border: formErrors.school_last ? '1.4px solid red' : '1px solid #ccc' }}
           />
          {formErrors.school_last && <div style={{ color:'red' }}>{formErrors.school_last}</div>}
        </div>
    </div>


    <div className='online1_div'>
        {/* Class last Attended */}
        <div className='online1_div_div'>
          <label htmlFor="class_last">Class Last Attended</label><br />
          <input type="text" id="class_last" name="class_last" value={formData.class_last} onChange={handleChange}  placeholder="Class Last Attended"
                style={{ border: formErrors.class_last ? '1.4px solid red' : '1px solid #ccc' }}
            />
          {formErrors.class_last && <div style={{ color: 'red' }}>{formErrors.class_last}</div>}
        </div>

        {/* Class in which Admission is sought */}
        <div className='online1_div_div'>
          <label htmlFor="class_admission">Class in which Admission is sought</label><br />
          <input type="text" id="class_admission" name="class_admission" value={formData.class_admission} onChange={handleChange} placeholder='Class in which Admission is sought'
                style={{ border: formErrors.class_admission ? '1.4px solid red' : '1px solid #ccc' }}
           />
          {formErrors.class_admission && <div style={{ color:'red' }}>{formErrors.class_admission}</div>}
        </div>
    </div>


    <div className='online1_div'>
        {/* Age of Child as on 1st April,2025 */}
        <div className='online1_div_div'>
          <label htmlFor="age_child">Age of Child as on 1st April,2025</label><br />
          <input type="month" id="age_child" name="age_child" value={formData.age_child} onChange={handleChange}  placeholder="Year/Month"
                style={{ border: formErrors.age_child ? '1.4px solid red' : '1px solid #ccc' }}
            />
          {formErrors.age_child && <div style={{ color: 'red' }}>{formErrors.age_child}</div>}
        </div>

        {/* Refrence */}
        <div className='online1_div_div'>
          <label htmlFor="Refrence">Refrence</label><br />
          <input type="text" id="Refrence" name="Refrence" value={formData.Refrence} onChange={handleChange} placeholder='Refrence Name'
                style={{ border: formErrors.Refrence ? '1.4px solid red' : '1px solid #ccc' }}
           />
          {formErrors.Refrence && <div style={{ color:'red' }}>{formErrors.Refrence}</div>}
        </div>
    </div>


    <div className='online1_div'>
        {/* Father's Name */}
        <div className='online1_div_div'>
          <label htmlFor="father_name">Father's Name</label><br />
          <input type="text" id="father_name" name="father_name" value={formData.father_name} onChange={handleChange}  placeholder="Father's Name"
                style={{ border: formErrors.father_name ? '1.4px solid red' : '1px solid #ccc' }}
            />
          {formErrors.father_name && <div style={{ color: 'red' }}>{formErrors.father_name}</div>}
        </div>

        {/* Occupation */}
        <div className='online1_div_div'>
          <label htmlFor="father_occupation">Occupation</label><br />
          <input type="text" id="father_occupation" name="father_occupation" value={formData.father_occupation} onChange={handleChange} placeholder='Father`s Occupation'
                style={{ border: formErrors.father_occupation ? '1.4px solid red' : '1px solid #ccc' }}
           />
          {formErrors.father_occupation && <div style={{ color:'red' }}>{formErrors.father_occupation}</div>}
        </div>
    </div>


    <div className='online1_div'>
        {/* Mother's Name */}
        <div className='online1_div_div'>
          <label htmlFor="mother_name">Mother's Name</label><br />
          <input type="text" id="mother_name" name="mother_name" value={formData.mother_name} onChange={handleChange}  placeholder="Mother's Name"
                style={{ border: formErrors.mother_name ? '1.4px solid red' : '1px solid #ccc' }}
            />
          {formErrors.mother_name && <div style={{ color: 'red' }}>{formErrors.mother_name}</div>}
        </div>

        {/* Occupation */}
        <div className='online1_div_div'>
          <label htmlFor="mother_occupation">Occupation</label><br />
          <input type="text" id="mother_occupation" name="mother_occupation" value={formData.mother_occupation} onChange={handleChange} placeholder='Father`s Occupation'
                style={{ border: formErrors.mother_occupation ? '1.4px solid red' : '1px solid #ccc' }}
           />
          {formErrors.mother_occupation && <div style={{ color:'red' }}>{formErrors.mother_occupation}</div>}
        </div>
    </div>


    <div className='online1_div'>
        {/* Enter your email address */}
        <div className='online1_div_div'>
          <label htmlFor="email">Enter your email address</label><br />
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}  placeholder="Enter your email address"
                style={{ border: formErrors.email ? '1.4px solid red' : '1px solid #ccc' }}
            />
          {formErrors.email && <div style={{ color: 'red' }}>{formErrors.email}</div>}
        </div>

        {/* Enter Phone Number */}
        <div className='online1_div_div'>
          <label htmlFor="phone">Enter Phone Number</label><br />
          <input type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder='Enter Phone Number'
                style={{ border: formErrors.phone ? '1.4px solid red' : '1px solid #ccc' }}
           />
          {formErrors.phone && <div style={{ color:'red' }}>{formErrors.phone}</div>}
        </div>
    </div>


    <div className='online1_div'>
        {/* Date of Application */}
        <div className='online1_div_div'>
          <label htmlFor="date_application">Date of Application</label><br />
          <input type="date" id="date_application" name="date_application" value={formData.date_application} onChange={handleChange}
                style={{ border: formErrors.date_application ? '1.4px solid red' : '1px solid #ccc' }}
            />
          {formErrors.date_application && <div style={{ color: 'red' }}>{formErrors.date_application}</div>}
        </div>

        {/* Gender */}
       <div className='online1_div_div'>
        <label htmlFor="gender">Gender</label><br />
        <select name="gender" id="gender" value={formData.gender} onChange={handleChange}
                 style={{border: formErrors.gender ? '1.4px solid red' : '1px solid #ccc'}}>
                 <option value="" hidden>Select option</option>
                 <option value="Male">Male</option>
                 <option value="Female">Female</option>
        </select>
        {formErrors.gender && <div style={{ color: 'red' }}>{formErrors.gender}</div>}
      </div>
    </div>


    <div className='online1_div'>
        {/* Student Photo */}
        <div className='online1_div_div'>
          <label htmlFor="student_photo">Student Photo</label><br />
          <input type="file" id="student_photo" name="student_photo" value={formData.student_photo} onChange={handleChange}  placeholder="Enter your email address"
                style={{ border: formErrors.student_photo ? '1.4px solid red' : '1px solid #ccc' }}
            />
          {formErrors.student_photo && <div style={{ color: 'red' }}>{formErrors.student_photo}</div>}
        </div>

        {/* Signature Parent / Guardians */}
        <div className='online1_div_div'>
          <label htmlFor="signature_parent">Signature Parent / Guardians</label><br />
          <input type="file" id="signature_parent" name="signature_parent" value={formData.signature_parent} onChange={handleChange} placeholder='Enter Phone Number'
                style={{ border: formErrors.signature_parent ? '1.4px solid red' : '1px solid #ccc' }}
           />
          {formErrors.signature_parent && <div style={{ color:'red' }}>{formErrors.signature_parent}</div>}
        </div>
    </div>
     

      <div className='online1_div'>
        {/* Present Address */}
        <div className='online1_div_div' style={{width:'100%'}}>
          <label htmlFor="present_address">Present Address</label><br />
          <input type="text" id="present_address" name="present_address" value={formData.present_address} onChange={handleChange}  placeholder="Present Address"
                style={{ border: formErrors.present_address ? '1.4px solid red' : '1px solid #ccc' }}
            />
          {formErrors.present_address && <div style={{ color: 'red' }}>{formErrors.present_address}</div>}
        </div>
      </div>


      <div className='online1_div'>
        {/* Permanent Address */}
        <div className='online1_div_div' style={{width:'100%'}}>
          <label htmlFor="permanent_address">Permanent Address</label><br />
          <input type="text" id="permanent_address" name="permanent_address" value={formData.permanent_address} onChange={handleChange}  placeholder="Permanent Address"
                style={{ border: formErrors.permanent_address ? '1.4px solid red' : '1px solid #ccc' }}
            />
          {formErrors.permanent_address && <div style={{ color: 'red' }}>{formErrors.permanent_address}</div>}
        </div>
      </div>
    

      <button type="submit" className='form_btn'>Submit Application</button>

    </form>

</div>

</>
  )
}

export default Onlineragistration