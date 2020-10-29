import React from 'react'
import DeleteProduct from '../CRUD_Supplier/DeleteProduct'
import EditProduct from '../CRUD_Supplier/EditProduct'
import './supl_prod_css.css'

function ProductCard(props) {
    return (
        
        <div className="news_hor">
  <img src={props.image} alt="bunny" />
  <div className='figcaption'>
    <h3>{props.name}</h3>
    <p>{props.category}  </p>
    <p>{props.price.toFixed(3)} DT</p>
    <div className='new_footer'>
      <div className="hor_date"><DeleteProduct product={props.product} /> <EditProduct product={props.product} /> </div>
    </div>
  </div>
 
</div>
        
    )
}

export default ProductCard
