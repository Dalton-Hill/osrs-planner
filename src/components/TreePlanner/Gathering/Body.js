import React from 'react';
import Log from './Log/Log';


const body = ({ trees, handleLogCountChange }) => {
  return (
    <div>
      <h5 className="card-title">Gathering</h5>
      { trees.map((tree, index) => <Log className={"row"} log={tree.log}
                                        change={handleLogCountChange} key={index}/>) }
    </div>
  )
};


export default body;