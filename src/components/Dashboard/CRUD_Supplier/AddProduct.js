import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './AddProduct_css.css';

const AddProduct = (props) => {
  const {
    supplier
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {setModal(!modal);sethidden(true)};

  const [hidden, sethidden] = useState(true);
  
  const affiche = () => {
          setTimeout(()=>sethidden(false), 800);
      }

  return (
    <div>
    <Button style={{zoom:'120%'}} onClick={toggle} color="info">Add New Product</Button>{' '}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>ADD NEW PRODUCT</ModalHeader>
        <ModalBody>
        <form action="http://localhost:8080/api/products/" method="post">
  <label for="lname">Supplier:</label><br/>
  <input className='input_text' type="text" id="supplier" name="supplier" value={supplier} required/><br/>
  <label for="fname">Product Name:</label><br/>
  <input className='input_text' type="text" id="name" name="name" required></input><br/>
  <label for="lname">Unit Price:</label><br/>
  <input className='input_text' type="text" id="price" name="price" required></input><br/>
  <label for="lname">Image:</label><br/>
  <input className='input_text' type="text" id="image" name="image" required/><br/>
  <label for="lname">Category:</label><br/>
  <select className='input_text' id="category" name="category" required>
    <option value="fruits and vegetables">Fruits and vegetables</option>
    <option value="oils and vinegars">Oils and vinegars</option>
    <option value="sweet groceries">Sweet groceries</option>
  </select>
  <label for="lname">Description:</label><br/>
  <input className='input_text' type="text" id="description" name="description" required/><br/>
  {hidden ? (<p></p>):(<div className='success15'><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
</svg><p style={{paddingLeft:'10px'}}>Product successfully added !</p></div>)}
  <ModalFooter>
    <input className='submitButton2' type="submit" onClick={affiche} value="Add Product"></input>
    {hidden ? (<Button color="secondary" onClick={toggle}>Cancel</Button>):(<Button color="secondary" onClick={()=>{window.location.reload()}}>Close</Button>)}
    </ModalFooter>
</form>
        </ModalBody>
      </Modal>
    </div>
  );
  };

export default AddProduct;