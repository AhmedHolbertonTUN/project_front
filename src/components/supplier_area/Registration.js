import React, { useState, useRef } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './supplier_css.css'

function Registration() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [adress, setAdress] = useState();
    const [phone, setPhone] = useState();
    const [hidden, sethidden] = useState(true);
    const myform = useRef(null);

    const affiche = () => {
        if (name && email && adress && phone){
            setTimeout(()=>sethidden(false), 800);
            setTimeout(()=>myform.current.reset(),800);
        }
    };

    return (
        <div style={{height:'auto', marginBottom:'55px'}}>
            <h1 className='prg'>Step 1 : Supplier informations</h1>
            <h5 className='prg'>Please fill out this form with your informations</h5>
        <div className='registration_box'>
            <form ref={myform} action="http://localhost:8080/api/supplier" method='post'>
            <div className="row">
    <div className="col-25">
      <label className='label' for="fname">Supplier Name or Company Name<span style={{color:'red'}}>*</span></label>
    </div>
    <div className="col-75">
      <input className='registration_text' type="text" id="name" name="name" placeholder="Your name.." onChange={(e) => setName(e.target.value)} required/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label className='label' for="lname">Email<span style={{color:'red'}}>*</span></label>
    </div>
    <div className="col-75">
      <input className='registration_text' type="email" id="email" name="email" placeholder="Your Email.." onChange={(e) => setEmail(e.target.value)} required/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label className='label' for="lname">Adress<span style={{color:'red'}}>*</span></label>
    </div>
    <div className="col-75">
      <input className='registration_text' type="text" id="adress" name="adress" placeholder="Your Adress.." onChange={(e) => setAdress(e.target.value)} required/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label className='label' for="lname">Phone Number<span style={{color:'red'}}>*</span></label>
    </div>
    <div className="col-75">
      <input className='registration_text' type="tel" id="phone" name="phone" placeholder="Your Phone.." onChange={(e) => setPhone(e.target.value)} required/>
    </div>
  </div>
  <span className='row' style={{color:'red'}}>(*) Required field</span>
  <div className='col-75'>
  <input className='myButton5' type="submit" value="Submit" onClick={affiche}></input>
  </div>
            </form>
        </div>
        {hidden ? (<p></p>):(<div className='success'><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
</svg><p style={{paddingLeft:'10px'}}>Successfully Registered !</p></div>)}
        <h1 className='prg'>Step 2 : Organic Certification and Accreditation</h1>
        <h5 className='prg'>To complete your registration please send us your "Organic Certification and Accreditation" on our email: <strong>support@biomarket.com</strong></h5>
        <h5 className='prg'>After the approval we send you a supplier code, this code allows you to publish your products.</h5>
        <Link to='/' ><Button className='prg' color="primary">Back to Home</Button>{' '}</Link>
        </div>
    )
}

export default Registration
