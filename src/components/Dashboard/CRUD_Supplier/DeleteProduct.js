import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './AddProduct_css.css';

const DeleteProduct = (props) => {
  const {
    product
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [hidden, sethidden] = useState(true);
  const affiche = () => {
          setTimeout(()=>sethidden(false), 800);
      }

  return (
    <div>
      <svg style={{cursor:'pointer'}} onClick={toggle} width="3em" height="2.15em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
</svg>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete Product</ModalHeader>
        <ModalBody>
        <form action={`http://localhost:8080/api/products/delete/${product._id}`} method="post">
        <span>Are you sure yout want to remove "<strong>{product.name}</strong>" ?</span><br/><br/>
  {hidden ? (<p></p>):(<div className='success2'><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
</svg><p style={{paddingLeft:'10px', marginTop:'5px'}}>Deleted !</p></div>)}
  <ModalFooter>
    <input className='submitButton3' onClick={affiche} type="submit" value="YES"></input>
    {hidden ? (<Button color="secondary" onClick={()=>{toggle()}}>Cancel</Button>):(<Button color="secondary" onClick={()=>{window.location.reload()}}>Close</Button>)}
    </ModalFooter>
</form>
        </ModalBody>
      </Modal>
    </div>
  );
};


export default DeleteProduct;