import React, { useState, useEffect } from 'react'
import axios from "axios";
import ProductCard from './ProductCard'
import './ProductCard.css'

function Product() {

  const [listOfProducts, setlistOfProducts] = useState([]);

  useEffect(() => {
  axios.get("http://localhost:8080/api/products").then((res) => {
      console.log(res);
      setlistOfProducts(res.data);
  });
}, []);

    return (
        <div className='ProductContainer'>
          {listOfProducts.map((el) => <ProductCard image={el.image} name={el.name} price={el.price} description={el.description} id={el._id} product={el} />)}
        </div>
    )
}

export default Product
