import React from 'react';
import './description.css';
import { Link } from 'react-router-dom';

function Description() {
  return (
    <div>
      <div className='container'>
        <h2 className='title'>Eat Well, Live Better</h2>
        <p className='paragraph'>
          When BioMarket opened its doors in 2012, it was our dream to offer the
          best and widest range of organic foods available, and our mission to
          promote health in the community and to bring a sense of discovery and
          adventure into food shopping. We hope that you find inspiration,
          excitement and good health from the food you eat, and learn, like us,
          that to eat well is to live better.
        </p>
      </div>
      <div className='about'>
        <div className='description'>
            <p className='par1'>About Us</p>
        <p className='par2'>
          BioMarket is the definition of delicious! Founded in 2012, we like to
          say that we bring joy to our customers, and this is something we hope
          to do for years to come. But we offer more than delicious,
          high-quality products. We are a full service health food store that
          has become an important part of the local community. Come meet us.
        </p>
        <Link to='/about'><button className="myButton">Learn More</button></Link>
        </div>
        <img src="https://auchanetmoi.auchan.fr/api/v1/media_files/35126/media/900%3E" height='400px' width='600px' alt="pic2"/>
      </div>
    </div>
  );
}

export default Description;
