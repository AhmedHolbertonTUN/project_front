import React from 'react';
import './headercss.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div style={{ marginLeft: '25px' }}>
        <a href="/">
        <img
          className='logo'
          src='https://ciaologo.com/timthumb.php?src=upload/929/1408/0_orig_20150226010240_81c2acc385.png&h=250&w=400&zc=2&b=15'
          alt=''
          height='60px'
        />
        </a>
      </div>
      <div>
        <a href="/">
        <span className='text2'>Bio</span> <span className='text1'>Market</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
