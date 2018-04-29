import React from 'react';
import Log from './Log/Log';


const body = ({ trees, handleLogCountChange }) => {
  return (
    <div>
      <h5 className="card-title">Gathering</h5>
      <table className={"table"}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Gathered</th>
            <th>Experience Gained</th>
          </tr>
        </thead>
        <tbody>
          { trees.map((tree, index) => <Log className={"row"} log={tree.log}
                                            change={handleLogCountChange} key={index}/>) }
        </tbody>
      </table>
    </div>
  )
};


export default body;