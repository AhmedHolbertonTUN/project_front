import React from 'react';
import './home_css.css';
import { Link } from "react-router-dom";

function Home() {
  return <div className='home'>
    <div className="demoFont">
        NEW
        <br />
        ARRIVAL
        <br />
        UP TO <b>30%</b> OFF
        <br />
        <Link to="/shop">
          <button className="myButton2">SHOP COLLECTION</button>
        </Link>
      </div>
  </div>;
}

export default Home;
