import React from 'react';
import './contact.css';

function ContactForm() {
  return (
    <div className='form'>
        <div style={{marginLeft:'55px', marginTop:'25px'}}>
        <p className='par1'>Contact</p>
        <span className='par2'>
        44 Republic Street Sfax, Tunisia</span>
        <p className='par2'>
        support@biomarket.com</p>
        <p className='par2'>+216.25.438.823</p>
        </div>
      <form
        action='mailto:jarrayaahmed119@gmail.com'
        method='get'
        enctype='text/plain'
        style={{width:'50%', margin:'15px 25px'}}
      >
        <input
          name='name'
          type='text'
          className='feedback-input'
          placeholder='Name'
        />
        <input
          name='email'
          type='text'
          className='feedback-input'
          placeholder='Email'
        />
        <textarea
          name='text'
          className='feedback-input'
          placeholder='Comment'
        ></textarea>
        <input className='submitButton' type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default ContactForm;
