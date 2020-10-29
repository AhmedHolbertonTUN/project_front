import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './AddProduct_css.css';

const EditProduct = (props) => {
  const {
    product
  } = props;

  const [modal, setModal] = useState(false);
  const [name, setName] = useState(product.name);
  const [image, setImage] = useState(product.image);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);
  const [description, setDescription] = useState(product.description);

  const toggle = () => setModal(!modal);

  const [hidden, sethidden] = useState(true);
  const affiche = () => {
          setTimeout(()=>sethidden(false), 800);
      }

  return (
    <div>
      <svg style={{cursor:'pointer'}} onClick={toggle} width="3em" height="2.15em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Product</ModalHeader>
        <ModalBody>
        <form action={`http://localhost:8080/api/products/${product._id}`} method="post">
  <label for="lname">Supplier:</label><br/>
  <input className='input_text' type="text" id="supplier" name="supplier" value={product.supplier}/><br/>
  <label for="fname">Product Name:</label><br/>
  <input className='input_text' type="text" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} required></input><br/>
  <label for="lname">Unit Price:</label><br/>
  <input className='input_text' type="text" id="price" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} required></input><br/>
  <label for="lname">Image:</label><br/>
  <input className='input_text' type="text" id="image" name="image" value={image} onChange={(e)=>setImage(e.target.value)} required/><br/>
  <label for="lname">Category:</label><br/>
  <select className='input_text' id="category" name="category" value={category} onChange={(e)=>setCategory(e.target.value)} required>
    <option value="fruits and vegetables">Fruits and vegetables</option>
    <option value="oils and vinegars">Oils and vinegars</option>
    <option value="sweet groceries">Sweet groceries</option>
  </select>
  <label for="lname">Description:</label><br/>
  <input className='input_text' type="text" id="description" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} required/><br/>
  {hidden ? (<p></p>):(<div className='success2'><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
</svg><p style={{paddingLeft:'10px', marginTop:'5px'}}>Saved !</p></div>)}
  <ModalFooter>
    <input className='submitButton3' onClick={affiche} type="submit" value="Save"></input>
    {hidden ? (<Button color="secondary" onClick={()=>{toggle()}}>Cancel</Button>):(<Button color="secondary" onClick={()=>{window.location.reload()}}>Close</Button>)}
    </ModalFooter>
</form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default EditProduct;