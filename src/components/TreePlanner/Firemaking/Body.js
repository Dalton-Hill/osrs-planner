import React from 'react';
import Row from './Row';


const body = ({ trees, handleBurnCountChange }) => {
  return (
    <div>
      <h5 className="card-title">Firemaking</h5>
      <table className={"table"}>
        <thead>
          <tr>
            <th scope={"col"}>Item</th>
            <th scope={"col"}>Available</th>
            <th scope={"col"}>Burn</th>
            <th scope={"col"}>Experience Gained</th>
          </tr>
        </thead>
        <tbody>
          {trees.map(tree => <Row tree={tree} key={tree.name} change={handleBurnCountChange}/>)}
        </tbody>
      </table>
    </div>
  )
};


export default body;