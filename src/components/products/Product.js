import React, { useState, useEffect } from 'react'
import { Spinner } from 'reactstrap';
import axios from "axios";
import ProductCard from './ProductCard'
import './ProductCard.css'

function Product() {

  const [listOfProducts, setlistOfProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
  axios.get("http://localhost:8080/api/products").then((res) => {
      console.log(res);
      setlistOfProducts(res.data);
      setisLoading(false);
  });
}, []);

    return (
      <>
      {isLoading ? (<div className='spinner'><Spinner type="grow" color="secondary" /><Spinner type="grow" color="secondary" /><Spinner type="grow" color="secondary" /></div>):(<div className='ProductContainer'>
      {listOfProducts.map((el) => <ProductCard image={el.image} name={el.name} price={el.price} description={el.description} id={el._id} product={el} />)}
    </div>)}
       </>
    )
}

export default Product
