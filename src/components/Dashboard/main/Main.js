import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Spinner } from 'reactstrap';
import './Main_css.css'

function Main(props) {
    let url =`http://localhost:8080/api/supplier/${props.id}`;

    const [Data, setData] = useState();
    const [isExist, setisExist] = useState(false);
    const [listOfProducts, setlistOfProducts] = useState([]);
    const [listOfOrders, setlistOfOrders] = useState([]);

    useEffect(() => {
    axios.get(url).then((res) => {
        console.log(res);
        setData(res.data.name);
        setisExist(true);
        axios.get(`http://localhost:8080/api/products/supplier/${res.data.name.replace(/\s/g, '%20')}`).then((res) => {
          setlistOfProducts(res.data);
      });
      axios.get(`http://localhost:8080/api/cart/supplier/${res.data.name.replace(/\s/g, '%20')}`).then((res) => {
        setlistOfOrders(res.data);
    });
    });
  }, []);
    return (
            <>
        {isExist ? (<div className='main'>
        <h4 style={{fontWeight:'800'}}>Welcome back "{Data}" !</h4>
        
    <div className="row align-items-stretch courbe">
      <div className="c-dashboardInfo col-lg-3 col-md-6">
        <div className="wrap">
    <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Products</h4><span className="hind-font caption-12 c-dashboardInfo__count">{listOfProducts.length}</span>
        </div>
      </div>
      </div>
      <div className="row align-items-stretch courbe">
      <div className="c-dashboardInfo col-lg-3 col-md-6">
        <div className="wrap">
          <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Ordered Products</h4><span className="hind-font caption-12 c-dashboardInfo__count">{listOfOrders.length} </span>
        </div>
      </div>
      </div>
      
    </div>):(<div className='spinner'><Spinner type="grow" color="secondary" /><Spinner type="grow" color="secondary" /><Spinner type="grow" color="secondary" /></div>)}
        </>
    )
}

export default Main
