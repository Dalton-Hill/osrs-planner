import React from 'react';
import * as styles from './styles';


const skillProgressBar = (props) => {
  const widthStyle = props.percent * 100 + '%';
  return (
    <div className="progress" style={{ ...styles.progressBar }}>
      <div className="progress-bar" style={{ width: widthStyle }}/>
    </div>
  )
};


export default skillProgressBar;