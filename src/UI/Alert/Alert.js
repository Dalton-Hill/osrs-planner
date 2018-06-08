import React from 'react';


const alert = props => {
  const alertType = props.alertType !== undefined ? props.alertType : 'info';
  return (
    <div className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
      {props.children}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={props.onCloseAlert}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
};


export default alert;