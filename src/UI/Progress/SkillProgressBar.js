import React from 'react';


const skillProgressBar = (props) => {
  const widthStyle = props.percent * 100 + '%';
  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: widthStyle }}/>
    </div>
  )
};


export default skillProgressBar;