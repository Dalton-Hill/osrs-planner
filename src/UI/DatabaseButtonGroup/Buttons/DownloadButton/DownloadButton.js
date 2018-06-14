import React from 'react';
import CloudDownloadIcon from 'react-icons/lib/go/cloud-download';


const downloadButton = (props) => {
  return (
    <button className={"btn btn-outline-primary"} title={"Load Count from Database"} onClick={props.click}>
      <CloudDownloadIcon/>
    </button>
  )
};


export default downloadButton;