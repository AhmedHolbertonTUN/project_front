import React from "react";
import "./ProductCard.css";
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";
import AddToCart from "../AddToCart/AddModel";

export default function ProductCard(props) {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  return (
    <div className="cardP">
      <div className="cardPRD">
  <img className='CATimg' src={props.image} width='100%' height='100%' />
  <div className="cardPRD-content">
    {isAuthenticated ? (<Link to={`/product/${props.id}`}>
      <p className="cardPRD-category">View Product<i className="fas fa-chevron-right fa-sm"></i></p>
    </Link>):(<a onClick={() => loginWithRedirect()}>
      <p className="cardPRD-category" style={{fontSize:'16px'}}>LogIn for more details<i className="fas fa-chevron-right fa-sm"></i></p>
    </a>)}
  </div>
</div>
      <h2>{props.name}</h2>
      <p className="price">{props.price.toFixed(3)} DT</p>
      <p>{props.text}</p>
      <p>
        {isAuthenticated ? (
        <AddToCart buttonLabel="Add To Cart" product={props.product} customer={user.email} className={'cardP_ADD'}/>
        ):(
        <a onClick={() => loginWithRedirect()}><button>LogIn & Add To Cart</button></a>
        )}
      </p>
    </div>
  );
}
