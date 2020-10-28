import React from 'react'
import './supplier_css.css'
import { useHistory } from 'react-router-dom';

function Supplier() {
    let history = useHistory();
    return (
        <div className="App">
        <div className="login-box">
        <div className="left-box">
          <h1> Already supplier ? </h1>
          <p> Enter your supplier code to access your dashborad </p>
          <input className='code_area' type="text" name="username" placeholder="Supplier Code.."/>
          <input className='code_button' type="submit" value='ENTER' />
        </div>
        <div className="right-box">
          <span className="signinwith">Become a Supplier </span>
          <button onClick={()=>{history.push("/supplier_registration")}} className="social facebook">Join Us Now</button>
        </div>
        <div className="or">OR</div>
      </div>
          </div>
    )
}

export default Supplier
