import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import './profile_css.css';

function Profile() {
    let {id} = useParams()
    let url =`http://localhost:8080/api/products/${id}`;

    const [Data, setData] = useState([]);

    useEffect(() => {
    axios.get(url).then((res) => {
        console.log(res);
        setData(res.data);
    });
  }, []);

    return (
        <div className="App">
        <div className='cardPF'>
    <div className='product-left'>
    <div className="header5">
            <h1>{Data.name}</h1>
            <h2>{Data.category}</h2>
          </div>
          <div className="product-main">
            <div className="focus">
              <span>Description</span>
            </div>
            <p>{Data.description}</p>
          </div>
          <div className="product-details">
            <div className="product-total">
              <h3>Price</h3>
            <p>{Data.price} DT</p>
            </div>
          </div>
          <div className="product-btns">
            <a href="#" className="product-add">Add To Cart</a>
          </div>
          <div className="product-btns">
            <a className="product-add" onClick={()=>{window.history.back()}}>Return To Shop</a>
          </div>
    </div>
    <div className='product-right'>
    <img src={Data.image} alt="item" width='100%' height='100%'/>
    </div>
        </div>
      </div>
    )
}

export default Profile
