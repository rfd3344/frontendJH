/*********************************************************
  Component Used In:
  admin/courses,  admin/teachers,  admin/institution
**********************************************************/

import React from 'react';
import { Modal } from 'react-bootstrap';
import AxiosMethod from 'utilis/AxiosMethod';

const DeletePanel =( { data, CloseModel} )=>{
  //  data = {show:Boolean, url:String, post:Obj}
  let handleSubmit =(e)=>{
    e.preventDefault();
    AxiosMethod('post', data.url, data.post ).then( res =>{
      if( res.status>=200 && res.status<300  ){
        location.reload();
      }
    }).catch( error=> {
      alert( error.response.data.message );
    })
  }
  return(
    <Modal className="show" show={data.show} onHide={CloseModel}>
      <form onSubmit={handleSubmit} >
        <Modal.Header closeButton>
          <Modal.Title> 删除 </Modal.Title>
        </Modal.Header>
        <Modal.Body>  确定要删除么？ </Modal.Body>
        <Modal.Footer>
          <button class="btn btn-success" type="submit">确定</button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default DeletePanel
