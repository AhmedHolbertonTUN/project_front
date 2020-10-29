import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import './supplier_css.css'

function Supplier() {
  let history = useHistory();
    const [ID,setID]=useState();

    return (
        <div className="App">
        <div className="login-box">
        <div className="left-box">
          <h1> Already supplier ? </h1>
          <p> Enter your supplier code to access your dashborad </p>
          <form action="">
          <input className='code_area' type="text" onInput={(e) => setID(e.target.value)}  placeholder="Supplier Code.." required/>
          <button onClick={()=>{if (ID) history.push(`/dashboard/${ID}`)}} className='code_button'>ENTER</button>
          </form>
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
