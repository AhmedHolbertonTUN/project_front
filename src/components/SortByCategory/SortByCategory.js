import React, { useState, useEffect } from 'react'
import { Spinner } from 'reactstrap';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
import ProductCard from '../products/ProductCard'
import './sortCategory.css'

function SortByCategory() {
  let {category}=useParams();
  let history=useHistory();
  const [listOfProducts, setlistOfProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
  axios.get(`http://localhost:8080/api/products/category/${category}`).then((res) => {
      console.log(res);
      setlistOfProducts(res.data);
      setisLoading(false);
  });
}, []);

    return (
        <div className='App2'>
        <button onClick={()=>history.push('/category')} className='myButton2 return'>Return to Category</button>
      {isLoading ? (<div className='spinner'><Spinner type="grow" color="secondary" /><Spinner type="grow" color="secondary" /><Spinner type="grow" color="secondary" /></div>):(<div className='ProductContainer'>
      {listOfProducts.map((el) => <ProductCard image={el.image} name={el.name} price={el.price} description={el.description} id={el._id} product={el} />)}
    </div>)}
       </div>
    )
}

export default SortByCategory
