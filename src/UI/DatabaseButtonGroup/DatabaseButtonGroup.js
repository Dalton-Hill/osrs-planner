import React from 'react';
import UploadButton from './Buttons/UploadButton/UploadButton';
import DownloadButton from './Buttons/DownloadButton/DownloadButton';


const databaseButtonGroup = (props) => {
  return (
    <div className={"btn-group"} style={{marginLeft: "10px"}}>
      <UploadButton click={props.onUpload}/>
      <DownloadButton click={props.onDownload}/>
    </div>
  )
};


export default databaseButtonGroup;