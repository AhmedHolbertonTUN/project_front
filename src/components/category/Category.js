import React from 'react'
import { useHistory } from "react-router-dom";
import './category_css.css'

function Category() {
  let history=useHistory();
    return (
        <div className='CATcontainer'>
            <div className="cardCT">
  <img className='CATimg' src="https://i.ibb.co/wW7g4ps/a-22.jpg" width='100%' />
  <div className="cardCT-content">
    <a style={{cursor:'pointer'}} onClick={()=>history.push('/category/fruits and vegetables')}>
      <p className="cardCT-category">Fruits & Vegetables<i className="fas fa-chevron-right fa-sm"></i></p>
    </a>
  </div>
</div>

<div className="cardCT">
  <img className='CATimg' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/26a28f54506801.5cee2710d5e80.jpg" height='100%' width='160%' />
  <div className="cardCT-content">
    <a style={{cursor:'pointer'}} onClick={()=>history.push('/category/oils and vinegars')}>
      <p className="cardCT-category">Oils & Vinegars<i className="fas fa-chevron-right fa-sm"></i></p>
    </a>
  </div>
</div>
<div className="cardCT">
  <img className='CATimg' src="https://i.ibb.co/hYMrBCt/miel-confiture.jpg" width='100%' height='100%'/>
  <div className="cardCT-content">
    <a style={{cursor:'pointer'}} onClick={()=>history.push('/category/sweet groceries')}>
      <p className="cardCT-category">Sweet Groceries<i className="fas fa-chevron-right fa-sm"></i></p>
    </a>
  </div>
</div>
        </div>
    )
}

export default Category
