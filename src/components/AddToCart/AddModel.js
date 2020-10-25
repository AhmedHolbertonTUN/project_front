import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Add_css.css';

const AddToCart = (props) => {
  const {
    buttonLabel,
    product,
    customer,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [qty, setQty] = useState(0);

  const toggle = () => {setModal(!modal);sethidden(true);setQty(0)};

  const [hidden, sethidden] = useState(true);
  const affiche = () => {
      if (qty > 0 && qty <= 10){
          setTimeout(()=>sethidden(false), 800);
      }
  };

  return (
    <div>
      <button className='buttonAdd' onClick={toggle}>{buttonLabel}</button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>ADD TO CART</ModalHeader>
        <ModalBody>
        <form action="http://localhost:8080/api/cart/" method="post">
  <label for="fname">Product:</label><br/>
  <input className='input_text' type="text" id="item" name="item" value={product.name} ></input><br/>
  <label for="lname">Unit Price:</label><br/>
  <input className='input_text' type="text" id="price" name="price" value={product.price.toFixed(3)} ></input><br/>
  <label for="lname">Quantity:</label><br/>
  <input className='input_text' type="number" id="quantity" name="quantity" onChange={(e) => setQty(e.target.value)} min="1" max="10" required />
  <input type="text" id="customer" name="customer" value={customer} style={{display:'none'}} /><br/>
  <input type="text" id="image" name="image" value={product.image} style={{display:'none'}} />
  <input type="text" id="category" name="category" value={product.category} style={{display:'none'}} />
  {hidden ? (<p></p>):(<div className='success'><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
</svg><p style={{paddingLeft:'10px'}}>Product successfully added to you cart !</p></div>)}
  <ModalFooter>
    <input className='submitButton2' type="submit" onClick={affiche} value="Add To Cart"></input>
    {hidden ? (<Button color="secondary" onClick={toggle}>Cancel</Button>):(<Button color="secondary" onClick={toggle}>Back To Shop</Button>)}
    </ModalFooter>
</form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddToCart;