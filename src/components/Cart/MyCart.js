import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Spinner } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { Table, Button } from "reactstrap";
import './cart_css.css'
import Edit from '../Edit_Delete_Modal/Edit';
import Delete from '../Edit_Delete_Modal/Delete';

function MyCart(props) {
    const { isAuthenticated } = useAuth0();
    let history = useHistory();

    let url =`http://localhost:8080/api/cart/${props.user}`;
    const [listOfItems, setlistOfItems] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
    axios.get(url).then((res) => {
        console.log(res);
        setlistOfItems(res.data);
        setisLoading(false);
    });
  }, []);

function sum(){
    var total = 0;
    for (let i=0; i<listOfItems.length;i++){
        total = total + listOfItems[i].totalprice;
    }
    return total;
}

    return (
      <>
      {isLoading ? (<div className='spinner'><Spinner type="grow" color="secondary" /><Spinner type="grow" color="secondary" /><Spinner type="grow" color="secondary" /></div>):(
 <div>
 {isAuthenticated ? (<div style={{marginBottom:'45px'}}>
     <h1 className='yourcart'>Your Cart</h1>
     <p style={{paddingLeft:'25px'}}><strong>{listOfItems.length} item(s) in your cart</strong></p>
     <Table>
       <thead>
         <tr>
           <th style={{marginLeft:'-25px'}}>Product</th>
           <th>Quantity</th>
           <th>Unit Price</th>
           <th>Total Price</th>
           <th> </th>
         </tr>
       </thead>
       {listOfItems.map(el => <tbody className='line'>
         <tr>
           <th>
             <div className='product'>
               <img src={el.image} alt='pic' height='100px' width='100px' style={{marginRight:'20px'}} />
               <div>
               <h5> {el.item} </h5>
               <h6><strong>{el.category}</strong></h6>
               </div>
               </div>
               </th>
           <td style={{display:'flex'}}><input type="number" id="quantity" name="quantity" value={el.quantity} min="1" max="10" disabled/>
           <Edit product={el} />
           </td>
           <td> {el.price.toFixed(3)}<span> DT</span> </td>
           <td><strong>{el.totalprice.toFixed(3)}</strong><strong> DT</strong></td>
           <td style={{color:'red'}}>
           <Delete product={el} />
           </td>
         </tr>
       </tbody>
         )}
     </Table>
     <Table dark className='subtotal' style={{width:'30%'}}>
       
       <tbody>
         <tr>
           <td><strong>Subtotal :</strong></td>
           <td> {sum().toFixed(3)} </td>
         </tr>
         <tr>
           <td><strong>Shipping :</strong></td>
           <td>7.000</td>
         </tr>
         <tr>
           <td><strong>TOTAL :</strong></td>
     <td>{(sum()+7).toFixed(3)}</td>
         </tr>
       </tbody>
     </Table>
     <Button className='subtotal' color="primary"><strong>Checkout</strong></Button>{' '}
     <Button onClick={()=>{history.push("/shop")}} color="secondary"><strong>Continue Shopping</strong></Button>{' '}
     </div>):(
     <></>
     )}
         </div>
      )}
      </>
    )
}

export default MyCart
