import React from 'react';
import './headercss.css';

function Header() {
  return (
    <div className='header'>
      <div style={{ marginLeft: '25px' }}>
        <img
          className='logo'
          src='https://ciaologo.com/timthumb.php?src=upload/929/1408/0_orig_20150226010240_81c2acc385.png&h=250&w=400&zc=2&b=15'
          alt=''
          height='60px'
        />
      </div>
      <div>
        <span className='text2'>Bio</span> <span className='text1'>Market</span>
      </div>
    </div>
  );
}

export default Header;
