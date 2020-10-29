import React, { useState, useEffect } from 'react'
import axios from "axios";
import './Main_css.css'

function Main(props) {
    let url =`http://localhost:8080/api/supplier/${props.id}`;

    const [Data, setData] = useState([]);
    const [isExist, setisExist] = useState(false);

    useEffect(() => {
    axios.get(url).then((res) => {
        console.log(res);
        setData(res.data);
        setisExist(true);
    });
  }, []);
    return (
            <>
        {isExist ? (<div className='main'>
        <h4 style={{fontWeight:'800'}}>Welcome back "{Data.name}" !</h4>
        
    <div className="row align-items-stretch courbe">
      <div className="c-dashboardInfo col-lg-3 col-md-6">
        <div className="wrap">
          <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Products</h4><span className="hind-font caption-12 c-dashboardInfo__count">25</span>
        </div>
      </div>
      </div>
      <div className="row align-items-stretch courbe">
      <div className="c-dashboardInfo col-lg-3 col-md-6">
        <div className="wrap">
          <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Ordered Products</h4><span className="hind-font caption-12 c-dashboardInfo__count">25</span>
        </div>
      </div>
      </div>
      
    </div>):(<h2 style={{margin:'85px'}}>Not Found Supplier !</h2>)}
        </>
    )
}

export default Main
