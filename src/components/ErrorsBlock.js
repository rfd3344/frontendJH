
import React from 'react';

const ErrorsBlock =({message, success})=>{
  if(!message) return(<span></span>);
  if(success) return(<div class="alert alert-success"> Successful: {message} </div>)
  else return(
    <div id="ErrorsBlock" class="alert alert-danger">
      <strong> Errors: </strong>{ message }
    </div>
  )
}
export default ErrorsBlock
