import React from "react";
import "./style.css"; 
// Delete button prop, reusing the 'x' from the student example. 
function DeleteBtn(props){
  return(
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗ 
    </span>
  ); 
}

export default DeleteBtn; 