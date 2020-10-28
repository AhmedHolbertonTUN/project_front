import React from 'react';
import './navbarCss.css';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <div>
        <ul>
        <NavLink exact activeClassName='current' to="/">
          <li>Home</li>
        </NavLink>
        <NavLink exact activeClassName='current' to="/category">
          <li>Category</li>
        </NavLink>
        <NavLink exact activeClassName='current' to="/shop">
          <li>Shop</li>
        </NavLink>
        <NavLink exact activeClassName='current' to="/about">
          <li>About</li>
        </NavLink>
        <NavLink exact activeClassName='current' to="/contact">
          <li>Contact</li>
        </NavLink>
        <NavLink activeClassName='current' to="/policies">
          <li>Store Policies</li>
          </NavLink>
          {isAuthenticated && <NavLink activeClassName='current' to="/supplier">
          <li>Supplier Area</li>
          </NavLink>}
          {isAuthenticated ? (<a className='login' onClick={() => logout()}>
          <li>Log Out</li>
        </a>):(<a className='login' onClick={() => loginWithRedirect()}>
          <li>Log In | Sign Up</li>
        </a>)}
      </ul>
      <div>
        {isAuthenticated ? (<div className='UserInfo'><img src={user.picture} alt={user.name} className='avatar' style={{width:'50px'}} />
        <h2 className='white'>Welcome {user.name} !</h2>
        <button className="myButtonOut"><Link to={`/mycart`}>My Cart</Link></button>
        </div>):(<></>)}
      </div>
    </div>
  );
}

export default Navbar;
