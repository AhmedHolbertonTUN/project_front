import React from 'react';
import './footer_css.css';

function Footer() {
  return (
      <div className='footer'>
      <div className="footer-distributed">

<div className="footer-left">

    <h3>Bio<span>Market</span></h3>

    <p className="footer-company-name">BioMarket © 2020</p>
</div>

<div className="footer-center">

    <div>
        <i className="fa fa-map-marker"></i>
        <p><span>44 Republic Street</span> Sfax, Tunisia</p>
    </div>

    <div>
        <i className="fa fa-phone"></i>
        <p>+216.25.438.823</p>
    </div>

    <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">support@biomarket.com</a></p>
    </div>

</div>

<div className="footer-right">

    <p className="footer-company-about">
        <span>About BioMarket</span>
        Our simple truth is that foods should be natural and wholesome. We advocate that food be authentic and ethical, freshly prepared and tasty – not a mere convenience. 
        We believe in ethical and sustainable farming and place great emphasis on the provenance of all our products.    </p>

    <div className="footer-icons">

        <a href="#"><img src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png" alt="facebook" height='90%'/></a>
        <a href="#"><img src="https://www.freepnglogos.com/uploads/instagram-icon-png/instagram-icon-suzem-limited-make-known-20.png" alt="instagram" height='90%'/></a>
        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1024px-Linkedin_icon.svg.png" alt="linkedin" height='90%'/></a>

    </div>

</div>

</div>
      </div>
  );
}

export default Footer;
