import React from "react"; 
// Export input, text area, and form butttons. 
export function Input(props){
  return(
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  ); 
}

export function TextArea(props){
  return(
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>

  ); 
}

export function FormBtn(props){
  return(
    <button {...props} style={{ float: "right", marginBottom: 10}} className="btn btn-primary">
      {props.children}
    </button>
  ); 
}