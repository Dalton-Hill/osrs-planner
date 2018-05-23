import React from 'react';
import Row from './Row/Row';


const table = (props) => {
  return (
    <table className={"table"}>
      <thead className={"thead-light"}>
      <tr>
        <th>Description</th>
        <th>LvL</th>
        <th>Available</th>
        <th>Make</th>
        <th>XP</th>
      </tr>
      </thead>
      <tbody>
      {props.fletchingProducts.map(fletchingProduct => <Row fletchingProduct={fletchingProduct} key={fletchingProduct.name} onUpdateCount={props.onUpdateCount}/>)}
      </tbody>
    </table>
  )
};


export default table;