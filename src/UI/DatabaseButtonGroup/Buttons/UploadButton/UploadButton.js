import React from 'react';
import CloudUploadIcon from 'react-icons/lib/go/cloud-upload';


const uploadButton = (props) => {
  return (
    <button className={"btn btn-outline-primary"} title={"Save Count to Database"} onClick={props.click}>
      <CloudUploadIcon />
    </button>
  )
};


export default uploadButton;