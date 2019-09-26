
import React from 'react';
import { Modal } from 'react-bootstrap';


const ToggleModel =( {children, data, CloseModel,processPOST} )=>{
  let formtarget, title ;
  if( data.action=='New') title = '添加'
  if( data.action=='Edit') title = 'change'
  if( data.action=='Delete') title = '删除'
  let handleSubmit =(e)=>{
    e.preventDefault();
    let post_info = new FormData(e.target);
    processPOST(post_info);
  }
  return (
    <Modal className="show" show={data.showModel} onHide={CloseModel}>
      <form onSubmit={handleSubmit} method="POST" ref={el => formtarget = el }>
        <Modal.Header closeButton>
          <Modal.Title> {title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>  { children }  </Modal.Body>
        <Modal.Footer>
          <button class="btn btn-success" type="submit">保存</button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default ToggleModel
